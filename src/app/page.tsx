"use client"

import Hero from "@/components/home/HomeHero";
import HowItHelps from "@/components/home/HowItHelps";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import JoinToday from "@/components/home/JoinToday";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title> AI-Powered Startup Ecosystem for Founders | Networty </title>
        <meta 
          name="description" 
          content="Launch your startup faster with Networty - Find co-founders, secure funding, validate ideas, and build your team through our AI-powered platform and global founder network." 
        />
        <meta name="keywords" content="startup platform, find co-founder, startup funding, business ideas, entrepreneur community, build startup team" />
        <meta property="og:title" content="Networty | AI-Powered Startup Ecosystem for Founders" />
        <meta property="og:description" content="Your all-in-one platform to launch and grow your startup with the right team, funding, and resources." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://networty.com" />
        
        <meta property="og:site_name" content="Networty" />
        <link rel="canonical" href="https://networty.com" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Networty",
            "url": "https://networty.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://networty.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "description": "AI-powered startup ecosystem helping founders build successful ventures",
            "publisher": {
              "@type": "Organization",
              "name": "Networty",
              "logo": {
                "@type": "ImageObject",
                "url": "https://networty.com/logo.png",
                "width": 300,
                "height": 60
              }
            }
          })}
        </script>
      </Head>

      <main className="overflow-hidden">
        {/* Hero Section - Full width without padding */}
        <section className="w-full">
          <Hero />
        </section>

        {/* Value Proposition - Seamless transition */}
        <section className="w-full bg-white">
          <HowItHelps />
        </section>

        {/* USP Section - Consistent background */}
        <section className="w-full bg-gray-50">
          <WhyChooseUs />
        </section>

        {/* CTA Section - Full width with gradient */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
          <JoinToday />
        </section>

        {/* Future Sections (commented out but ready for implementation) */}
        {/*
        <section className="w-full bg-white">
          <FutureSection />
        </section>
        <section className="w-full bg-gray-50">
          <HowItWorksSection />
        </section>
        <section className="w-full bg-white">
          <UserCards />
        </section>
        <section className="w-full bg-gray-50">
          <SuccessStoriesSection />
        </section>
        */}
      </main>
    </>
  );
}