'use client';

import { FaShieldAlt, FaUserLock, FaDatabase, FaCookie, FaExchangeAlt, FaUsers } from 'react-icons/fa';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Networty - Startup Ecosystem Platform</title>
        <meta 
          name="description" 
          content="Networty's Privacy Policy explains how we collect, use, and protect your personal data for co-founder matching, startup funding, and entrepreneurial services." 
        />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, startup data security, founder privacy, information collection" />
        <meta property="og:title" content="Privacy Policy | Networty - Startup Ecosystem Platform" />
        <meta property="og:description" content="Learn how Networty protects your personal information while connecting you with co-founders and investors." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://networty.com/privacy-policy" />
        <link rel="canonical" href="https://networty.com/privacy-policy" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Networty Privacy Policy",
            "description": "How we handle your personal data for startup services",
            "datePublished": "2022-11-06",
            "dateModified": "2025-04-26",
            "author": {
              "@type": "Organization",
              "name": "Networty"
            },
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
        aria-labelledby="privacy-policy-heading"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <h1 id="privacy-policy-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Privacy Policy
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: <time dateTime="2022-11-06">November 6, 2022</time> | Last Updated: <time dateTime="2025-04-26">April 26, 2025</time>
            </p>
          </header>

          <article className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your Privacy Matters to Us
            </h2>
            <p className="text-gray-600 mb-8">
              At Networty.com, we are committed to protecting your personal information and being transparent about what we collect. This Privacy Policy explains how we handle your data when you use our platform for startup discovery, co-founder matching, and funding opportunities.
            </p>

            <section aria-labelledby="data-collection-heading" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <h3 id="data-collection-heading" className="sr-only">Data Collection and Usage</h3>
              <PrivacyFeature
                icon={<FaShieldAlt className="h-6 w-6 text-blue-600" aria-hidden="true" />}
                title="Information Collection"
                items={[
                  'Account registration details (name, email, etc.)',
                  'Professional background and skills',
                  'Startup preferences and interests',
                  'Payment information for premium services'
                ]}
              />
              <PrivacyFeature
                icon={<FaUserLock className="h-6 w-6 text-indigo-600" aria-hidden="true" />}
                title="Data Usage"
                items={[
                  'Facilitating connections between users',
                  'Personalizing your experience',
                  'Improving our services',
                  'Communicating important updates'
                ]}
              />
            </section>

            {/* Cookies Section */}
            <section aria-labelledby="cookies-heading">
              <h3 id="cookies-heading" className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FaCookie className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
                Cookies and Tracking Technologies
              </h3>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TechCard 
                  title="Essential Cookies"
                  description="Required for core functionality"
                />
                <TechCard 
                  title="Analytics Cookies"
                  description="Help us improve our services"
                />
                <TechCard 
                  title="Preference Cookies"
                  description="Remember your settings"
                />
              </div>
            </section>

            {/* Data Sharing Section */}
            <section aria-labelledby="data-sharing-heading" className="mb-12">
              <h3 id="data-sharing-heading" className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FaExchangeAlt className="h-5 w-5 text-indigo-600 mr-2" aria-hidden="true" />
                Data Sharing and Disclosure
              </h3>
              <p className="text-gray-600 mb-6">
                We only share your information in these specific circumstances:
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">•</span>
                    <span className="text-gray-700">With your consent for specific purposes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">•</span>
                    <span className="text-gray-700">With service providers under strict confidentiality agreements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2">•</span>
                    <span className="text-gray-700">When required by law or to protect our rights</span>
                  </li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="data-retention-heading" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <h3 id="data-retention-heading" className="sr-only">Data Retention and Third Parties</h3>
              <PrivacyFeature
                icon={<FaDatabase className="h-6 w-6 text-blue-600" aria-hidden="true" />}
                title="Data Retention"
                items={[
                  'Active accounts: Until deletion request',
                  'Inactive accounts: 2 years',
                  'Financial records: 7 years for legal compliance',
                  'Anonymized data may be retained indefinitely'
                ]}
              />
              <PrivacyFeature
                icon={<FaUsers className="h-6 w-6 text-indigo-600" aria-hidden="true" />}
                title="Third-Party Services"
                items={[
                  'Payment processors (Stripe, PayPal)',
                  'Analytics providers (Google Analytics)',
                  'Cloud service providers (AWS)',
                  'Communication tools (Whatsapp)'
                ]}
              />
            </section>

            <section aria-labelledby="international-transfers-heading">
              <h3 id="international-transfers-heading" className="text-xl font-semibold text-gray-900 mb-4">International Data Transfers</h3>
              <p className="text-gray-600 mb-6">
                As a global platform, your information may be transferred to and processed in countries other than your own. We ensure all transfers comply with applicable data protection laws and use standard contractual clauses where required.
              </p>
            </section>
          </article>

          <section aria-labelledby="user-rights-heading" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
            <h2 id="user-rights-heading" className="text-xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-600 mb-6">
              You have control over your personal data:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RightCard 
                title="Access"
                description="Request a copy of your data"
              />
              <RightCard 
                title="Correction"
                description="Update inaccurate information"
              />
              <RightCard 
                title="Deletion"
                description="Request erasure of your data"
              />
              <RightCard 
                title="Opt-Out"
                description="Unsubscribe from communications"
              />
            </div>
          </section>

          <section aria-labelledby="contact-heading" className="bg-white rounded-xl shadow-md p-8">
            <h2 id="contact-heading" className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For any privacy-related inquiries or to exercise your rights, please contact our Data Protection Officer:
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="bg-blue-50 rounded-lg p-4 flex-1">
                <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                <a href="mailto:privacy@networty.com" className="text-blue-600 hover:underline">privacy@networty.com</a>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 flex-1">
                <h3 className="font-medium text-gray-900 mb-2">Mailing Address</h3>
                <address className="text-gray-700 not-italic">
                  Networty<br />
                  Gaur mall,<br />
                  Greater Noida West, Pincode - 201306
                </address>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              We may update this policy periodically. We&apos;ll notify you of significant changes through our platform or via email.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

// Rest of your component definitions (PrivacyFeature, TechCard, RightCard) remain the same
// Just add aria-hidden="true" to all decorative icons in these components

interface PrivacyFeatureProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function PrivacyFeature({ icon, title, items }: PrivacyFeatureProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 h-full">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
      <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function RightCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-bold text-blue-600 mb-2">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}