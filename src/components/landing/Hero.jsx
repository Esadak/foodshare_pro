import React from "react";
import { Download } from "lucide-react";

/**
 * @param {{ heroImage?: string }} props
 */
export default function Hero({ heroImage }) {
  return (
    <section id="top" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Soft blue ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Foodshare – Köp och sälj hemlagad mat lokalt
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            Upptäck lokala kockar i ditt område. Beställ färsk, hemlagad mat direkt från grannskapet.
          </p>

          <div id="ladda-ner" className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
  href="https://play.google.com/store/apps/details?id=com.ezay.foodshare"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105 hover:brightness-110"
>
  <Download className="w-5 h-5" />
  Ladda ner appen
</a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Tillgänglig på Google Play</p>
        </div>

        {/* Right: phone mockup */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[260px] sm:w-[300px] aspect-[9/16] rounded-[2rem] border border-primary/40 shadow-[0_0_60px_-15px_rgba(0,123,255,0.6)] overflow-hidden bg-card">
            <img 
              src={heroImage || "/hero-mockup.png"} 
              className="w-full h-full object-cover" 
              alt="Foodshare app mockup" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}