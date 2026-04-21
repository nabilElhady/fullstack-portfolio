import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Production-Grade Node.js Boilerplate",
  description: "Terms and conditions for using our Production-Grade Node.js Boilerplate.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-slate-300">
      <div className="prose prose-invert lg:prose-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-8 border-b border-slate-700 pb-4">
          Last updated: April 2026
        </p>
        
        <div className="space-y-6">
          <p>
            By purchasing the Production-Grade Node.js Boilerplate, you are granted a non-exclusive, 
            non-transferable license to use the code to build unlimited personal or commercial applications 
            (SaaS, internal tools, etc.).
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Restrictions</h2>
          <p>
            You may NOT resell, redistribute, or openly publish the source code of this boilerplate as a 
            competing template, UI kit, or boilerplate product. You may not share your private GitHub 
            repository access with other developers who have not purchased a license.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Disclaimer</h2>
          <p>
            The code is provided &quot;as is&quot; without warranty of any kind, express or implied. 
            In no event shall the author be liable for any claim, damages, or other liability arising 
            from your use of the software.
          </p>
        </div>
      </div>
    </main>
  );
}
