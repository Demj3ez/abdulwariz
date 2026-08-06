import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";

const siteUrl = "https://abdulwarizyusuff.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdulwariz Yusuff — Business Operations, Marketing & AI Automation",
    template: "%s — Abdulwariz Yusuff",
  },
  description:
    "Abdulwariz Yusuff helps businesses build better systems — operations management, project execution, digital marketing strategy, and AI-powered business automation.",
  keywords: [
    "Abdulwariz Yusuff",
    "Business Operations Manager",
    "Project Manager",
    "Digital Marketing Strategist",
    "AI Automation Specialist",
    "n8n automation",
    "Ibadan Nigeria",
  ],
  authors: [{ name: "Abdulwariz Yusuff" }],
  openGraph: {
    title: "Abdulwariz Yusuff — Business Operations, Marketing & AI Automation",
    description:
      "Building better businesses through operations, strategy, and technology.",
    url: siteUrl,
    siteName: "Abdulwariz Yusuff",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulwariz Yusuff — Business Operations, Marketing & AI Automation",
    description:
      "Building better businesses through operations, strategy, and technology.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdulwariz Yusuff",
              jobTitle: "Business Operations Manager",
              url: siteUrl,
              email: "abdulwarizy28@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ibadan",
                addressRegion: "Oyo State",
                addressCountry: "NG",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
