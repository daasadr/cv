import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter"
});
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: 'swap'
});
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Dagmar Drbálková - Full Stack Developer",
  description: "Full Stack Developer s 2+ lety zkušeností v IT. Specializace na TypeScript, React, Node.js. Portfolio, zkušenosti a kontaktní informace.",
  keywords: [
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Node.js",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Next.js",
    "PostgreSQL",
    "Dagmar Drbálková"
  ],
  authors: [{ name: "Dagmar Drbálková" }],
  creator: "Dagmar Drbálková",
  publisher: "Dagmar Drbálková",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://daasadr.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dagmar Drbálková - Full Stack Developer",
    description: "Portfolio Full Stack Developerky s 2+ lety zkušeností. Specializace na TypeScript, React, Node.js a moderní webové technologie.",
    url: 'https://daasadr.github.io',
    siteName: 'Dagmar Drbálková Portfolio',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dagmar Drbálková - Full Stack Developer",
    description: "Portfolio Full Stack Developerky s 2+ lety zkušeností v moderních webových technologiích.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="cs" 
      className={`${inter.variable} ${poppins.variable} ${playfairDisplay.variable}`}
    >
      <head>
        {/* Accessibility and performance meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#6366F1" />
        <meta name="color-scheme" content="light" />
        
        {/* Preload critical fonts */}
        <link 
          rel="preload" 
          href="/fonts/inter-var.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        
        {/* Enhanced security */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Accessibility improvements */}
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
        
        {/* Apple specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dagmar Drbálková" />
        
        {/* Microsoft specific */}
        <meta name="msapplication-TileColor" content="#6366F1" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured data for accessibility and SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dagmar Drbálková",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer s 2+ lety zkušeností v TypeScript, React, Node.js",
              "url": "https://daasadr.github.io",
              "sameAs": [
                "https://github.com/daasadr"
              ],
              "knowsAbout": [
                "TypeScript",
                "JavaScript", 
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Tailwind CSS",
                "Three.js"
              ],
              "email": "Daasa.D@seznam.cz",
              "telephone": "+420773245222",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CZ"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for screen readers */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Přeskočit na hlavní obsah
        </a>
        
        {/* Main application */}
        <div id="app" role="application" aria-label="Portfolio Dagmar Drbálková">
          {children}
        </div>
        
        {/* Screen reader only site info */}
        <div className="sr-only">
          <p>
            Tato stránka je optimalizována pro přístupnost a podporuje čtečky obrazovky, 
            klávesovou navigaci a další asistivní technologie.
          </p>
        </div>
      </body>
    </html>
  );
}