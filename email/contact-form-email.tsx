import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  firstName: string;
  lastName: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  firstName,
  lastName,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Ny melding fra {firstName}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                {firstName} {lastName} skrev:
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>
                {firstName} sin epost er: {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
