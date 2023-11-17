import { CreateOrder, VerifyOrder } from "@/actions";
import { TOrder } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const items: TOrder[] = await req.json();

    if (searchParams.get('method') == 'cash') {
        try {
            await Promise.all(items.map(async(item: TOrder) => {
                const order = await CreateOrder(item)
                await VerifyOrder(order.createOrder.id)
            }))
        } catch (error: unknown) {
            console.log(error)
        }
        
        return NextResponse.json({ status: "ok", message: "Order sent! to be paid on delivery"});
    }

    return NextResponse.json({ status: "ok", message: "Card payment successful!"});
}