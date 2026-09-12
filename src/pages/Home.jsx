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
  // Generated visuals (phone mockup + app screenshots).
  const phoneImage =
    "https://media.base44.com/images/public/6aa5d9b80f247372a16b15a0/4fc6052fc_generated_4c75c307.jpg";
  const screenshots = [
    "https://media.base44.com/images/public/6aa5d9b80f247372a16b15a0/168808d85_generated_b7ca72f2.jpg",
    "https://media.base44.com/images/public/6aa5d9b80f247372a16b15a0/fa520b5b3_generated_32c10537.jpg",
    "https://media.base44.com/images/public/6aa5d9b80f247372a16b15a0/b7bb63174_generated_99638223.jpg",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero phoneImage={phoneImage} />
        <Features />
        <HowItWorks />
        <Screenshots images={screenshots} />
      </main>
      <Footer />
    </div>
  );
}