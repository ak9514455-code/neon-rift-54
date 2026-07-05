import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Cpu, Gamepad2, Glasses, Car, Wifi, Snowflake, Star, ChevronDown } from "lucide-react";
import cafeImg from "@/assets/cafe-interior.jpg";
import { SkeletonImage } from "@/components/SkeletonImage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anytime Gaming Cafe — PS5, PC & VR in Haldwani" },
      {
        name: "description",
        content: "Haldwani's premier gaming destination. PS5, PS4, PC, VR & Racing Wheel at Heera Nagar, Jail Road. Book your slot today.",
      },
      { property: "og:title", content: "Anytime Gaming — Game Without Limits" },
      { property: "og:description", content: "PS5, PS4, PC, VR & Racing under one roof in Haldwani." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / 1400);
          setN(to * (1 - Math.pow(1 - p, 3)));
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
      {decimals ? n.toFixed(decimals) : Math.floor(n).toLocaleString()}
      {suffix}
    </span>
  );
}

const features = [
  { icon: Cpu, title: "High-End Hardware", desc: "RTX graphics, 144Hz monitors, zero lag. Built for serious gaming." },
  { icon: Gamepad2, title: "Premium Consoles", desc: "Latest PS5 and PS4 with full game libraries. DualSense controllers included." },
  { icon: Glasses, title: "VR Experience", desc: "Step into another world. Full VR headsets with motion controllers." },
  { icon: Car, title: "Racing Simulator", desc: "Feel every turn. Racing wheel and pedal setup for the ultimate sim experience." },
  { icon: Wifi, title: "Blazing Internet", desc: "High-speed fibre. Zero buffering. Always connected." },
  { icon: Snowflake, title: "Fully AC", desc: "Cool environment. Game for hours in complete comfort." },
];

const platforms = [
  { tag: "PS5", title: "PlayStation 5", price: "₹100 / hr", desc: "4K HDR, DualSense controllers" },
  { tag: "PS4", title: "PlayStation 4", price: "₹80 / hr", desc: "Huge game library, best value" },
  { tag: "PC", title: "Gaming PC", price: "₹100 / hr", desc: "RTX rigs, 144Hz, mechanical keys" },
  { tag: "VR", title: "Virtual Reality", price: "₹250 / hr", desc: "Motion controllers, immersive worlds" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--brand-black)", minHeight: "calc(100vh - 60px)" }}
      >
        <div className="absolute inset-0 diagonal-grid opacity-70" />
        <div
          className="absolute pointer-events-none"
          style={{
            left: "-10%",
            top: "20%",
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(232,25,44,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 pt-16 md:pt-20 pb-24 grid lg:grid-cols-[55%_45%] gap-10 lg:gap-8 items-center">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "var(--brand-red)", boxShadow: "0 0 12px var(--brand-red)" }}
              />
              <span
                className="font-accent font-semibold uppercase"
                style={{ fontSize: "11px", letterSpacing: "4px", color: "var(--brand-red)" }}
              >
                Haldwani's Premier Gaming Destination
              </span>
            </div>

            <h1
              className="mt-6 font-display uppercase leading-[0.9]"
              style={{ fontSize: "clamp(72px, 12vw, 140px)", color: "var(--brand-white)" }}
            >
              <span className="block">Game</span>
              <span className="block">Without</span>
              <span className="block" style={{ color: "var(--brand-red)" }}>
                Limits.
              </span>
            </h1>

            <p
              className="mt-6 font-sans"
              style={{ color: "var(--brand-muted)", fontSize: "16px", letterSpacing: "2px" }}
            >
              PS5 · PS4 · PC · VR · RACING WHEEL
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md font-accent font-bold uppercase text-white transition-all duration-[160ms] ease-out hover:brightness-110 hover:shadow-neon"
                style={{
                  background: "var(--brand-red)",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  padding: "14px 32px",
                }}
              >
                Book a Slot <ArrowRight size={16} />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-md font-accent font-bold uppercase transition-all duration-[160ms] ease-out hover:border-white/40"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "var(--brand-white)",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  padding: "14px 32px",
                }}
              >
                See Pricing
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "4/3",
                background: "var(--brand-card)",
                border: "1px solid rgba(232,25,44,0.2)",
                borderRadius: "12px",
              }}
            >
              <SkeletonImage
                src={cafeImg}
                alt="Anytime Gaming Cafe interior"
                className="h-full w-full object-cover opacity-90"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(7,7,16,0.5) 0%, transparent 60%)",
                }}
              />
              <div
                className="absolute bottom-4 left-5 font-accent uppercase text-[11px]"
                style={{ letterSpacing: "3px", color: "var(--brand-muted)" }}
              >
                / Cafe Interior
              </div>
              <div
                className="absolute pointer-events-none"
                style={{
                  right: "-40px",
                  bottom: "-40px",
                  width: "220px",
                  height: "220px",
                  background: "radial-gradient(circle, var(--brand-red-glow), transparent 70%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-6 flex-col items-center gap-2 pointer-events-none">
          <span
            className="font-accent uppercase"
            style={{ fontSize: "10px", letterSpacing: "3px", color: "var(--brand-muted)" }}
          >
            Scroll
          </span>
          <ChevronDown size={14} className="animate-bounce" style={{ color: "var(--brand-muted)" }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section
        className="border-y"
        style={{
          background: "var(--brand-dark)",
          borderColor: "var(--brand-border)",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4">
          {[
            { value: 10, suffix: "+", label: "Gaming Stations" },
            { value: 500, suffix: "+", label: "Happy Gamers" },
            { value: 4.8, suffix: "★", label: "Google Rating", decimals: 1 },
            { value: 365, suffix: "", label: "Days Open" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="py-8 md:py-9 text-center relative"
              style={{
                borderLeft: i > 0 ? "1px solid var(--brand-border)" : undefined,
              }}
            >
              <div
                className="font-mono font-bold"
                style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--brand-white)" }}
              >
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div
                className="mt-2 font-sans uppercase"
                style={{ fontSize: "11px", letterSpacing: "2px", color: "var(--brand-muted)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 md:py-[96px]" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-12">
            <p className="section-label">// Why Choose Us</p>
            <h2
              className="mt-4 font-display uppercase"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--brand-white)" }}
            >
              The Anytime Difference
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-7 transition-all duration-[200ms] hover:-translate-y-[2px]"
                style={{
                  background: "var(--brand-card)",
                  border: "1px solid var(--brand-border)",
                  borderRadius: "12px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,25,44,0.3)";
                  e.currentTarget.style.borderTop = "2px solid var(--brand-red)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-border)";
                  e.currentTarget.style.borderTop = "1px solid var(--brand-border)";
                }}
              >
                <div
                  className="grid h-11 w-11 place-items-center rounded"
                  style={{ background: "var(--brand-red)" }}
                >
                  <f.icon size={20} className="text-white" />
                </div>
                <h3
                  className="mt-5 font-accent font-bold uppercase"
                  style={{ fontSize: "18px", letterSpacing: "1px", color: "var(--brand-white)" }}
                >
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-24 md:py-[96px]" style={{ background: "var(--brand-dark)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="section-label">// Our Platforms</p>
              <h2
                className="mt-4 font-display uppercase"
                style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--brand-white)" }}
              >
                Pick Your Platform
              </h2>
            </div>
            <Link
              to="/services"
              className="font-accent uppercase text-[13px] flex items-center gap-2 transition-colors hover:text-white"
              style={{ color: "var(--brand-red)", letterSpacing: "2px" }}
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {platforms.map((p) => (
              <Link
                key={p.tag}
                to="/services"
                className="group relative overflow-hidden block"
                style={{
                  minHeight: "280px",
                  borderRadius: "12px",
                  border: "1px solid var(--brand-border)",
                }}
              >
                <SkeletonImage
                  src={cafeImg}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[300ms] group-hover:scale-[1.04]"
                  style={{ filter: `hue-rotate(${p.tag === "PS5" ? 0 : p.tag === "PS4" ? 20 : p.tag === "PC" ? 340 : 300}deg)` }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--brand-black) 40%, rgba(7,7,16,0.3) 100%)",
                  }}
                />
                <div className="relative h-full min-h-[280px] flex flex-col justify-end p-7">
                  <div className="flex items-end justify-between">
                    <div>
                      <div
                        className="font-display uppercase leading-none"
                        style={{ fontSize: "36px", color: "var(--brand-white)" }}
                      >
                        {p.title}
                      </div>
                      <p className="mt-2 text-[13px]" style={{ color: "var(--brand-muted)" }}>
                        {p.desc}
                      </p>
                    </div>
                    <div className="text-right">
                      <div
                        className="font-mono font-bold"
                        style={{ fontSize: "18px", color: "var(--brand-red)" }}
                      >
                        {p.price}
                      </div>
                      <div
                        className="mt-2 font-accent uppercase text-[11px] flex items-center gap-1 justify-end"
                        style={{ letterSpacing: "2px", color: "var(--brand-white)" }}
                      >
                        Book <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="py-24 md:py-[96px]" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-12">
            <p className="section-label">// Player Reviews</p>
            <h2
              className="mt-4 font-display uppercase"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--brand-white)" }}
            >
              Loved by Gamers
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Rohan S.", q: "Best gaming setup in Haldwani, hands down. RTX rigs run BGMI buttery smooth." },
              { name: "Priya M.", q: "VR was insane! Staff was super friendly and the AC kept us going for hours." },
              { name: "Aman K.", q: "Birthday at Anytime was lit. PS5 + snacks + neon vibes = perfect." },
            ].map((r) => (
              <div
                key={r.name}
                className="p-7"
                style={{
                  background: "var(--brand-card)",
                  border: "1px solid var(--brand-border)",
                  borderRadius: "12px",
                }}
              >
                <div className="flex gap-0.5" style={{ color: "var(--brand-gold)" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p
                  className="mt-4 italic text-[15px] leading-relaxed"
                  style={{ color: "var(--brand-white)" }}
                >
                  "{r.q}"
                </p>
                <div className="mt-5 flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--brand-border)" }}>
                  <span
                    className="font-accent uppercase text-[13px]"
                    style={{ letterSpacing: "2px", color: "var(--brand-white)" }}
                  >
                    {r.name}
                  </span>
                  <span
                    className="text-[11px] uppercase"
                    style={{ letterSpacing: "1.5px", color: "var(--brand-muted)" }}
                  >
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-[96px]" style={{ background: "var(--brand-dark)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div
            className="relative overflow-hidden text-center px-8 py-20"
            style={{
              background: "var(--brand-card)",
              border: "1px solid rgba(232,25,44,0.2)",
              borderRadius: "12px",
            }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                left: "50%",
                top: "-50%",
                transform: "translateX(-50%)",
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, var(--brand-red-glow), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="section-label">// Ready?</p>
              <h2
                className="mt-4 font-display uppercase leading-[0.95]"
                style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "var(--brand-white)" }}
              >
                Come. Play.
                <br />
                <span style={{ color: "var(--brand-red)" }}>Win. Repeat.</span>
              </h2>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-md font-accent font-bold uppercase text-white transition-all duration-[160ms] ease-out hover:brightness-110"
                style={{
                  background: "var(--brand-red)",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  padding: "16px 40px",
                  boxShadow: "0 12px 32px rgba(232,25,44,0.35)",
                }}
              >
                Book on WhatsApp <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
