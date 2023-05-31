import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElemenets";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
    <Head>
      <title>Inspirational Quote</title>
    </Head>
    {/* Background */}
    <GradientBackgroundCon></GradientBackgroundCon>

    </>
  );
}
