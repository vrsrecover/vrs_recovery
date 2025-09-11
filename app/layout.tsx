import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

const GA_TRACKING_ID = "G-FMJTF4C691";

export const metadata: Metadata = {
  title: "VRS Recovery - Vehicle & Roadside Assistance",
  description:
    "VRS Recovery provides 24/7 Vehicle Recovery & Roadside Assistance across the UK. Fast, reliable towing, jump-starts, fuel delivery, and breakdown help when you it most.",

  keywords: [
    "vehicle recovery UK",
    "roadside assistance UK",
    "car breakdown help",
    "24/7 towing UK",
    "VRS Recovery",
  ],

  authors: [{ name: "VRS Recovery Team" }],
  creator: "VRS Recovery",
  publisher: "VRS Recovery",

  icons: {
    icon: [
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    // other: {
    //   rel: "icon",
    //   url: "/android-chrome-512x512.png",
    // },
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "VRS Recovery - Vehicle & Roadside Assistance",
    description:
      "VRS Recovery provides 24/7 Vehicle Recovery & Roadside Assistance across the UK. Fast, reliable towing, jump-starts, fuel delivery, and breakdown help when you it most.",
    url: "https://vrsrecovery.co.uk",
    siteName: "VRS Recovery",
    images: [
      {
        url: "https://vrsrecovery.co.uk/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "VRS Recovery Roadside Assistance UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VRS Recovery - Vehicle & Roadside Assistance",
    description:
      "VRS Recovery provides 24/7 Vehicle Recovery & Roadside Assistance across the UK. Fast, reliable towing, jump-starts, fuel delivery, and breakdown help when you it most.",
    images: [""],
    creator: "@VRSRecovery", // Twitter Account
  },

  alternates: {
    canonical: "https://vrsrecovery.co.uk",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" sizes="32x32" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
      </Head> */}
      <body
        className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        {children}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <Script
          id="organization-ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "VRS Recovery",
            url: "https://vrsrecovery.co.uk",
            logo: "https://vrsrecovery.co.uk/android-chrome-512x512.png",
            description:
              "VRS Recovery provides 24/7 Vehicle Recovery & Roadside Assistance across the UK. Fast, reliable towing, jump-starts, fuel delivery, and breakdown help when you need it most.",
            telephone: "+447475365247",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Morford Rd, Aldridge",
              addressLocality: "Walsall",
              addressRegion: "England",
              postalCode: "WS9 8TH",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.61,
              longitude: -1.922,
            },
            openingHours: ["Mo-Su 00:00-23:59"],
            sameAs: [],
          })}
        </Script>

        {/* Structured Data for Local Business SEO */}
        <Script
          id="automotive-business-ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            name: "VRS Recovery",
            url: "https://vrsrecovery.co.uk",
            logo: "https://vrsrecovery.co.uk/android-chrome-512x512.png",
            description:
              "VRS Recovery provides 24/7 Vehicle Recovery & Roadside Assistance across the UK. Fast, reliable towing, jump-starts, fuel delivery, and breakdown help when you it most.",
            telephone: "+447475365247",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Morford Rd, Aldridge",
              addressLocality: "Walsall",
              addressRegion: "England",
              postalCode: "WS9 8TH",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.61,
              longitude: -1.922,
            },
            openingHours: ["Mo-Su 08:00-18:00"],
          })}
        </Script>
      </body>
    </html>
  );
}
