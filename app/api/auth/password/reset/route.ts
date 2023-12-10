import { NextRequest, NextResponse } from "next/server";
import { EmailExists, ModifyPassword, VerifyUser } from "@/lib/graphcms";
import bcrypt from "bcrypt"


export async function POST(req:NextRequest){
    const { email } = await req.json();
    const exists = await EmailExists(email);
    const salt = await bcrypt.genSalt(10);

    if (exists.length < 1) {
        return NextResponse.json({ status: "failed", message: `User does not exists!`})
    }

    //generate password
    function makeid(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const password = makeid(8)
    const hashedPassword = await bcrypt.hash( password, salt );

    try {
        const update = await ModifyPassword(exists[0].id, hashedPassword);
        if (update.id) {
            await VerifyUser(exists[0].id);
            return NextResponse.json({ status: "ok", message: `${password}`});
        }
        return NextResponse.json({ status: "failed", message: `Could not update password!`});
        
    } catch (error) {
        console.log(error)
    }

    return NextResponse.json({ status: "failed", message: `An error occured!`});
}