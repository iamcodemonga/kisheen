import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ReactElement } from "react";
import WelcomeEmail from "@/components/emails/Welcome";

const resend:Resend = new Resend(process.env.RESEND_APIKEY);

export async function POST(req: NextRequest) {
    const { name: firstname, email }: { name: string, email: string } = await req.json();

    const welcomeMail = async(name: string, email: string, subject: string) => {
        try {
            const { data, error } = await resend.emails.send({
                from: 'kisheen <kisheen@codemonga.com>',
                to: [email],
                subject,
                react: WelcomeEmail({ name }) as ReactElement,
            });
            console.log(data)
            if (error) {
                return NextResponse.json({ status: "failed", message: `An error occured`});
            }
        } catch (error) {
            console.log(error)
        }
    }

    welcomeMail(firstname, email, `You are welcome, ${firstname}!`);
    return NextResponse.json({ status: "ok", message: `Account created successfully!`});
}