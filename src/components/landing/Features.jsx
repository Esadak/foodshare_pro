import React from "react";
import { ChefHat, ShieldCheck, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-primary" />,
      title: "Authentic Home Cooking",
      description: "Enjoy diverse, home-cooked meals prepared with care by talented local chefs in your community."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Safe & Secure",
      description: "Discover meals made just around the corner."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Built for Community",
      description: "Support local food creators and build meaningful connections within your neighborhood."
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Why choose Foodshare?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}