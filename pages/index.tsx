import Head from "next/head";

// => Components
import Naviagtion from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Support from "@/components/Support";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>
          CareFinder | Access all healthcare in Nigeria within your region!
        </title>
        <meta
          name="  CareFinder | Access all healthcare in Nigeria within your region!"
          content="CareFinder | healthcare"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header components */}
      <section id="main">
        {/* Navigation components */}
        <Naviagtion />
        {/* Hero components */}
        <Hero />
      </section>
      <section>
        {/* Features components */}
        <Features />
        {/* FAQ components */}
        <FAQ />
        {/* Banner components */}
        <Support />
        {/* Footer components */}
        <Footer />
      </section>
    </>
  );
}
