import { Body, Container, Head, Heading, Html, Img, Link, Section, Text } from '@react-email/components';
  import * as React from 'react';
  
  interface PlaidVerifyIdentityEmailProps {
    validationCode?: string;
  }
  
  export const PasswordEmail = ({ validationCode = '144833' }: PlaidVerifyIdentityEmailProps) => (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://assets.stickpng.com/thumbs/652d7d9c6e99ebc857385488.png`}
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
            <Text style={code}>{validationCode}</Text>
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
  };
  
  const container = {
    backgroundColor: '#ffffff',
    border: '1px solid #eee',
    borderRadius: '5px',
    boxShadow: '0 5px 10px rgba(20,50,70,.2)',
    marginTop: '20px',
    width: '360px',
    margin: '0 auto',
    padding: '68px 0 130px',
  };
  
  const logo = {
    margin: '0 auto',
  };
  
  const tertiary = {
    color: '#0a85ea',
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
    fontSize: '15px',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    letterSpacing: '0',
    lineHeight: '23px',
    padding: '0 40px',
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
  