import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { EmailExists } from "@/actions";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";


export async function POST(req:NextRequest){
    const { email, password } = await req.json();
    const cookie = cookies();
    const exists = await EmailExists(email);

    if (exists.length < 1) {
        return NextResponse.json({ status: "failed", message: `User does not exists!`})
    }

    const match = await bcrypt.compare(password, exists[0].password)

    if (!match) {
        return NextResponse.json({ status: "failed", message: `Email or Password is incorrect!`});
    }

    try {
        // create Jwt token
        const token = Jwt.sign({ id: exists[0].id }, String(process.env.JWT_secret) , { expiresIn: process.env.JWT_EXP});
        // setcookie
        cookie.set('kisheen', token, { path: "/", secure: true, httpOnly: true, maxAge: 2*24*60*60*1000 });
        return NextResponse.json({ status: "ok", message: `Welcome back, ${exists[0].firstName}!`});
    } catch (error) {
        console.log(error)
    }

    return NextResponse.json({ status: "failed", message: `An error occured!`});
}