import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "@/app/globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const golos = Golos_Text({
  subsets: ["latin"],
  variable: "--font-golos",
});

export const metadata: Metadata = {
  title: {
    default: "Abin Antony | Creative Developer & UI/UX Designer",
    template: "%s | Abin Antony",
  },
  description: "Full Stack Developer and UI/UX Designer specializing in building accessible, pixel-perfect web applications with a focus on user experience and modern design.",
  keywords: [
    "Abin Antony",
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Engineer",
    "Creative Developer",
    "Portfolio",
  ],
  authors: [{ name: "Abin Antony", url: "https://abinantony.site" }],
  creator: "Abin Antony",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abinantony.site",
    title: "Abin Antony | Creative Developer & UI/UX Designer",
    description: "Building digital products with a visual edge. Explore my portfolio of web applications and designs.",
    siteName: "Abin Antony Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Abin Antony Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abin Antony | Creative Developer & UI/UX Designer",
    description: "Building digital products with a visual edge. Explore my portfolio of web applications and designs.",
    images: ["/logo.png"],
    creator: "@acodehacked",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
    <html lang="en" className="tracking-wider">
      <body className={`${golos.variable} font-sans tracking-wider bg-white text-black antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
