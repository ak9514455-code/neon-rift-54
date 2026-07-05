import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Gamepad2, Monitor, Glasses, Car, ArrowRight } from "lucide-react";
import { SkeletonImage } from "@/components/SkeletonImage";
import ps5Img from "@/assets/service-ps5.jpg";
import ps4Img from "@/assets/service-ps4.jpg";
import pcImg from "@/assets/service-pc.jpg";
import vrImg from "@/assets/service-vr.jpg";
import racingImg from "@/assets/service-racing.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Platforms — PS5, PS4, PC, VR & Racing | Anytime Gaming" },
      { name: "description", content: "Every platform, one roof. PS5, PS4, high-end gaming PCs, VR and racing wheel at Anytime Gaming Cafe, Haldwani." },
      { property: "og:title", content: "Our Platforms — Anytime Gaming" },
      { property: "og:description", content: "PS5, PS4, PC, VR and Racing under one roof." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    tag: "PS5",
    icon: Gamepad2,
    title: "PlayStation 5",
    sub: "The latest generation.",
    desc: "Play the biggest titles in stunning 4K HDR with DualSense controllers.",
    features: ["4K HDR Display", "DualSense Haptics", "Latest Game Library", "Up to 4-Player Co-op"],
    image: ps5Img,
    price: "From ₹70 / 30 min",
  },
  {
    tag: "PS4",
    icon: Gamepad2,
    title: "PlayStation 4",
    sub: "Classic. Budget-friendly.",
    desc: "Hundreds of titles. Perfect for casual sessions and squads.",
    features: ["Full HD Gaming", "Huge Selection", "Great for Groups", "Best Value"],
    image: ps4Img,
    price: "From ₹50 / 30 min",
  },
  {
    tag: "PC",
    icon: Monitor,
    title: "High-Performance PC",
    sub: "Built for competitive play.",
    desc: "RTX rigs, 144Hz displays, mechanical keyboards. Zero excuses.",
    features: ["RTX Graphics", "144Hz Monitors", "Mechanical Keys", "BGMI, Valorant, GTA"],
    image: pcImg,
    price: "From ₹70 / 30 min",
  },
  {
    tag: "VR",
    icon: Glasses,
    title: "Virtual Reality",
    sub: "Step inside the game.",
    desc: "Full VR headsets and motion controllers. Experiences you can't get at home.",
    features: ["Full VR Headset", "Motion Controllers", "Multiple Titles", "First-Timer Friendly"],
    image: vrImg,
    price: "From ₹150 / 30 min",
  },
  {
    tag: "RCG",
    icon: Car,
    title: "Racing Wheel",
    sub: "Feel every turn.",
    desc: "Force-feedback wheel and pedal setup. Sim racing at its purest.",
    features: ["Force Feedback Wheel", "Pedal Set", "Racing Sim Titles", "Solo or Multiplayer"],
    image: racingImg,
    price: "From ₹150 / 30 min",
  },
];

function Services() {
  return (
    <div>
      <section className="py-20 md:py-[96px]" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="section-label">// Platforms</p>
          <h1
            className="mt-4 font-display uppercase leading-[0.95]"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "var(--brand-white)" }}
          >
            Every Platform.
            <br />
            <span style={{ color: "var(--brand-red)" }}>One Roof.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed" style={{ color: "var(--brand-muted)" }}>
            From next-gen consoles to VR and sim racing — pick your poison. We handle the hardware.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-[96px]" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 space-y-6">
          {services.map((s, i) => (
            <article
              key={s.tag}
              className="group grid md:grid-cols-2 overflow-hidden transition-all duration-[200ms] hover:-translate-y-[2px]"
              style={{
                background: "var(--brand-card)",
                border: "1px solid var(--brand-border)",
                borderRadius: "12px",
              }}
            >
              <div className={`relative min-h-[280px] md:min-h-[380px] overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                <SkeletonImage
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-[300ms] group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(${i % 2 ? "to left" : "to right"}, rgba(7,7,16,0.85), transparent 60%)`,
                  }}
                />
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span
                    className="grid h-9 w-9 place-items-center rounded"
                    style={{ background: "var(--brand-red)" }}
                  >
                    <s.icon size={16} className="text-white" />
                  </span>
                  <span
                    className="font-accent uppercase text-[11px]"
                    style={{ letterSpacing: "3px", color: "var(--brand-white)" }}
                  >
                    Platform / {s.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p
                  className="font-accent uppercase"
                  style={{ fontSize: "11px", letterSpacing: "4px", color: "var(--brand-red)" }}
                >
                  {s.sub}
                </p>
                <h2
                  className="mt-3 font-display uppercase leading-none"
                  style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--brand-white)" }}
                >
                  {s.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                  {s.desc}
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px]" style={{ color: "var(--brand-white)" }}>
                      <Check size={14} className="mt-0.5 shrink-0" style={{ color: "var(--brand-red)" }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-5 pt-6 border-t" style={{ borderColor: "var(--brand-border)" }}>
                  <div
                    className="font-mono font-bold"
                    style={{ fontSize: "18px", color: "var(--brand-white)" }}
                  >
                    {s.price}
                  </div>
                  <a
                    href={WHATSAPP_BOOKING_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-2 rounded-md font-accent font-bold uppercase text-white transition-all duration-[160ms] ease-out hover:brightness-110"
                    style={{
                      background: "var(--brand-red)",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      padding: "10px 20px",
                    }}
                  >
                    Book Slot <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
