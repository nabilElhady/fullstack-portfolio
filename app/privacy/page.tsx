import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Production-Grade Node.js Boilerplate",
  description: "How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-slate-300">
      <div className="prose prose-invert lg:prose-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-8 border-b border-slate-700 pb-4">
          Last updated: April 2026
        </p>
        
        <div className="space-y-6">
          <p>
            We collect basic information (such as your name and email address) solely for the purpose of 
            delivering the digital product, granting GitHub access, and sending critical security updates 
            regarding the boilerplate.
          </p>
          
          <p>
            We process all payments securely via Paddle (our Merchant of Record). We do not collect, process, 
            or store your credit card information on our servers.
          </p>
          
          <p>
            We will never sell, rent, or trade your personal data to third parties. Your data is used only 
            within our internal systems to maintain your product license and provide support.
          </p>
        </div>
      </div>
    </main>
  );
}
