'use client';

import { FaFileContract, FaBalanceScale, FaGavel, FaExclamationTriangle, FaUserShield, FaHandshake } from 'react-icons/fa';
import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Networty Startup Platform</title>
        <meta 
          name="description" 
          content="Networty's Terms & Conditions govern your use of our co-founder matching, startup funding, and entrepreneurial services platform." 
        />
        <meta name="keywords" content="terms and conditions, user agreement, startup platform terms, legal policies, co-founder matching terms" />
        <meta property="og:title" content="Terms & Conditions | Networty Startup Platform" />
        <meta property="og:description" content="Legal terms governing your use of Networty's startup ecosystem services" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://networty.com/terms" />
        <link rel="canonical" href="https://networty.com/terms" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "description": "Legal terms for using Networty's startup services",
            "datePublished": "2022-11-06",
            "dateModified": "2025-04-26",
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

      <section 
        className="w-full bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 lg:px-8 pb-20"
        style={{ paddingTop: '100px' }}
        aria-labelledby="terms-heading"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <h1 id="terms-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Terms & Conditions
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: <time dateTime="2022-11-06">November 6, 2022</time> | Last Updated: <time dateTime="2025-04-26">April 26, 2025</time>
            </p>
          </header>

          <article className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Welcome to Networty
            </h2>
            <p className="text-gray-600 mb-8">
              These Terms & Conditions govern your use of our platform for startup discovery, co-founder matching, and funding opportunities. By accessing our services, you agree to comply with these terms.
            </p>

            <section aria-labelledby="account-terms-heading" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <h3 id="account-terms-heading" className="sr-only">Account Terms and User Responsibilities</h3>
              <TermCard
                icon={<FaFileContract className="h-6 w-6 text-blue-600" aria-hidden="true" />}
                title="Account Terms"
                items={[
                  'You must be at least 18 years old',
                  'Provide accurate registration information',
                  'You are responsible for account security',
                  'No transfer of accounts permitted'
                ]}
              />
              <TermCard
                icon={<FaBalanceScale className="h-6 w-6 text-indigo-600" aria-hidden="true" />}
                title="User Responsibilities"
                items={[
                  'Comply with all applicable laws',
                  'No fraudulent or misleading content',
                  'Respect intellectual property rights',
                  'No harassment or abusive behavior'
                ]}
              />
            </section>

            {/* Content Guidelines Section */}
            <section aria-labelledby="content-guidelines-heading" className="mb-12">
              <h3 id="content-guidelines-heading" className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FaExclamationTriangle className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
                Content Guidelines
              </h3>
              <p className="text-gray-600 mb-6">
                You agree not to post content that:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GuidelineCard 
                  title="Prohibited Content"
                  items={[
                    'Illegal or fraudulent material',
                    'Confidential information',
                    'Malicious code or viruses',
                    'Spam or unauthorized advertising'
                  ]}
                />
                <GuidelineCard 
                  title="Startup Listings"
                  items={[
                    'Must be your own venture',
                    'Accurate financial disclosures',
                    'No exaggerated claims',
                    'Clear equity terms if applicable'
                  ]}
                />
              </div>
            </section>

            {/* Payments and Fees Section */}
            <section aria-labelledby="payments-heading" className="mb-12">
              <h3 id="payments-heading" className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FaHandshake className="h-5 w-5 text-indigo-600 mr-2" aria-hidden="true" />
                Payments & Subscriptions
              </h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">•</span>
                    <span className="text-gray-700"><strong>Premium Services:</strong> Certain features require payment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">•</span>
                    <span className="text-gray-700"><strong>Auto-Renewal:</strong> Subscriptions renew automatically unless canceled</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">•</span>
                    <span className="text-gray-700"><strong>Refunds:</strong> Case-by-case basis for service issues</span>
                  </li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="legal-terms-heading" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <h3 id="legal-terms-heading" className="sr-only">Legal Terms</h3>
              <TermCard
                icon={<FaGavel className="h-6 w-6 text-blue-600" aria-hidden="true" />}
                title="Dispute Resolution"
                items={[
                  '30-day negotiation period required',
                  'Mediation before legal action',
                  'Governing law: California, USA',
                  'Venue for disputes: San Francisco County'
                ]}
              />
              <TermCard
                icon={<FaUserShield className="h-6 w-6 text-indigo-600" aria-hidden="true" />}
                title="Liability Limitations"
                items={[
                  'No guarantee of matches or funding',
                  'Not responsible for user interactions',
                  'Service provided "as-is"',
                  'Maximum liability limited to fees paid'
                ]}
              />
            </section>

            <section aria-labelledby="modifications-heading">
              <h3 id="modifications-heading" className="text-xl font-semibold text-gray-900 mb-4">Modifications</h3>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance. We&apos;ll notify you of significant changes through our platform or via email.
              </p>
            </section>
          </article>

          <section aria-labelledby="contact-heading" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h2 id="contact-heading" className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms & Conditions:
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                <a href="mailto:legal@networty.com" className="text-blue-600 hover:underline">legal@networty.com</a>
              </div>
              <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Mailing Address</h3>
                <address className="text-gray-700 not-italic">
                  Networty, Inc.<br />
                  123 Startup Lane<br />
                  San Francisco, CA 94107
                </address>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              These Terms & Conditions were last updated on the date indicated above.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

interface TermCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function TermCard({ icon, title, items }: TermCardProps) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 h-full">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-full mr-4" aria-hidden="true">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2" aria-hidden="true">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function GuidelineCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
      <h4 className="font-medium text-gray-900 mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 text-xs mt-1 mr-2" aria-hidden="true">•</span>
            <span className="text-gray-600 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}