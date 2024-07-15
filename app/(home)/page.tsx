import HomeNavbar from "@/components/public/Navbar";
import Hero from "@/components/public/hero";
import Profile from "@/components/public/home/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Profile />
    </main>
  );
}
