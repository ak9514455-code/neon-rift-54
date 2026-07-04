import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Cpu,
  Headphones,
  Snowflake,
  Clock,
  Wifi,
  Users,
  Star,
  Sparkles,
} from "lucide-react";
import controllerImg from "@/assets/hero-controller.png";
import cafeImg from "@/assets/cafe-interior.jpg";
import { Particles } from "@/components/Particles";
import { SkeletonImage } from "@/components/SkeletonImage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anytime Gaming Cafe — PS5, PC & VR in Haldwani" },
      {
        name: "description",
        content:
          "Haldwani's most advanced gaming cafe. PS5, PS4, PC & VR — all under one roof at Heera Nagar, Jail Road. Book your slot today.",
      },
      { property: "og:title", content: "Anytime Gaming Cafe — PS5, PC & VR in Haldwani" },
      {
        property: "og:description",
        content: "Haldwani's most advanced gaming cafe. PS5, PS4, PC & VR all under one roof.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 1500;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          setN(Math.floor(start + (to - start) * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const features = [
  { icon: Cpu, title: "High-End Hardware", desc: "RTX graphics, 144Hz monitors, zero lag." },
  { icon: Headphones, title: "Full Immersion", desc: "Premium headsets with surround sound." },
  { icon: Snowflake, title: "AC Comfort", desc: "Fully air-conditioned for long sessions." },
  { icon: Clock, title: "Flexible Timings", desc: "Open early, close late — game anytime." },
  { icon: Wifi, title: "Blazing Fast Net", desc: "High-speed internet, zero buffering." },
  { icon: Users, title: "Squad-Friendly", desc: "Private rooms available for groups." },
];

const services = [
  { tag: "PS5", title: "PlayStation 5", desc: "Latest titles in stunning 4K." },
  { tag: "PS4", title: "PlayStation 4", desc: "Classic console, premium experience." },
  { tag: "PC", title: "Gaming PC", desc: "RTX cards, 144Hz, mechanical keys." },
  { tag: "VR", title: "Virtual Reality", desc: "Step inside the game. Literally." },
];

function Home() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setPopup(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <Particles count={40} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-accent font-semibold uppercase tracking-widest text-accent">
              <Sparkles size={14} /> Haldwani's #1 Gaming Cafe
            </span>
            <h1 className="mt-6 font-display text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95] uppercase">
              <span className="block text-glow">Game On.</span>
              <span className="block bg-gradient-neon bg-clip-text text-transparent">Anytime.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Haldwani's most advanced gaming cafe.
              <span className="block mt-1 font-accent uppercase tracking-wider text-accent">
                PS5 • PS4 • PC • VR — All Under One Roof
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-gradient-pink px-7 py-4 font-accent font-bold uppercase tracking-wider text-white shadow-neon-pink hover:scale-105 transition"
              >
                Book Your Slot{" "}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md glass-card px-7 py-4 font-accent font-bold uppercase tracking-wider text-foreground hover:shadow-neon-blue transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative h-[420px] lg:h-[560px]">
            <div className="absolute inset-0 grid place-items-center">
              <div className="absolute h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
              <img
                src={controllerImg}
                alt="Floating PS5 DualSense controller"
                width={1024}
                height={1024}
                className="relative z-10 max-h-full w-auto animate-float drop-shadow-[0_30px_60px_rgba(123,47,255,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 -mt-10 relative z-10">
        <div className="glass-card grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-8">
          {[
            { label: "Gaming Stations", value: 10, suffix: "+" },
            { label: "Happy Gamers", value: 1000, suffix: "+" },
            { label: "Google Rating", value: 4.8, suffix: "★" },
            { label: "Days Open", value: 365, suffix: "" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-black bg-gradient-neon bg-clip-text text-transparent">
                {typeof s.value === "number" && s.value < 10 ? (
                  `${s.value}${s.suffix}`
                ) : (
                  <>
                    <Counter to={s.value as number} suffix={s.suffix} />
                  </>
                )}
              </div>
              <div className="mt-1 font-accent text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="text-center mb-14">
          <p className="font-accent uppercase tracking-[0.3em] text-sm text-accent">Why us</p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase">
            Why Anytime Gaming?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative glass-card p-7 hover:-translate-y-2 transition-all duration-300 hover:shadow-neon"
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-neon shadow-neon">
                <f.icon size={26} className="text-white" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent group-hover:border-accent/40 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative py-24">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="font-accent uppercase tracking-[0.3em] text-sm text-accent">
                What we offer
              </p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase">
                Pick Your Platform
              </h2>
            </div>
            <Link
              to="/services"
              className="font-accent uppercase tracking-wider text-sm text-accent hover:text-neon-pink flex items-center gap-2"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                key={s.tag}
                to="/services"
                className="group glass-card p-6 hover:-translate-y-2 transition-all hover:shadow-neon-pink"
              >
                <div className="font-display text-5xl font-black bg-gradient-pink bg-clip-text text-transparent">
                  {s.tag}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold uppercase">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="text-center mb-12">
          <p className="font-accent uppercase tracking-[0.3em] text-sm text-accent">
            Inside the arena
          </p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase">The Vibe</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl border border-border ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
            >
              <SkeletonImage
                src={cafeImg}
                alt="Gaming cafe interior"
                loading="lazy"
                width={1600}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                style={{ filter: `hue-rotate(${i * 30}deg)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 glass-card px-6 py-3 font-accent font-bold uppercase tracking-wider text-sm hover:shadow-neon transition"
          >
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="text-center mb-12">
          <p className="font-accent uppercase tracking-[0.3em] text-sm text-accent">
            Word on the street
          </p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black uppercase">
            Loved by Gamers
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              name: "Rohan S.",
              quote: "Best gaming setup in Haldwani, hands down. RTX rigs run BGMI buttery smooth.",
            },
            {
              name: "Priya M.",
              quote: "VR was insane! Staff was super friendly and the AC kept us going for hours.",
            },
            {
              name: "Aman K.",
              quote: "Birthday party at Anytime was lit. PS5 + snacks + neon vibes = perfect.",
            },
          ].map((r) => (
            <div key={r.name} className="glass-card p-6 hover:shadow-neon transition">
              <div className="flex gap-1 text-neon-pink">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{r.quote}"</p>
              <p className="mt-4 font-accent uppercase tracking-wider text-xs text-accent">
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl glass-card p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <Particles count={20} />
          <div className="relative">
            <h2 className="font-display text-5xl sm:text-7xl font-black uppercase text-glow">
              Ready to Play?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your next gaming session is one click away.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-gradient-pink px-8 py-4 font-accent font-bold uppercase tracking-wider text-white shadow-neon-pink hover:scale-105 transition"
            >
              WhatsApp Us to Book <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT POPUP */}
      {popup && (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm animate-fade-in">
          <div className="glass-card p-5 shadow-neon-pink relative">
            <button
              onClick={() => setPopup(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground text-xs"
              aria-label="Close"
            >
              ✕
            </button>
            <p className="font-accent uppercase tracking-widest text-xs text-neon-pink">
              🎉 New Tournament Alert
            </p>
            <h4 className="mt-2 font-display font-bold text-lg">BGMI Squad Tournament</h4>
            <p className="text-xs text-muted-foreground mt-1">Entry ₹50 · Prize ₹2000</p>
            <div className="mt-3 flex gap-2">
              <Link
                to="/tournaments"
                onClick={() => setPopup(false)}
                className="flex-1 text-center rounded bg-gradient-pink px-3 py-2 text-xs font-accent font-bold uppercase"
              >
                Register
              </Link>
              <button
                onClick={() => setPopup(false)}
                className="rounded glass-card px-3 py-2 text-xs font-accent uppercase"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
