import Navbar from '@/components/bars/Navbar'
import CartSection from '@/components/cart/CartSection'

import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { EmailExists } from '@/lib/graphcms'

type TUserProps = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password?: string;
}

const Cart = async() => {
    const session = await getServerSession(authOptions)
    const user = await EmailExists(session?.user?.email as string)
    
    return (
        <>
            <Navbar user={user[0]} />
            <CartSection />
        </>
    )
}

export default Cart