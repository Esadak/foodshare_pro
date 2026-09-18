import React from "react";
import { Search, ShoppingCart, Utensils } from "lucide-react";

const steps = [
  { 
    num: "1", 
    icon: <Search className="w-6 h-6" />,
    title: "Discover Meals", 
    text: "Browse through a variety of home-cooked dishes offered by local chefs near you." 
  },
  { 
    num: "2", 
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Order Easily", 
    text: "Select your favorite meals, customize your order, and connect directly with the chef." 
  },
  { 
    num: "3", 
    icon: <Utensils className="w-6 h-6" />,
    title: "Enjoy Your Food", 
    text: "Pick up your fresh, delicious meal or arrange delivery, ready to be enjoyed." 
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          How it works
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((s) => (
            <div key={s.num} className="relative text-center">
              <div className="relative mx-auto grid place-items-center w-20 h-20 rounded-full bg-card border-2 border-primary text-primary text-3xl font-bold">
                {s.num}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-muted-foreground max-w-xs mx-auto">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}