import type { Metadata, Viewport } from "next";
import "material-symbols/index.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollIndicator from "@/components/ScrollIndicator";
import FloatingAIChatbot from "@/components/FloatingAIChatbot";
import CookieConsentBanner from "@/components/CookieConsentBanner";

export const viewport: Viewport = {
  themeColor: "#087E8B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shenllhrms.com"),
  title: {
    default: "Shenll HRMS — Intelligent HR, Payroll & Workforce Management Platform",
    template: "%s | Shenll HRMS",
  },
  description:
    "Simplify HR management and empower your workforce with Shenll HRMS. Automated payroll, biometric attendance, leave tracking, project allocation, and predictive AI insights.",
  keywords: [
    "HRMS Software",
    "HR Software India",
    "HR Software Chennai",
    "Payroll Software",
    "Attendance Management Software",
    "Employee Management System",
    "Leave Management Software",
    "Performance Management Software",
    "AI HRMS",
    "AI HR Automation",
    "Workforce Management",
  ],
  authors: [{ name: "Shenll Technology Solutions Pvt Ltd" }],
  creator: "Shenll Technology Solutions Pvt Ltd",
  publisher: "Shenll Technology Solutions Pvt Ltd",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shenllhrms.com",
    siteName: "Shenll HRMS",
    title: "Shenll HRMS — AI-Powered HR & Payroll Platform",
    description:
      "All-in-one HR platform to automate attendance, payroll, leaves, tasks, and workforce decisions with AI agents.",
    images: [
      {
        url: "/hero-section-img.webp",
        width: 1200,
        height: 630,
        alt: "Shenll HRMS Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shenll HRMS — AI-Powered HR & Payroll Platform",
    description: "Automate attendance, leave, and payroll with Shenll HRMS. Cloud-native, secure, and mobile-ready.",
    images: ["/hero-section-img.webp"],
  },
  alternates: {
    canonical: "https://shenllhrms.com",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://shenllhrms.com/#organization",
    name: "Shenll Technology Solutions Pvt Ltd",
    url: "https://shenllhrms.com",
    logo: "https://shenllhrms.com/shenll-logo.svg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8122046761",
        contactType: "sales and customer support",
        email: "info@shenllhrms.com",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No.1069, Munusamy Salai, K.K Nagar",
      addressLocality: "Chennai",
      postalCode: "600078",
      addressCountry: "IN",
    },
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://shenllhrms.com/#website",
    url: "https://shenllhrms.com",
    name: "Shenll HRMS",
    publisher: {
      "@id": "https://shenllhrms.com/#organization",
    },
  };

  const jsonLdSoftwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Shenll HRMS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://shenllhrms.com",
    description: "Enterprise HR, statutory payroll automation, biometric punch sync, and AI workforce planning platform.",
    offers: {
      "@type": "Offer",
      price: "100.00",
      priceCurrency: "INR",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "99",
    },
    author: {
      "@id": "https://shenllhrms.com/#organization",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F0F4F8] text-[#334155] antialiased" suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <ScrollIndicator />
        <FloatingAIChatbot />
        <CookieConsentBanner />
        <Footer />
      </body>
    </html>
  );
}
