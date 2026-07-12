import type { Metadata } from "next";
import { Unbounded, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

const unbounded = Unbounded({ 
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap"
});

const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "WebArtist | Custom Websites & Digital Experiences",
  description: "A web design and development studio that builds outstanding custom websites for clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-canvas text-charcoal selection:bg-magenta selection:text-white relative">
        <SmoothScroll />
        <Navigation />
        <PageTransition>
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
