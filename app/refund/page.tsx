import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Production-Grade Node.js Boilerplate",
  description: "Our policy regarding refunds for digital source code products.",
};

export default function RefundPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-slate-300">
      <div className="prose prose-invert lg:prose-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4">Refund Policy</h1>
        <p className="text-slate-500 mb-8 border-b border-slate-700 pb-4">
          Last updated: April 2026
        </p>
        
        <div className="space-y-6">
          <p>
            Because this product provides instant, irrevocable access to digital source code, all sales are final. 
            We do not offer refunds once access to the GitHub repository has been granted.
          </p>
          
          <p>
            Our boilerplate is built for experienced developers, and the codebase is provided as described. 
            If you experience technical issues setting up the boilerplate, or if you lose access to the repository, 
            please contact support at <a href="mailto:nabilelhady73@gmail.com" className="text-[#f7ab0a] hover:underline">nabilelhady73@gmail.com</a>.
          </p>
          
          <p>
            We are committed to ensuring you can successfully run the code on your local machine and will provide 
            reasonable technical assistance for setup issues.
          </p>
        </div>
      </div>
    </main>
  );
}
