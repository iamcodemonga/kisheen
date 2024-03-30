import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailOrderTemplate from "@/components/emails/Order";
import { ReactElement } from "react";

const resend:Resend = new Resend(process.env.RESEND_APIKEY);

export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const { name: firstname, email, receipt, address, amount }: { name: string, email: string, receipt: string, address: string, amount: number } = await req.json();

    const sendMail = async(firstname: string, email: string, subject: string) => {
        try {
            const { data, error } = await resend.emails.send({
                from: 'kisheen <kisheen@codemonga.com>',
                to: [email],
                subject,
                react: EmailOrderTemplate({ firstname, receipt, address, amount }) as ReactElement,
            });
            console.log(data)
            if (error) {
                return NextResponse.json({ status: "failed", message: `Could not send mail!`});
            }
        } catch (error) {
            console.log(error)
        }
    }

    await sendMail(firstname, email, `Your Order with Kisheen is on its way! 🚀`);
    return NextResponse.json({ status: "ok", message: `${searchParams.get('method') == 'cash' ? "Order sent! to be paid on delivery" : "Card payment successful!"}`});
}