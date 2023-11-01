import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Wildlife Exploration Guide",
  description: "Discover the great outdoors with EcoRover! Navigate effortlessly with offline maps, ensuring you never lose your way. Embark on memorable wilderness adventures with friends and family, exploring valleys and reaching mountain summits. Your ultimate nature companion awaits!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
