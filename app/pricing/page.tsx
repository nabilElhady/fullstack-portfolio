import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Production-Grade Node.js Boilerplate",
  description: "Simple, transparent pricing for the ultimate backend foundation.",
};

const features = [
  "Node.js + TypeScript + Express",
  "PostgreSQL with migrations",
  "BullMQ + Redis background jobs",
  "JWT auth with refresh tokens",
  "AWS Lambda deployment config",
  "Private GitHub repo access",
];

export default function PricingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-slate-200">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-white">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-xl text-slate-400">
          The ultimate backend foundation for scaling to 10k+ daily requests.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-[rgb(45,45,45)] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-w-md w-full">
          <div className="p-8 text-center">
            <h2 className="text-lg font-semibold text-[#f7ab0a] uppercase tracking-wide">
              Production-Grade Node.js Boilerplate
            </h2>
            <div className="mt-4 flex items-baseline justify-center">
              <span className="text-5xl font-extrabold tracking-tight text-white">
                $149
              </span>
              <span className="ml-1 text-xl font-medium text-slate-400">
                USD
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400 font-medium">
              One-time payment, lifetime access
            </p>
          </div>

          <div className="px-8 pb-8">
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-[#f7ab0a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-slate-300">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <button className="w-full bg-[#f7ab0a] text-black px-6 py-4 rounded-xl font-bold text-lg hover:bg-[#f7ab0a]/90 transition-all duration-300 shadow-lg shadow-[#f7ab0a]/20">
                Buy Now
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">
              Secure payment via Paddle. Instant repo access.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
