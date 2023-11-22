import { CreateOrder, VerifyOrder } from "@/actions";
import { TOrder } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailOrderTemplate from "@/components/emails/Order";
import { ReactElement } from "react";

const resend:Resend = new Resend(process.env.RESEND_APIKEY);

export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const items: TOrder[] = await req.json();

    if (searchParams.get('method') == 'cash' || searchParams.get('method') == 'card') {
        try {
            await Promise.all(items.map(async(item: TOrder) => {
                const order = await CreateOrder(item)
                await VerifyOrder(order.createOrder.id)
            }))
        } catch (error: unknown) {
            console.log(error)
        }
        
        return NextResponse.json({ status: "ok" });
    }

    return NextResponse.json({ status: "failed" });
}