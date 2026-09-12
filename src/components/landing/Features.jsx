import React from "react";
import { CookingPot, ShoppingCart, CreditCard } from "lucide-react";

// Informational feature cards describing what the app does (static, non-interactive).
const features = [
  {
    icon: CookingPot,
    title: "Sälj din mat",
    text: "Lägg ut dina rätter och nå lokala kunder i ditt område.",
  },
  {
    icon: ShoppingCart,
    title: "Beställ enkelt",
    text: "Bläddra, välj och beställ favoriträtter med några enkla klick.",
  },
  {
    icon: CreditCard,
    title: "Flexibel betalning",
    text: "Betala smidigt med kontanter vid upphämtning eller via Swish.",
  },
];

export default function Features() {
  return (
    <section id="funktioner" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Varför välja Foodshare?
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:shadow-[0_0_40px_-15px_rgba(0,123,255,0.5)]"
            >
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}