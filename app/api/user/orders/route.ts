import { CreateOrder, VerifyOrder } from "@/lib/graphcms";
import { TOrder } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const items: TOrder[] = await req.json();

    if (searchParams.get('method') == 'cash' || searchParams.get('method') == 'card') {
        try {
            await Promise.all(items.map(async(item: TOrder) => {
                const order = await CreateOrder(item)
                await VerifyOrder(order.CreateOrder.id)
            }))
        } catch (error: unknown) {
            console.log(error)
        }
        
        return NextResponse.json({ status: "ok" });
    }

    return NextResponse.json({ status: "failed" });
}