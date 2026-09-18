import React from "react";

/**
 * @param {{ images?: string[] }} props
 */
export default function Screenshots({ images = [] }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
          See the app in action
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {images.slice(0, 3).map((src, i) => (
            <div
              key={i}
              className="w-full max-w-[240px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-900"
            >
              <div className="aspect-[9/16]">
                <img 
                  src={src} 
                  className="w-full h-full object-cover" 
                  alt={`App screenshot ${i + 1}`} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}