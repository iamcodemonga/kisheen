import ContactEmail from '@/components/emails/Contact'
import EmailOrderTemplate from '@/components/emails/Order'
import PasswordEmail from '@/components/emails/Password'
import WelcomeEmail from '@/components/emails/Welcome'
import React from 'react'

type Props = {}

const Testmail = (props: Props) => {
    return (
        // <WelcomeEmail name="Chioma" discount={35} />
        // <ContactEmail name='lebron james' subject='Testimonial' message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum facilis rerum molestiae ullam sapiente iure dolore earum repellendus reprehenderit vitae, deleniti minima, libero mollitia voluptate hic labore esse ducimus.' />
        <EmailOrderTemplate firstname='Emmanuel' receipt='khsdf8747fwi' delivery='' amount={20000} address='No.10 emene street, Enugu' />
        // <PasswordEmail passcode='27ydg67jksf7' />
    )
}

export default Testmail