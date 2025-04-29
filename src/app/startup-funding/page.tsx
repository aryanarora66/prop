"use client"

import FundingHero from "@/components/funding/FundingHero";
import Head from "next/head";

export default function FundingPage() {
  return (
    <>
      <Head>
        <title>Startup Funding Solutions | Connect with Investors | Networty</title>
        <meta 
          name="description" 
          content="Access our network of 500+ investors and secure funding for your startup. From seed rounds to Series A, we help founders find the right investors for their growth stage." 
        />
        <meta name="keywords" content="startup funding, find investors, seed funding, venture capital, angel investors, Series A funding, pitch to investors" />
        <meta property="og:title" content="Startup Funding Solutions | Connect with Investors | Networty" />
        <meta property="og:description" content="Get matched with the right investors for your startup stage and industry through our curated network." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://networty.com/startup-funding" />
        <meta property="og:image" content="https://networty.com/images/funding-og-image.jpg" />
        <link rel="canonical" href="https://networty.com/startup-funding" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Startup Funding Solutions",
            "description": "Connect with investors and secure funding for your startup",
            "url": "https://networty.com/startup-funding",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://networty.com"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Funding",
                "item": "https://networty.com/startup-funding"
              }]
            }
          })}
        </script>
      </Head>

      <main>
        <section aria-labelledby="funding-hero-heading">
          <FundingHero />
        </section>
        
        {/* Add these recommended sections for better SEO */}
        {/* <InvestorNetwork />
           <FundingProcess />
           <SuccessMetrics />
           <FundingResources />
           <Testimonials />
           <FundingCTA /> */}
      </main>
    </>
  );
}