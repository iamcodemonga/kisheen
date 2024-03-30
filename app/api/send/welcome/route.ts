import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ReactElement } from "react";
import WelcomeEmail from "@/components/emails/Welcome";

const resend:Resend = new Resend(process.env.RESEND_APIKEY);

export async function POST(req: NextRequest) {
    const { name: firstname, email, discount }: { name: string, email: string, discount: number } = await req.json();

    const sendMail = async(name: string, email: string, subject: string) => {
        try {
            const { data, error } = await resend.emails.send({
                from: 'kisheen <kisheen@codemonga.com>',
                to: [email],
                subject,
                react: WelcomeEmail({ name, discount }) as ReactElement,
            });
            console.log(data)
            if (error) {
                return NextResponse.json({ status: "failed", message: `Could not send mail!`});
            }
        } catch (error) {
            console.log(error)
        }
    }

    await sendMail(firstname, email, `Welcome to Kisheen - Your Culinary Journey Begins! 🍽️`);
    return NextResponse.json({ status: "ok", message: `Account created successfully!`});
}