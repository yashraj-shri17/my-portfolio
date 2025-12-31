import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yashraj Shrivastava - Building smarter AI, one learning at a time.",
  description: "Building smarter AI, one project and one learner at a time.",
  openGraph: {
    title: "Yashraj Shrivastava - Building smarter AI, one learning at a time.",
    description: "Building smarter AI, one project and one learner at a time.",
    url: "https://portfolio-yash-raj.vercel.app/",
    siteName: "YashRaj",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Yash Raj Portfolio Share Card",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
