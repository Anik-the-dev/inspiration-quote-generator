import Head from "next/head";
import Image from "next/image";
// components
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  FooterLink,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
  GradientBackgroundCon,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle,
  RedSpan,
} from "@/components/QuoteGenerator/QuoteGeneratorElemenets";

// Assests
import Clouds2 from "@/assests/cloudy-weather.png";
import Clouds from "@/assests/cloud-and-thunder.png";
import { useState } from "react";
export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Inspirational Quote</title>
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a
              random inspirational quote provided by{" "}
              <FooterLink
                href="https://zenquotes.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZenQuotes API
              </FooterLink>
              .
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton onClick={null}>
              <GenerateQuoteButtonText>Make a Quote</GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>
        {/* Background Images */}
        <BackgroundImage1
          src={Clouds}
          height="300"
          alt="Cloudbackground1"
        ></BackgroundImage1>

        <BackgroundImage2 src={Clouds2} height="300" alt="cloudybackground1" />

        {/* Footer */}
        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with <RedSpan>♥</RedSpan> by{" "}
            <FooterLink
              href="https://github.com/anik-the-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              @AnikAcharjee{" "}
            </FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  );
}
