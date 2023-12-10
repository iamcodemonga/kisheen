import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers"
import { GetUserById } from "@/lib/graphcms";

export async function GET (req: NextRequest) {

    const store = cookies();
    let user;
    let access = { cart: true, order: false, discount: 37, tax: 800 };
    // console.log(store.get("kisheen"))
    console.log(req.cookies.get('kisheen'))

    if (!store.has("kisheen")) {
        return NextResponse.json({ user });
    }

    // console.log(store.get("kisheen")?.value)
    try {
        const id = store.get("kisheen")?.value;
        console.log(id)
        user = await GetUserById(id as string)
    } catch (error) {
        console.log(error)
    }

    // user = {
    //     firstname: "Emmanuel",
    //     lastname: "Ufot",
    //     email: "codemonga@gmail.com",
    //     role: "user"
    // }

    return NextResponse.json({ user, access });
    
}