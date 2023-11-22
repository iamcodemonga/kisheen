import { Body, Container, Column, Head, Heading, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components';
import * as React from 'react';
import { OrdersEmailTemplateProps } from '@/types';
  
export const EmailOrderTemplate = ({ name, receipt }: OrdersEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>We are on our way!!!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src={`https://assets.stickpng.com/thumbs/652d7d9c6e99ebc857385488.png`}
            width="120"
            height="120"
            alt="Slack"
          />
        </Section>
        <Heading style={h1}>Hello, {name}</Heading>
        <Text style={heroText}>
          This is to notify you that we have received your order and currently processing it! Kindly exercise patience as you await your package as it will arrive in no time. You can always identify your order with the reference number below.
        </Text>

        <Section style={codeBox}>
          <Text style={confirmationCodeText}>{receipt}</Text>
        </Section>

        <Text style={text}>
          Thank you so much for believing and patronizing us as we pledge to always be at your service.
        </Text>

        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: '66%' }}>
              <Img
                src={`https://assets.stickpng.com/thumbs/652d7d9c6e99ebc857385488.png`}
                width="36"
                height="36"
                alt="Slack"
              />
            </Column>
            <Column>
              <Row>
                <Column>
                  <Link href="/">
                    <Img
                      src={`https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png`}
                      width="32"
                      height="32"
                      alt="Slack"
                      style={socialMediaIcon}
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="/">
                    <Img
                      src={`https://assets.stickpng.com/thumbs/602179070ad3230004b93c28.png`}
                      width="32"
                      height="32"
                      alt="Slack"
                      style={socialMediaIcon}
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="/">
                    <Img
                      src={`https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png`}
                      width="32"
                      height="32"
                      alt="Slack"
                      style={socialMediaIcon}
                    />
                  </Link>
                </Column>
              </Row>
            </Column>
          </Row>
        </Section>

        <Section>
          <Link
            style={footerLink}
            href="https://slackhq.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our blog
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/legal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Policies
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/help"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help center
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/community"
            target="_blank"
            rel="noopener noreferrer"
            data-auth="NotApplicable"
            data-linkindex="6"
          >
            Slack Community
          </Link>
          <Text style={footerText}>
            ©2022 Slack Technologies, LLC, a Salesforce company. <br />
            500 Howard Street, San Francisco, CA 94105, USA <br />
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
  backgroundColor: '#ffffff',
  margin: '0 auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
};

const logoContainer = {
  marginTop: '32px',
};

const h1 = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  lineHeight: '42px',
};

const heroText = {
  fontSize: '20px',
  lineHeight: '28px',
  marginBottom: '30px',
};

const codeBox = {
  background: 'rgb(245, 244, 245)',
  borderRadius: '4px',
  marginRight: '50px',
  marginBottom: '30px',
  padding: '43px 23px',
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
};
  
