import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'

export async function GET (req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const reference = searchParams.get('reference');

    const verification = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, { 
        headers: {
            authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            "content-type": "application/json",
            "cache-control": "no-cache"
            },
        }
    )

    if (verification.status !== 200) {
        return NextResponse.json({ status: 'failed', statusCode: 405, message: 'Network error' })
    }

    if (!verification.data.status) {
        return NextResponse.json({ status: 'failed', statusCode: 405, message: 'Invalid transaction' })
    }

    const { customerNameame, email, country } = verification.data.data.customer;
    const { uid, mediaType } = verification.data.data.metadata;
    const ammount = parseInt(verification.data.data.amount)/100;

    // send email message
          
    // send order to database

}