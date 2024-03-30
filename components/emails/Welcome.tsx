import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from '@react-email/components';
import * as React from 'react';
import { WelcomeEmailProps } from '@/types';
  
export const WelcomeEmail = ({ name, discount = 20 }: WelcomeEmailProps) => (
<Html>
    <Head />
        <Preview>
        Welcome to Kisheen - Your Culinary Journey Begins! 🍽️
        </Preview>
    <Body style={main}>
        <Container style={container}>
            <Img
            src={`https://assets-global.website-files.com/6165adad51c39da51d4fe6cd/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg`}
            width="170"
            height="170"
            alt="Kisheen"
            style={logo}
            />
            <Text style={heading}>Hi <span style={{color: "#F75C04"}}>{name} &#128522;</span>,</Text>
            <Text style={paragraph}>Welcome to Kisheen – where delightful culinary experiences come to your doorstep! We're thrilled to have you on board and appreciate the trust you've placed in us for your food delivery needs.
            </Text>
            <Text style={paragraph}>At Kisheen, we understand that food is not just a necessity but a celebration of flavors, culture, and moments shared. Whether you're craving a cozy home-cooked native meal or exploring new cuisines, we're here to make your culinary journey extraordinary.
            </Text>
            <Text style={heading}>&#127873; Exclusive Welcome Offer:</Text>
            <Text style={paragraph}>As a token of our appreciation, we're delighted to offer you an exclusive {discount}% discount on your first order. This is our way of saying thank you for choosing Kisheen.
            </Text>
            <Text style={paragraph}>Thank you once again for joining Kisheen. We're committed to making every meal a memorable experience. If you have any questions or need assistance, our customer support team is here for you.
            </Text>
            <Text style={paragraph}>To a journey filled with delicious moments!</Text>
            <Section style={btnContainer}>
            {/* <Button pX={12} pY={12} style={button} href="https://getkoala.com">Get started</Button> */}
            </Section>
            <Text style={paragraph}>
            Best Regards,
            <br />
            The Kisheen team
            <br />
            <a href="tel:07066340180" style={{ color: "#F75C04", textDecoration: "underline" }}>07066340180</a>
            </Text>
            <Hr style={hr} />
            <Text style={footer}>Headquarters - NO.14 Shelton afrik, Uyo, Akwa Ibom state</Text>
        </Container>
    </Body>
</Html>
);

export default WelcomeEmail;

const main = {
backgroundColor: '#FFF8F5',
fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    // padding: '20px 48px',
};

const logo = {
    margin: '0 auto',
};

const heading = {
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '26px',
    marginTop: '50px'
};

const paragraph = {
    fontSize: '14px',
    lineHeight: '26px',
    margin: '25px 0'
};

const btnContainer = {
    textAlign: 'center' as const,
};

const button = {
    backgroundColor: '#5F51E8',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
};