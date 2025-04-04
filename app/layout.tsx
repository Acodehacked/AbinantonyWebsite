import type { Metadata } from "next";
import { Inter, Lato, Nunito, Orbitron, Poppins, Raleway, Truculenta } from "next/font/google";
import "@/app/globals.css";
import HomeNavbar from "@/components/public/Navbar";

// const inter = Raleway({ weight: ['100','200','300','400','500','600','700','800','900'], subsets: ["latin"] });
const inter = Lato({ weight: "400", subsets: ["latin"] });


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
      <body className={` ${inter.className} dark bg-[#121212]`}>
        {children}
        </body>
    </html>
  );
}
