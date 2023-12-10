import { EmailExists, ModifyPassword, VerifyUser } from "@/lib/graphcms";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST (req: NextRequest) {
    const { email, currentpwd, newpwd } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash( newpwd, salt );

    // get the currentpwd
    try {
        const user = await EmailExists(email);
        const match = await bcrypt.compare(currentpwd, user[0].password);
        if (!match) {
            return NextResponse.json({ status: "failed", message: "current password is incorrect!"})
        }

        const update = await ModifyPassword(user[0].id, hashedPassword);
        if (update.id) {
            await VerifyUser(user[0].id);
            return NextResponse.json({ status: "ok", message: "Password changed successfully!"})
        }

        return NextResponse.json({ status: "failed", message: "current password is incorrect!"})

    } catch (error) {
        console.log(error)
    }

    return NextResponse.json({ status: "failed", message: "current password is incorrect!"})

}