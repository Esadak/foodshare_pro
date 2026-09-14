import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Screenshots from "@/components/landing/Screenshots";
import Footer from "@/components/landing/Footer";

// Static marketing landing page for the Foodshare mobile app.
// All visible text is in Swedish; code and comments are in English.
export default function Home() {
  // Local images from public folder
  /** @type {string} */
  const phoneImage = "/hero-mockup.png";
  
  /** @type {string[]} */
  const screenshots = [
    "/menu.png",
    "/card.png",
    "/stat.png",
    // "/profil.png",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero heroImage={phoneImage} />
        <Features />
        <HowItWorks />
        <Screenshots images={screenshots} />
      </main>
      <Footer />
    </div>
  );
}