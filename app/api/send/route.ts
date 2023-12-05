import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailOrderTemplate from "@/components/emails/Order";
import { ReactElement } from "react";

const resend:Resend = new Resend(process.env.RESEND_APIKEY);

export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const { name: username, email, receipt, delivery }: { name: string, email: string, receipt: string, delivery: string } = await req.json();

    const orderMail = async(name: string, email: string, subject: string) => {
        try {
            const { data, error } = await resend.emails.send({
                from: 'kisheen <kisheen@codemonga.com>',
                to: [email],
                subject,
                react: EmailOrderTemplate({ name, receipt, delivery }) as ReactElement,
            });
            console.log(data)
            if (error) {
                return NextResponse.json({ status: "failed", message: `An error occured`});
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (searchParams.get('type') == 'order') {
        orderMail(username, email, 'Order successful');
        return NextResponse.json({ status: "ok", message: `${searchParams.get('method') == 'cash' ? "Order sent! to be paid on delivery" : "Card payment successful!"}`});
    }

    return NextResponse.json({ status: "failed", message: `An error occured`});
}