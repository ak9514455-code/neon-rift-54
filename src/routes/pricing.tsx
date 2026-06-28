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

const rows = [
  { platform: "PS5", hr: 80, two: 150, sess: 200 },
  { platform: "PS4", hr: 60, two: 110, sess: 150 },
  { platform: "PC", hr: 40, two: 75, sess: 100 },
  { platform: "VR", hr: 100, two: 180, sess: 250 },
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

      {/* Pricing table */}
      <div className="glass-card overflow-hidden">
        <div className="hidden md:grid grid-cols-4 bg-gradient-neon text-white">
          {["Platform", "Per Hour", "Per 2 Hours", "Session (3hrs)"].map((h) => (
            <div key={h} className="px-6 py-4 font-accent uppercase tracking-wider text-sm font-bold">{h}</div>
          ))}
        </div>
        {rows.map((r) => (
          <div key={r.platform} className="grid grid-cols-2 md:grid-cols-4 border-t border-border/40 items-center">
            <div className="px-6 py-5 font-display text-2xl font-black bg-gradient-pink bg-clip-text text-transparent">{r.platform}</div>
            <div className="px-6 py-5 font-accent text-lg"><span className="md:hidden text-xs text-muted-foreground uppercase block">Hour</span>₹{r.hr}</div>
            <div className="px-6 py-5 font-accent text-lg"><span className="md:hidden text-xs text-muted-foreground uppercase block">2 Hours</span>₹{r.two}</div>
            <div className="px-6 py-5 font-accent text-lg"><span className="md:hidden text-xs text-muted-foreground uppercase block">Session</span>₹{r.sess}</div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground italic">* Indicative pricing. Confirm with the cafe before booking.</p>

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
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className={`mt-7 block text-center rounded-md px-5 py-3 font-accent font-bold uppercase tracking-wider text-sm ${p.popular ? "bg-gradient-pink text-white shadow-neon-pink" : "glass-card hover:shadow-neon"}`}>
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
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-md bg-gradient-pink px-7 py-3 font-accent font-bold uppercase tracking-wider text-white shadow-neon-pink hover:scale-105 transition">
          Talk to Us on WhatsApp
        </a>
      </section>
    </div>
  );
}
