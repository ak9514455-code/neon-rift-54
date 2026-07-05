import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import cafeImg from "@/assets/cafe-interior.jpg";
import { SkeletonImage } from "@/components/SkeletonImage";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside the Arena | Anytime Gaming" },
      { name: "description", content: "Take a look inside Haldwani's premier gaming cafe. Setups, events, and the vibe." },
      { property: "og:title", content: "Gallery — Inside the Arena" },
      { property: "og:description", content: "Step inside Anytime Gaming Cafe." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const tabs = ["All", "Setup", "PS5 Zone", "PC Zone", "VR Zone", "Events", "Cafe Vibe"] as const;

function Gallery() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  return (
    <div style={{ background: "var(--brand-dark)" }}>
      <section className="py-20 md:py-[96px]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="section-label">// Gallery</p>
          <h1
            className="mt-4 font-display uppercase leading-[0.95]"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "var(--brand-white)" }}
          >
            Inside the
            <br />
            <span style={{ color: "var(--brand-red)" }}>Arena.</span>
          </h1>

          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-4 py-2 rounded-md font-accent font-semibold uppercase transition-all duration-[160ms]"
                style={{
                  background: tab === t ? "var(--brand-red)" : "var(--brand-card)",
                  color: tab === t ? "white" : "var(--brand-muted)",
                  border: "1px solid " + (tab === t ? "var(--brand-red)" : "var(--brand-border)"),
                  fontSize: "11px",
                  letterSpacing: "2.5px",
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden text-left ${i === 0 || i === 5 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
                style={{
                  borderRadius: "12px",
                  border: "1px solid var(--brand-border)",
                }}
              >
                <SkeletonImage
                  src={cafeImg}
                  loading="lazy"
                  alt={`Gallery ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-[300ms] group-hover:scale-[1.04]"
                  style={{ filter: `hue-rotate(${i * 22}deg) saturate(1.1)` }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(7,7,16,0.7), transparent 60%)",
                  }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-[3px] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[300ms]"
                  style={{ background: "var(--brand-red)" }}
                />
                <div
                  className="absolute bottom-3 left-4 font-accent uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ fontSize: "10px", letterSpacing: "2.5px", color: "var(--brand-white)" }}
                >
                  {tab === "All" ? "Anytime Cafe" : tab}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center p-6"
          style={{ background: "rgba(7,7,16,0.9)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full"
            style={{ background: "var(--brand-card)", border: "1px solid var(--brand-border)", color: "var(--brand-white)" }}
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <img
            src={cafeImg}
            alt="Preview"
            className="max-h-[85vh] w-auto rounded-lg"
            style={{ filter: `hue-rotate(${lightbox * 22}deg) saturate(1.1)` }}
          />
        </div>
      )}
    </div>
  );
}
