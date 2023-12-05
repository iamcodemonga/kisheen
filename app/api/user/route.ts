import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers"

export async function GET (req: NextRequest) {

    const store = cookies();
    let user;
    let access = { cart: true, order: false, discount: 37, tax: 800 };

    if (!store.has("kisheen")) {
        return NextResponse.json({ user, access });
    }

    console.log(store.get("kisheen")?.value)

    user = {
        firstname: "Emmanuel",
        lastname: "Ufot",
        email: "codemonga@gmail.com",
        role: "user"
    }

    return NextResponse.json({ user, access });
    
}