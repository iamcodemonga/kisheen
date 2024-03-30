import { Body, Container, Head, Preview, Heading, Html, Img, Link, Section, Text } from '@react-email/components';
  import * as React from 'react';
  
  interface PasswordEmailProps {
    passcode: string;
  }
  
  export const PasswordEmail = ({ passcode }: PasswordEmailProps) => (
    <Html>
      <Head />
      <Preview>Password Reset Request for Your Kisheen Account</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://assets-global.website-files.com/6165adad51c39da51d4fe6cd/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg`}
            width="170"
            height="170"
            alt="logo"
            style={logo}
          />
          <Text style={tertiary}>Your new password</Text>
          <Heading style={secondary}>
            Access your account with the newly generated password below:
          </Heading>
          <Section style={codeContainer}>
            <Text style={code}>{passcode}</Text>
          </Section>
          <Text style={paragraph}>N/B: We advice that you change this password to your preferred password once you gain access your dashboard to maintain full privacy on your account.</Text>
          <Text style={paragraph}>
            Thank you!
          </Text>
        </Container>
        <Text style={footer}>Securely powered by Kisheen.</Text>
      </Body>
    </Html>
  );
  
  export default PasswordEmail;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    padding: "50px 0"
  };
  
  const container = {
    backgroundColor: '#ffffff',
    border: '1px solid #eee',
    borderRadius: '5px',
    boxShadow: '0 5px 10px rgba(20,50,70,.2)',
    marginTop: '20px',
    width: '360px',
    margin: '50px auto',
    padding: '68px 0 130px',
  };
  
  const logo = {
    margin: '50px auto',
  };
  
  const tertiary = {
    color: '#F75C04',
    fontSize: '11px',
    fontWeight: 700,
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    height: '16px',
    letterSpacing: '0',
    lineHeight: '16px',
    margin: '16px 8px 8px 8px',
    textTransform: 'uppercase' as const,
    textAlign: 'center' as const,
  };
  
  const secondary = {
    color: '#000',
    display: 'inline-block',
    fontFamily: 'HelveticaNeue-Medium,Helvetica,Arial,sans-serif',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '24px',
    marginBottom: '0',
    marginTop: '0',
    textAlign: 'center' as const,
  };
  
  const codeContainer = {
    background: 'rgba(0,0,0,.05)',
    borderRadius: '4px',
    margin: '16px auto 14px',
    verticalAlign: 'middle',
    width: '280px',
  };
  
  const code = {
    color: '#000',
    display: 'inline-block',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: '32px',
    fontWeight: 700,
    letterSpacing: '6px',
    lineHeight: '40px',
    paddingBottom: '8px',
    paddingTop: '8px',
    margin: '0 auto',
    width: '100%',
    textAlign: 'center' as const,
  };
  
  const paragraph = {
    color: '#444',
    fontSize: '14px',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    letterSpacing: '0',
    lineHeight: '23px',
    padding: '20px 40px',
    margin: '0',
    textAlign: 'center' as const,
  };
  
  const link = {
    color: '#444',
    textDecoration: 'underline',
  };
  
  const footer = {
    color: '#000',
    fontSize: '12px',
    fontWeight: 800,
    letterSpacing: '0',
    lineHeight: '23px',
    margin: '0',
    marginTop: '20px',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    textAlign: 'center' as const,
    textTransform: 'uppercase' as const,
  };
  