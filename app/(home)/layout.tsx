import type { Metadata } from "next";
import { Inter, Orbitron, Truculenta } from "next/font/google";
import "@/app/globals.css";
import HomeNavbar from "@/components/public/Navbar";

const inter = Truculenta({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Abin Antony",
  description: "Official Portfolio Website of Abin Antony Kattady",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <HomeNavbar />
        {children}</body>
    </html>
  );
}
