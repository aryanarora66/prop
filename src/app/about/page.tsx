'use client';

import { FaRocket, FaHandshake, FaLightbulb, FaChartLine, FaUsers, FaSeedling } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Networty | Building Startup Ecosystems for Founders</title>
        <meta 
          name="description" 
          content="Networty empowers founders with AI tools and human connections to launch successful startups. Find co-founders, secure funding, and validate ideas." 
        />
        <meta name="keywords" content="startup ecosystem, find co-founder, startup funding, AI business ideas, entrepreneur community" />
        <meta property="og:title" content="About Networty | Building Startup Ecosystems for Founders" />
        <meta property="og:description" content="Empowering founders with tools and connections to build successful startups from idea to funding." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://networty.com/about" />
        <link rel="canonical" href="https://networty.com/about" />
      </Head>

      <main 
        className="w-full bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 lg:px-8 pb-20"
        style={{ paddingTop: '100px' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <header className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="block">Building the Future of</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Startup Ecosystems
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Networty empowers founders at every stage - from sparking ideas to securing funding and building dream teams.
            </p>
          </header>

          {/* Our Story */}
          <article className="bg-white rounded-xl shadow-md p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaRocket className="h-8 w-8 text-blue-600 mr-4" aria-hidden="true" />
                  <span>Our Story</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2023 by serial entrepreneurs who faced the same struggles, Networty was born from a simple idea: 
                  <strong className="font-semibold text-blue-600"> what if building a startup didn&apos;t have to be so lonely?</strong>
                </p>
                <p className="text-gray-600">
                  We&apos;ve created an all-in-one platform that combines AI-powered tools with human connections to give every founder their best shot at success.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center bg-white rounded-full p-6 shadow-lg mb-6" aria-hidden="true">
                    <GiBrain className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2,000+ Startups Launched</h3>
                  <p className="text-gray-600">Through our ecosystem</p>
                </div>
              </div>
            </div>
          </article>

          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" aria-labelledby="mission-vision-heading">
            <h2 id="mission-vision-heading" className="sr-only">Our Mission and Vision</h2>
            
            <article className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaChartLine className="h-6 w-6 mr-4" aria-hidden="true" />
                Our Vision
              </h3>
              <p className="mb-6">
                To become the world&apos;s most comprehensive startup launchpad, where anyone with ambition can find the resources, partners, and knowledge to build successful ventures.
              </p>
              <div className="bg-dark bg-opacity-20 rounded-lg p-4">
                <blockquote className="font-semibold">&quot;Democratizing entrepreneurship for the next generation of innovators&quot;</blockquote>
              </div>
            </article>
            
            <article className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaSeedling className="h-6 w-6 text-indigo-600 mr-4" aria-hidden="true" />
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                We provide founders with three core pillars of support:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3" aria-hidden="true">
                    <FaHandshake className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Connect entrepreneurs with the right co-founders and investors</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3" aria-hidden="true">
                    <FaLightbulb className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Generate and validate startup ideas using AI intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3" aria-hidden="true">
                    <FaUsers className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">Build a supportive community that shares knowledge and resources</span>
                </li>
              </ul>
            </article>
          </section>

          {/* Our Services */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                How We Help Founders
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                icon={<FaHandshake className="h-8 w-8 text-blue-600" aria-hidden="true" />}
                title="Find Co-Founders"
                description="Our matching algorithm connects you with complementary partners based on skills, personality, and vision."
                stats="1,200+ successful matches"
                gradient="from-blue-50 to-indigo-50"
              />
              <ServiceCard
                icon={<FaChartLine className="h-8 w-8 text-indigo-600" aria-hidden="true" />}
                title="Secure Funding"
                description="Access our network of 500+ investors actively looking to fund promising startups at all stages."
                stats="$75M+ raised to date"
                gradient="from-indigo-50 to-blue-50"
              />
              <ServiceCard
                icon={<FaLightbulb className="h-8 w-8 text-blue-600" aria-hidden="true" />}
                title="AI Startup Ideas"
                description="Generate innovative business concepts tailored to your skills and market opportunities."
                stats="10,000+ ideas generated monthly"
                gradient="from-blue-50 to-indigo-50"
              />
            </div>
          </section>

          {/* Team CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-12 text-center text-white" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-3xl font-bold mb-6">Ready to Build Your Startup?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you need an idea, a co-founder, or funding - we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/signup" 
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Get started with Networty today"
              >
                Get Started Today
              </a>
              <a 
                href="/team" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:bg-opacity-20 transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Meet our team"
              >
                Meet Our Team
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: string;
  gradient: string;
}

function ServiceCard({ icon, title, description, stats, gradient }: ServiceCardProps) {
  return (
    <article className={`bg-gradient-to-br ${gradient} rounded-xl p-8 h-full flex flex-col`}>
      <div className="p-3 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-sm mb-6" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <p className="text-sm font-semibold text-blue-600">{stats}</p>
    </article>
  );
}