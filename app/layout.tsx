import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { getBusinessData } from "./lib/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const business = await getBusinessData();

  return {
    metadataBase: new URL("https://www.ladywax.nl"),
    title: `${business.name} - ${business.description}`,
    description: business.description,
    keywords: [
      "waxing",
      "ladies only",
      "Amsterdam",
      "The Hague",
      "beauty salon",
      "hair removal",
    ],
    authors: [{ name: business.name }],
    openGraph: {
      title: business.name,
      description: business.description,
      url: "https://www.ladywax.nl",
      siteName: business.name,
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: business.name,
        },
      ],
      type: "website",
      locale: "nl_NL",
    },
    twitter: {
      card: "summary_large_image",
      title: business.name,
      description: business.description,
      images: ["/images/logo.png"],
    },
    icons: {
      icon: "/favico/favicon.ico",
      apple: "/favico/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-white text-secondary-900 font-sans selection:bg-primary-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
