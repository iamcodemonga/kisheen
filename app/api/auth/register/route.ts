import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CreateUser, EmailExists, VerifyUser } from "@/actions";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";


export async function POST(req:NextRequest){
    const { firstName, lastName, email, password, role } = await req.json();
    const cookie = cookies();
    const exists = await EmailExists(email);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash( password, salt );

    if (exists.length > 0) {
        return NextResponse.json({ status: "failed", message: `Email address already exists!`})
    }

    try {
        // create user
        const user = await CreateUser({ firstName, lastName, email, password:hashedPassword, role });
        // verify user
        const verified = await VerifyUser(user.id);
        // setcookie
        if (verified.id) {
            const token = Jwt.sign({ id: verified.id }, String(process.env.JWT_secret) , { expiresIn: process.env.JWT_EXP});
            cookie.set('kisheen', token, { path: "/", secure: true, httpOnly: true, maxAge: 2*24*60*60*1000 });
            return NextResponse.json({ status: "ok", message: `account created successfully!`});
        }
    } catch (error) {
        console.log(error)
    }

    return NextResponse.json({ status: "failed", message: `An error occured!`});
}