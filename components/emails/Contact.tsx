import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from '@react-email/components';
import * as React from 'react';
import { WelcomeEmailProps } from '@/types';

interface ContactEmailProps {
    name: string;
    subject: string;
    message: string;
  }
  
export const ContactEmail = ({ name, subject, message  }: ContactEmailProps) => (
<Html>
    <Head />
        <Preview>{subject}</Preview>
    <Body style={main}>
        <Container style={container}>
            <Img
            src={`https://assets-global.website-files.com/6165adad51c39da51d4fe6cd/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg`}
            width="170"
            height="170"
            alt="Kisheen"
            style={logo}
            />
            <Text style={heading}>Dear <span style={{color: "#F75C04"}}>Kisheen team</span>,</Text>
            <Text style={paragraph}>{message}.
            </Text>
            <Text style={paragraph}>
            Best Regards,
            <br />
            {name}
            </Text>
            <Hr style={hr} />
            <Text style={footer}>Headquarters - NO.14 Shelton afrik, Uyo, Akwa Ibom state</Text>
        </Container>
    </Body>
</Html>
);

export default ContactEmail;

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