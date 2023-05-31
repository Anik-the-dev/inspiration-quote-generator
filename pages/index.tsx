import Head from "next/head";
import Image from "next/image";
// components
import {
  BackgroundImage1,
  GradientBackgroundCon,
} from "@/components/QuoteGenerator/QuoteGeneratorElemenets";

// Assests
import Clouds from '@/assests/cloudy-weather.png'
export default function Home() {
  return (
    <>
      <Head>
        <title>Inspirational Quote</title>
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        <BackgroundImage1
          src={Clouds}
          height="300"
          alt="Cloudbackground1"
        ></BackgroundImage1>
      </GradientBackgroundCon>
    </>
  );
}
