import type { Metadata } from "next";
import "./globals.css";
import ToastProvider from "../components/ToastContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Nexora Global Industries",
    template: "%s | Nexora Global Industries",
  },
  description: "Manufacturer and exporter of premium tile adhesives, epoxy, grouts, and waterproofing solutions based in Ahmedabad, India. 15+ years experience, 8 countries served.",
  keywords: ["construction chemicals", "tile adhesive", "epoxy", "waterproofing", "grout", "wall putty", "PU adhesive", "manufacturer", "exporter", "India"],
  authors: [{ name: "Nexora Global Industries Pvt Ltd" }],
  creator: "Nexora Global Industries Pvt Ltd",
  publisher: "Nexora Global Industries Pvt Ltd",
  openGraph: {
    type: "website",
    url: "https://www.nexoraindia.org",
    siteName: "Nexora Global Industries",
    title: "Nexora Global Industries",
    description: "Premium construction chemicals manufacturer & exporter. Tile adhesives, epoxy, grout, waterproofing, PU adhesives & wall putty. 15+ years, 8 countries.",
    images: [
      {
        url: "/NEXORA Logo Final-01.png",
        width: 1200,
        height: 630,
        alt: "Nexora Global Industries Logo",
      },
    ],
    locale: "en_IN",
    alternateLocale: "en",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexoraindia",
    title: "Nexora Global Industries",
    description: "Premium construction chemicals manufacturer & exporter.",
    images: ["/NEXORA Logo Final-01.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexora Global Industries Pvt Ltd",
  url: "https://www.nexoraindia.org",
  logo: "https://www.nexoraindia.org/nexora-logo.svg",
  description: "Manufacturer and exporter of premium construction chemicals based in Ahmedabad, Gujarat, India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shade No 2, Survey No-1525/119, Near Navkar Heights, off. S.P. Ring Road, Ognaj",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380060",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-92748-58900",
      contactType: "sales",
      email: "sales@nexoraindia.org",
      areaServed: "IN",
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-92748-58900",
      contactType: "support",
      email: "info@nexoraindia.org",
      areaServed: "IN",
      availableLanguage: ["en"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/1EYNPkeWqs/",
    "https://www.instagram.com/industriesnexora",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Chemicals",
    description: "Tile adhesives, PU adhesives, epoxy systems, grouts, waterproofing, and wall putty.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-ink">
        <ToastProvider>
          <Navbar />
          {children}
          <WhatsAppButton />
          {/* Structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ToastProvider>
      </body>
    </html>
  );
}
