import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ReactElement } from "react";
import PasswordEmail from "@/components/emails/Password";

const resend:Resend = new Resend(process.env.RESEND_APIKEY);

export async function POST(req: NextRequest) {
    const { email, password }: { email: string, password: string } = await req.json();

    const sendMail = async(email: string, passcode: string, subject: string) => {
        try {
            const { data, error } = await resend.emails.send({
                from: 'kisheen <kisheen@codemonga.com>',
                to: [email],
                subject,
                react: PasswordEmail({ passcode }) as ReactElement,
            });
            if (error) {
                return NextResponse.json({ status: "failed", message: `Mail not sent`});
            }
        } catch (error) {
            console.log(error)
        }
    }

    await sendMail(email, password, `Password Reset Request for Your Kisheen Account`);
    return NextResponse.json({ status: "ok", message: `Successful, Check your email!`});
}