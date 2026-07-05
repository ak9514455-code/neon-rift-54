import { createFileRoute } from "@tanstack/react-router";
import { Check, Gamepad2, Monitor, Glasses, Car, Cpu } from "lucide-react";
import { SkeletonImage } from "@/components/SkeletonImage";
import ps5Img from "@/assets/service-ps5.jpg";
import ps4Img from "@/assets/service-ps4.jpg";
import pcImg from "@/assets/service-pc.jpg";
import vrImg from "@/assets/service-vr.jpg";
import racingImg from "@/assets/service-racing.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PS5, PS4, PC & VR | Anytime Gaming Cafe" },
      {
        name: "description",
        content:
          "Pick your platform: PS5, PS4, high-end gaming PCs, and VR. All set up for peak performance at Anytime Gaming Cafe, Haldwani.",
      },
      { property: "og:title", content: "Services — PS5, PS4, PC & VR | Anytime Gaming Cafe" },
      {
        property: "og:description",
        content: "Pick your platform. PS5, PS4, PC, VR — all under one roof in Haldwani.",
      },
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
    sub: "The latest generation console.",
    desc: "Play the biggest titles in stunning 4K.",
    features: [
      "4K HDR Display",
      "DualSense Haptic Controllers",
      "Latest Game Library",
      "2-Player Co-op Available",
    ],
    image: ps5Img,
  },
  {
    tag: "PS4",
    icon: Gamepad2,
    title: "PlayStation 4",
    sub: "Classic console, premium experience.",
    desc: "Hundreds of titles. Budget-friendly rates.",
    features: ["Full HD Gaming", "Huge Game Selection", "Great for Groups", "Best Value for Money"],
    image: ps4Img,
  },
  {
    tag: "PC",
    icon: Monitor,
    title: "High-Performance PC",
    sub: "Built for speed. Designed to dominate.",
    desc: "RGB rigs tuned for competitive play.",
    features: [
      "RTX Graphics Cards",
      "144Hz Refresh Rate Monitors",
      "Mechanical Keyboards",
      "BGMI, Valorant, GTA, FIFA & More",
    ],
    image: pcImg,
  },
  {
    tag: "VR",
    icon: Glasses,
    title: "Virtual Reality",
    sub: "Step inside the game. Literally.",
    desc: "An experience you can't get at home.",
    features: [
      "Full VR Headset",
      "Motion Controllers",
      "Multiple VR Experiences",
      "Perfect for First-Timers & Pros",
    ],
    image: vrImg,
  },
  {
    tag: "RACING",
    icon: Car,
    title: "Racing Wheel",
    sub: "Feel every turn. Drive like it's real.",
    desc: "Full racing wheel and pedal setup for sim racing.",
    features: [
      "Force Feedback Wheel",
      "Pedal Set Included",
      "Racing Simulator",
      "Play Solo or Race Friends",
    ],
    image: racingImg,
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <header className="text-center mb-16">
        <p className="font-accent uppercase tracking-[0.3em] text-sm text-accent">
          Our gaming arsenal
        </p>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl font-black uppercase text-glow">
          Pick Your Platform
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">We handle the rest.</p>
      </header>

      <div className="grid lg:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <article
            key={s.tag}
            className={`group relative overflow-hidden glass-card hover:-translate-y-2 transition-all duration-500 hover:shadow-neon ${i % 2 ? "lg:translate-y-8" : ""}`}
          >
            {/* Image */}
            <div className="relative h-56 sm:h-64 md:h-72 lg:h-auto lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-2/5 overflow-hidden shrink-0">
              <SkeletonImage
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Text content */}
            <div className="relative p-6 sm:p-8 lg:ml-[40%]">
              <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/40 transition" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-display text-6xl sm:text-7xl font-black bg-gradient-neon bg-clip-text text-transparent">
                    {s.tag}
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold uppercase">{s.title}</h2>
                  <p className="mt-1 font-accent uppercase tracking-wider text-sm text-accent">
                    {s.sub}
                  </p>
                </div>
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl glass-card">
                  <s.icon size={28} className="text-accent" />
                </div>
              </div>
              <p className="relative mt-5 text-foreground/80">{s.desc}</p>
              <ul className="relative mt-6 grid sm:grid-cols-2 gap-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-neon-pink" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center glass-card p-10">
        <Cpu size={28} className="mx-auto text-accent" />
        <p className="mt-4 text-lg font-accent uppercase tracking-wider">
          Can't decide? Come in and try them all.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">New games added regularly.</p>
        <a
          href="__WA_BOOKING__"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-pink px-6 py-3 font-accent font-bold uppercase tracking-wider text-white shadow-neon-pink hover:scale-105 transition"
        >
          Ask What's Available Today
        </a>
      </div>
    </div>
  );
}
