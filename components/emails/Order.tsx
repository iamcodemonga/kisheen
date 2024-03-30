import { Body, Container, Column, Head, Heading, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components';
import * as React from 'react';
import { OrdersEmailTemplateProps } from '@/types';
  
export const EmailOrderTemplate = ({ firstname, receipt, address, amount }: OrdersEmailTemplateProps) => (
  <Html>
    <Head />
    {/* <Preview>Your Order with Kisheen is on its way! 🚀</Preview> */}
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src={`https://assets-global.website-files.com/6165adad51c39da51d4fe6cd/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg`}
            width="120"
            height="120"
            alt="Kisheen"
          />
        </Section>
        <Heading style={h1}>Hello <span style={{color: "#F75C04"}}>{firstname}</span>,</Heading>
        <Text style={paragraph}>Thank you for choosing Kisheen for your culinary delights! Your order is confirmed, and we're excited to let you know that it's already in the works.</Text>
        <Text style={heroText}>Order details:</Text>
        <div style={codeBox}>
          <ul>
            <li><Text style={p}><strong>Reference Number:</strong> {receipt}</Text></li>
            <li><Text style={p}><strong>Delivery address:</strong> {address}</Text></li>
            <li><Text style={p}><strong>Total Amount:</strong> &#8358;{amount.toLocaleString()}</Text></li>
          </ul>
          {/* <Text style={confirmationCodeText}>{receipt}</Text> */}
        </div>
        <Text style={text}>You can track the status of your order through our website. Watch the status of your package until it gets to your doorstep, ensuring you're always in the know. Our delivery team may need to reach out to you for a smooth delivery experience. If you have any questions or need assistance, our customer support team is ready to help. Reply to this email or call us at <a href="tel:07066340180" style={{ color: "#F75C04", textDecoration: "underline" }}>07066340180</a>.
        </Text>
        <Text style={text}>We appreciate your trust in us and look forward to making your meal experience exceptional. Should you have any feedback or suggestions, we'd love to hear from you.
        </Text>
        <Text style={text}>To delicious moments ahead!
        </Text>
        <Text style={paragraph}>
            Best Regards,
            <br />
            The Kisheen team
            <br />
            <a href="tel:07066340180" style={{ color: "#F75C04", textDecoration: "underline" }}>07066340180</a>
            </Text>
        <Section>
          <Text style={footerText}>
            ©2024 Kisheen, LLC, a food delivery company. <br />
            NO.14 Shelton afrik, Uyo, Akwa Ibom State, Nigeria <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
  
export default EmailOrderTemplate;

const footerText = {
  fontSize: '12px',
  color: '#b7b7b7',
  lineHeight: '15px',
  textAlign: 'left' as const,
  marginBottom: '50px',
  // marginLeft: "10px",
  // marginRight: "10px"
};

const footerLink = {
  color: '#b7b7b7',
  textDecoration: 'underline',
};

const footerLogos = {
  marginBottom: '32px',
  paddingLeft: '8px',
  paddingRight: '8px',
  width: '100%',
};

const socialMediaIcon = {
  display: 'inline',
  marginLeft: '32px',
};

const main = {
  // backgroundColor: '#FFF8F5',
  // backgroundColor: '#ffffff',
  margin: '0 auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const paragraph = {
  fontSize: '14px',
  lineHeight: '26px',
  margin: '25px 0px'
};

const p = {
  fontSize: '14px',
  lineHeight: '26px',
  margin: '5px 0'
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  // backgroundColor: '#FFF8F5',
};

const logoContainer = {
  marginTop: '32px',
  marginLeft: "10px"
};

const h1 = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '400',
  margin: '30px 0px',
  padding: '0',
  lineHeight: '42px',
};

const heroText = {
  fontSize: '20px',
  lineHeight: '28px',
  marginBottom: '20px',
  // marginLeft: "10px",
  // marginRight: "10px"
};

const codeBox = {
  background: 'rgb(245, 244, 245)',
  borderRadius: '4px',
  marginRight: 'auto',
  marginLeft: '0px',
  // width: '100%',
  // marginRight: '0px',
  marginBottom: '30px',
  padding: '20px 10px',
};

const confirmationCodeText = {
  fontSize: '30px',
  textAlign: 'center' as const,
  verticalAlign: 'middle',
};

const text = {
  color: '#000',
  fontSize: '14px',
  lineHeight: '24px',
  margin: "0 0px"
};
  
