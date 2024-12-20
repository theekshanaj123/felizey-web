import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#161221] text-[#D9D9D9] px-6 py-12">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold text-[#BB17A2] mb-6">
          Privacy Policy for Felizey
        </h1>
        <p className="text-sm text-[#5B5B5B] mb-4">Last Updated: 20/12/2024</p>

        <p className="text-lg leading-7 mb-8">
          At Felizey, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use the Felizey application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-6">1. Information We Collect</h2>
        <h3 className="text-xl font-semibold mb-4">1.1 Personal Data</h3>
        <ul className="list-disc pl-5 mb-6">
          <li>Name, photo, email address, phone number, and other account registration details.</li>
          <li>Location data to suggest relevant festivals.</li>
          <li>Payment information (processed securely through third-party payment providers).</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">1.2 Non-Personal Data</h3>
        <ul className="list-disc pl-5 mb-8">
          <li>Device information (e.g., IP address, browser type, operating system).</li>
          <li>Usage data (e.g., app activity, pages visited, features used).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-6">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Connect users with relevant festivals and communities.</li>
          <li>Facilitate ticket purchases and group chat creation.</li>
          <li>Improve app performance and user experience.</li>
          <li>Send updates, newsletters, or promotional content (with your consent).</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-6">3. Legal Basis for Data Processing</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Consent: For sending marketing communications or processing sensitive personal data.</li>
          <li>Contractual Necessity: To provide services like ticket purchases or event suggestions.</li>
          <li>Legitimate Interests: To analyze app performance or detect fraud.</li>
          <li>Legal Obligation: To comply with applicable laws and regulations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-6">4. Sharing Your Data</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Trusted third-party service providers (e.g., payment processors, analytics tools).</li>
          <li>Event organizers to facilitate ticketing and community-building features.</li>
          <li>Authorities, if required by law.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-6">5. International Data Transfers</h2>
        <p className="mb-8">
          If you access Felizey outside the EU/EEA, your data may be transferred to servers located in other countries. We ensure such transfers comply with GDPR and other laws by using appropriate safeguards, such as Standard Contractual Clauses.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-6">6. Your Rights</h2>
        <h3 className="text-xl font-semibold mb-4">6.1 GDPR (for EU/EEA Users)</h3>
        <ul className="list-disc pl-5 mb-6">
          <li>Access: Request a copy of your data.</li>
          <li>Correction: Rectify inaccurate or incomplete data.</li>
          <li>Deletion: Request the erasure of your data.</li>
          <li>Restriction: Limit the processing of your data.</li>
          <li>Portability: Receive your data in a structured format.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">6.2 CCPA (for California Users)</h3>
        <ul className="list-disc pl-5 mb-8">
          <li>Know: Understand what personal data we collect and how we use it.</li>
          <li>Delete: Request the deletion of your data.</li>
          <li>Opt-Out: Prevent the sale of your personal data.</li>
        </ul>

        <p className="mb-8">
          To exercise your rights, please contact us at 
          <a href="mailto:felizeyofficials@gmail.com" className="underline"> felizeyofficials@gmail.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-6">7. Data Retention</h2>
        <p className="mb-8">
          We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-6">8. Data Security</h2>
        <p className="mb-8">
          We implement robust measures to protect your data, including encryption, secure servers, and regular audits.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-6">9. Third-Party Links</h2>
        <p className="mb-8">
          Felizey may contain links to third-party websites. We are not responsible for the privacy practices of these sites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-6">10. Updates to This Policy</h2>
        <p className="mb-8">
          We may update this Privacy Policy from time to time. Any changes will be communicated through the app or email.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-6">11. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please reach out to:
        </p>
        <ul className="list-disc pl-5 mb-8">
          <li>
            Email: <a href="mailto:felizeyofficials@gmail.com" className="underline">felizeyofficials@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
