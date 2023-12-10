import { NextRequest, NextResponse } from "next/server";
import { CreateUser, EmailExists, VerifyUser } from "@/lib/graphcms";
import bcrypt from "bcrypt"


export async function POST(req:NextRequest){
    const { firstName, lastName, email, password, role } = await req.json();
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
        if (verified.id) {
            return NextResponse.json({ status: "ok", message: `Account successfully created!`})
        }
    } catch (error) {
        console.log(error)
    }

    return NextResponse.json({ status: "failed", message: `An error occured!`});
}