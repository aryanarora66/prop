"use client"

import CoFounderHero from "@/components/co-founder/CoFounderHero";
import WhyCoFounderMatters from "@/components/co-founder/WhyCoFounderMatters";
import GreatCoFounderQualities from "@/components/co-founder/GreatCoFounderQualities";
import MatchingProcess from "@/components/co-founder/MatchingProcess";
import CoFounderTypes from "@/components/co-founder/CoFounderTypes";
import WhyChooseUs from "@/components/co-founder/WhyChooseUs";
import SuccessStories from "@/components/co-founder/SuccessStories";
import CallToAction from "@/components/co-founder/CallToAction";
import Head from "next/head";

export default function CoFounderPage() {
  return (
    <>
      <Head>
        <title>Find the Perfect Co-Founder | Networty Startup Matching Platform</title>
        <meta 
          name="description" 
          content="Discover your ideal startup co-founder with our AI-powered matching system. We connect complementary skills and personalities to build successful founding teams." 
        />
        <meta name="keywords" content="find co-founder, startup partner, business co-founder, technical co-founder, entrepreneurial matchmaking, startup team building" />
        <meta property="og:title" content="Find the Perfect Co-Founder | Networty Startup Matching Platform" />
        <meta property="og:description" content="AI-powered matching to connect you with the ideal co-founder for your startup venture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://networty.com/co-founder" />
        <link rel="canonical" href="https://networty.com/co-founder" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Find the Perfect Co-Founder",
            "description": "AI-powered matching to connect you with the ideal co-founder for your startup venture.",
            "url": "https://networty.com/co-founder",
            "publisher": {
              "@type": "Organization",
              "name": "Networty"
            }
          })}
        </script>
      </Head>

      <main>
        <CoFounderHero />
        
        <section aria-labelledby="why-cofounder-heading">
          <WhyCoFounderMatters />
        </section>
        
        <section aria-labelledby="qualities-heading">
          <GreatCoFounderQualities />
        </section>
        
        <section aria-labelledby="matching-heading">
          <MatchingProcess />
        </section>
        
        <section aria-labelledby="types-heading">
          <CoFounderTypes />
        </section>
        
        <section aria-labelledby="why-us-heading">
          <WhyChooseUs />
        </section>
        
        <section aria-labelledby="success-heading">
          <SuccessStories />
        </section>
        
        <section aria-labelledby="cta-heading">
          <CallToAction />
        </section>
      </main>
    </>
  );
}