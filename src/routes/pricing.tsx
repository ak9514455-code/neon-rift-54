import { createFileRoute } from "@tanstack/react-router";
import { Check, Crown, Moon, Cake, Users } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Hourly Rates & Memberships | Anytime Gaming Cafe" },
      { name: "description", content: "Simple, fair gaming rates. PS5, PS4, PC, VR — hourly and session pricing plus monthly memberships in Haldwani." },
      { property: "og:title", content: "Pricing — Hourly Rates & Memberships | Anytime Gaming Cafe" },
      { property: "og:description", content: "Hourly rates, session deals, group discounts, and monthly memberships." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const ps5Rows = [
  { players: 1, half: 70, one: 100 },
  { players: 2, half: 120, one: 180 },
  { players: 3, half: 170, one: 260 },
  { players: 4, half: 200, one: 300 },
];

const ps4Rows = [
  { players: 1, half: 50, one: 80 },
  { players: 2, half: 100, one: 150 },
  { players: 3, half: 150, one: 220 },
  { players: 4, half: 200, one: 250 },
];

const durationCards = [
  { title: "VR Experience", prices: [{ duration: "30 Minutes", price: 150 }, { duration: "60 Minutes", price: 250 }] },
  { title: "VR + Racing Wheel", prices: [{ duration: "30 Minutes", price: 250 }, { duration: "1 Hour", price: 400 }] },
  { title: "Racing Wheel Only", prices: [{ duration: "30 Minutes", price: 150 }, { duration: "60 Minutes", price: 250 }] },
  { title: "PC Gaming", prices: [{ duration: "30 Minutes", price: 70 }, { duration: "60 Minutes", price: 100 }] },
];

const combos = [
  { icon: Users, title: "Squad Package", desc: "Bring 3 or more friends. Get 10% off on total bill." },
  { icon: Moon, title: "Night Owl Pack", desc: "Late-night sessions after 9PM. Special discounted rates." },
  { icon: Cake, title: "Birthday Bash", desc: "Book the full cafe. Decoration + gaming + snacks. Custom quote." },
];

function Pricing() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <header className="text-center mb-16">
        <p className="font-accent uppercase tracking-[0.3em] text-sm text-accent">Pricing</p>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl font-black uppercase text-glow">Simple. Fair. Unbeatable.</h1>
      </header>

      {/* PS5 Pricing */}
      <section className="mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase mb-6">PS5 Gaming</h2>
        <div className="glass-card overflow-hidden">
          <div className="hidden md:grid grid-cols-3 bg-gradient-neon text-white">
            {["Players", "30 Minutes", "1 Hour"].map((h) => (
              <div key={h} className="px-6 py-4 font-accent uppercase tracking-wider text-sm font-bold">{h}</div>
            ))}
          </div>
          {ps5Rows.map((r) => (
            <div key={r.players} className="grid grid-cols-3 border-t border-border/40 items-center">
              <div className="px-6 py-5 font-display text-xl font-black bg-gradient-pink bg-clip-text text-transparent">{r.players} Player{r.players > 1 ? "s" : ""}</div>
              <div className="px-6 py-5 font-accent text-lg">₹{r.half}</div>
              <div className="px-6 py-5 font-accent text-lg">₹{r.one}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground italic">Per player rates. Prices may vary for special events.</p>
      </section>

      {/* PS4 Pricing */}
      <section className="mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase mb-6">PS4 Gaming</h2>
        <div className="glass-card overflow-hidden">
          <div className="hidden md:grid grid-cols-3 bg-gradient-neon text-white">
            {["Players", "30 Minutes", "1 Hour"].map((h) => (
              <div key={h} className="px-6 py-4 font-accent uppercase tracking-wider text-sm font-bold">{h}</div>
            ))}
          </div>
          {ps4Rows.map((r) => (
            <div key={r.players} className="grid grid-cols-3 border-t border-border/40 items-center">
              <div className="px-6 py-5 font-display text-xl font-black bg-gradient-pink bg-clip-text text-transparent">{r.players} Player{r.players > 1 ? "s" : ""}</div>
              <div className="px-6 py-5 font-accent text-lg">₹{r.half}</div>
              <div className="px-6 py-5 font-accent text-lg">₹{r.one}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground italic">Per player rates. Prices may vary for special events.</p>
      </section>

      {/* Duration cards */}
      <section className="mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase mb-6">VR & PC Gaming</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {durationCards.map((card) => (
            <div key={card.title} className="glass-card p-7 hover:shadow-neon transition">
              <h3 className="font-display text-xl font-bold uppercase mb-4">{card.title}</h3>
              <div className="space-y-3">
                {card.prices.map((p) => (
                  <div key={p.duration} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{p.duration}</span>
                    <span className="font-accent text-lg font-bold">₹{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Combos */}
      <section className="mt-20">
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase mb-8">Group & Combo Packs</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {combos.map((c) => (
            <div key={c.title} className="glass-card p-7 hover:shadow-neon transition">
              <c.icon size={28} className="text-accent" />
              <h3 className="mt-4 font-display text-xl font-bold uppercase">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership */}
      <section className="mt-20">
        <div className="text-center mb-10">
          <p className="font-accent uppercase tracking-[0.3em] text-sm text-neon-pink">Save more</p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-black uppercase">Monthly Membership</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Starter", price: "999", perks: ["10 Hours of Gaming", "Priority Booking", "10% Off Extra Hours"], popular: false },
            { name: "Pro Gamer", price: "1,999", perks: ["25 Hours of Gaming", "1 VR Session Free", "Birthday Bonus Hour", "Member-Only Tournaments"], popular: true },
          ].map((p) => (
            <div key={p.name} className={`relative glass-card p-8 ${p.popular ? "shadow-neon border-primary/60" : ""}`}>
              {p.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-pink px-3 py-1 text-xs font-accent font-bold uppercase tracking-wider text-white">Most Popular</span>
              )}
              <Crown size={26} className={p.popular ? "text-neon-pink" : "text-accent"} />
              <h3 className="mt-4 font-display text-2xl font-black uppercase">{p.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-5xl font-black bg-gradient-neon bg-clip-text text-transparent">₹{p.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.perks.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-neon-pink" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="__WA_BOOKING__" target="_blank" rel="noreferrer" className={`mt-7 block text-center rounded-md px-5 py-3 font-accent font-bold uppercase tracking-wider text-sm ${p.popular ? "bg-gradient-pink text-white shadow-neon-pink" : "glass-card hover:shadow-neon"}`}>
                Join {p.name}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">Membership saves you money if you visit more than 3× per month.</p>
      </section>

      {/* CTA */}
      <section className="mt-24 glass-card p-12 text-center">
        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase">Got a custom requirement?</h3>
        <p className="mt-2 text-muted-foreground">Event? Birthday? School trip? We'll work out a special deal.</p>
        <a href="__WA_BOOKING__" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-md bg-gradient-pink px-7 py-3 font-accent font-bold uppercase tracking-wider text-white shadow-neon-pink hover:scale-105 transition">
          Talk to Us on WhatsApp
        </a>
      </section>
    </div>
  );
}
