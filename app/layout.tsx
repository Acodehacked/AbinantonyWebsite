import type { Metadata } from "next";
import { Abel, Anton, Inter, Lato, Nunito, Orbitron, Poppins, Raleway, Truculenta } from "next/font/google";
import "@/app/globals.css";

const anton = Abel({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-lato'
});


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
    <html lang="en" className="tracking-wider">
      <body className={`${anton.className} tracking-wider dark bg-[#121212]`}>
        {children}
      </body>
    </html>
  );
}
