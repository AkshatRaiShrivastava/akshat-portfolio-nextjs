import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshat Rai - Portfolio",
  description: "Full-Stack Developer and Android Enthusiast",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="4J3MfueXga_agGtrbGCmWztHX5stg7ILaU3grePu17M"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Title and SEO */}
        <title>Akshat Rai - Portfolio</title>
        <meta
          name="description"
          content="Full-Stack Developer and Android Enthusiast. Explore the portfolio of Akshat Rai – Full-Stack Developer and Android Enthusiast. Discover projects on web, mobile, and scalable solutions."
        />
        <meta
          name="keywords"
          content="Akshat Rai Portfolio, Full-Stack Developer, Android Developer, React Developer, Flutter, JavaScript, TypeScript, Projects"
        />
        <meta name="author" content="Akshat Rai" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Akshat Rai - Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Akshat Rai featuring web, mobile, and automation projects."
        />
        <meta property="og:image" content="/assets/akshat_logo.png" />
        <meta property="og:url" content="https://aksh06.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Akshat Rai Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akshat Rai - Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Akshat Rai – Full-Stack Developer and Android Enthusiast."
        />
        <meta name="twitter:image" content="/assets/akshat_logo.png" />
        <meta name="twitter:site" content="@AkshShriv2005" />
        <meta name="twitter:creator" content="@AkshShriv2005" />
        <meta name="twitter:domain" content="https://x.com/AkshShriv2005" />

        <link rel="icon" href="/assets/akshat_logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
