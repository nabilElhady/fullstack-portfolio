import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nabil Elhady | Full Stack Developer",
  description: "Production-grade SaaS systems and web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[rgb(36,36,36)] text-white min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
