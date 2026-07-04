import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import cafeImg from "@/assets/cafe-interior.jpg";
import { Play } from "lucide-react";
import { SkeletonImage } from "@/components/SkeletonImage";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside the Arena | Anytime Gaming Cafe" },
      {
        name: "description",
        content:
          "Take a look inside Haldwani's most advanced gaming cafe. Setups, events, and the neon vibe.",
      },
      { property: "og:title", content: "Gallery — Inside the Arena" },
      {
        property: "og:description",
        content: "Step inside Anytime Gaming Cafe — neon stations, events, and squad sessions.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const tabs = ["All", "Setup", "PS5 Zone", "PC Zone", "VR Zone", "Events", "Cafe Vibe"] as const;

function Gallery() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <header className="text-center mb-12">
        <p className="font-accent uppercase tracking-[0.3em] text-sm text-accent">Gallery</p>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl font-black uppercase text-glow">
          Inside the Arena
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">See why everyone's talking about us.</p>
      </header>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full font-accent uppercase tracking-wider text-xs transition ${tab === t ? "bg-gradient-neon text-white shadow-neon" : "glass-card text-muted-foreground hover:text-foreground"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-xl border border-border ${i === 0 || i === 5 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
          >
            <SkeletonImage
              src={cafeImg}
              loading="lazy"
              width={1600}
              height={900}
              alt={`Anytime Gaming Cafe ${tab} ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ filter: `hue-rotate(${i * 22}deg) saturate(1.1)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 font-accent uppercase tracking-wider text-xs text-accent opacity-0 group-hover:opacity-100 transition">
              {tab === "All" ? "Anytime Cafe" : tab}
            </div>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <section className="mt-20">
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase mb-8 text-center">
          🎬 Watch the Vibe
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Cafe Interior", "Gaming Session"].map((label) => (
            <div
              key={label}
              className="relative aspect-[9/16] md:aspect-video glass-card overflow-hidden group cursor-pointer"
            >
              <SkeletonImage
                src={cafeImg}
                alt={label}
                loading="lazy"
                width={1600}
                height={900}
                className="h-full w-full object-cover opacity-60 group-hover:opacity-80 transition"
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-pink shadow-neon-pink group-hover:scale-110 transition">
                  <Play size={32} className="text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 font-accent uppercase tracking-wider text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Embed live reels from{" "}
          <a href="https://instagram.com/anytimegaming_hld" className="text-accent">
            @anytimegaming_hld
          </a>
        </p>
      </section>
    </div>
  );
}
