import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://i.ibb.co" />
        <link rel="preconnect" href="https://cdn.iconscout.com" />
        <link rel="preconnect" href="https://img.icons8.com" />
        <link rel="dns-prefetch" href="https://i.ibb.co" />
        <link rel="dns-prefetch" href="https://cdn.iconscout.com" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nabil Elhady",
              "url": "https://nabilelhady.dev",
              "image": "https://i.ibb.co/S7M1QK7p/1751483179968.jpg",
              "sameAs": [
                "https://github.com/nabilElhady",
                "https://www.linkedin.com/in/nabil-elhady-1962b4215/",
                "https://twitter.com/NabilElhady1"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Full Stack Developer with 2+ years of freelancing experience specializing in React, Next.js, Node.js, and AWS",
              "knowsAbout": ["React", "Next.js", "Node.js", "AWS", "TypeScript", "JavaScript", "MongoDB", "Express", "Full Stack Development"],
              "email": "nabilelhady73@gmail.com"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
