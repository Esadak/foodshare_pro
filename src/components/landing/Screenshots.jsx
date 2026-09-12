import React from "react";
import { Image } from "@/components/ui/image";

// App screenshots grid — placeholders with rounded corners and a blue accent.
export default function Screenshots({ images }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Se appen i aktion
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="aspect-[9/16] rounded-2xl overflow-hidden border-2 border-primary/40 shadow-[0_0_40px_-15px_rgba(0,123,255,0.5)] bg-card transition-transform duration-300 hover:scale-[1.03]"
            >
              <Image
                src={src}
                alt={`Foodshare app skärm ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}