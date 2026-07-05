import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Calendar, IndianRupee, Users } from "lucide-react";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Tournaments — Compete & Win | Anytime Gaming Cafe" },
      { name: "description", content: "Monthly gaming tournaments at Anytime Gaming Cafe Haldwani. BGMI, Valorant, FIFA. Real prizes." },
      { property: "og:title", content: "Tournaments — Compete. Win. Repeat." },
      { property: "og:description", content: "Monthly BGMI, Valorant, and FIFA tournaments with real prize pools." },
      { property: "og:url", content: "/tournaments" },
    ],
    links: [{ rel: "canonical", href: "/tournaments" }],
  }),
  component: Tournaments,
});

function Tournaments() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <header className="text-center mb-16">
        <p className="font-accent uppercase tracking-[0.3em] text-sm text-accent">Tournaments</p>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl font-black uppercase text-glow-pink">Compete. Win. Repeat.</h1>
        <p className="mt-4 text-lg text-muted-foreground">Monthly tournaments. Real prizes.</p>
      </header>

      {/* Upcoming */}
      <div className="relative overflow-hidden glass-card p-8 md:p-12 mb-16">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-neon-pink/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="font-accent uppercase tracking-widest text-xs text-neon-pink">🔥 Upcoming</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-black uppercase">BGMI Squad Showdown</h2>
            <p className="mt-3 text-muted-foreground">Get your squad together. Lock in your seat. Bring the noise.</p>
            <a href="__WA_BOOKING__" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-md bg-gradient-pink px-7 py-3 font-accent font-bold uppercase tracking-wider text-white shadow-neon-pink hover:scale-105 transition">
              Register on WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Calendar, label: "Date", value: "Sat, Aug 9" },
              { icon: IndianRupee, label: "Entry", value: "₹50 / player" },
              { icon: Trophy, label: "Prize Pool", value: "₹2,000" },
              { icon: Users, label: "Slots", value: "16 squads" },
            ].map((m) => (
              <div key={m.label} className="glass-card p-4">
                <m.icon size={20} className="text-accent" />
                <p className="mt-2 text-xs font-accent uppercase tracking-wider text-muted-foreground">{m.label}</p>
                <p className="font-display text-lg font-bold">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rules */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="glass-card p-7">
          <h3 className="font-display text-xl font-bold uppercase mb-4">📋 Tournament Rules</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>• Minimum age: 13+</li>
            <li>• Formats: Solo / Duo / Squad</li>
            <li>• Fair play enforced — no cheats, no smurfs</li>
            <li>• Results announced live on Instagram</li>
            <li>• Prize distributed same day</li>
          </ul>
        </div>
        <div className="glass-card p-7">
          <h3 className="font-display text-xl font-bold uppercase mb-4">🎮 Games Rotated</h3>
          <div className="flex flex-wrap gap-2">
            {["BGMI", "Valorant", "FIFA 24", "GTA V", "Tekken 8", "Rocket League", "COD Mobile"].map((g) => (
              <span key={g} className="rounded-full glass-card px-3 py-1 font-accent uppercase text-xs tracking-wider text-accent">{g}</span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Vote for the next title on our Instagram stories.</p>
        </div>
      </section>

      {/* Hall of fame */}
      <section>
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-center mb-10">🏆 Hall of Fame</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { name: "Team Shadow", game: "BGMI", month: "June 2026", prize: "₹2,000" },
            { name: "Aryan R.", game: "FIFA", month: "May 2026", prize: "₹1,500" },
            { name: "Voltage Squad", game: "Valorant", month: "April 2026", prize: "₹2,500" },
          ].map((w) => (
            <div key={w.name} className="glass-card p-6 hover:shadow-neon transition">
              <Trophy size={24} className="text-neon-pink" />
              <h4 className="mt-3 font-display text-xl font-bold uppercase">{w.name}</h4>
              <p className="font-accent uppercase text-xs tracking-wider text-accent mt-1">{w.game} · {w.month}</p>
              <p className="mt-3 font-display text-2xl font-black bg-gradient-pink bg-clip-text text-transparent">{w.prize}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
