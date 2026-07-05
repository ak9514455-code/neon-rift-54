import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — 4.8★ on Google | Anytime Gaming" },
      { name: "description", content: "Rated 4.8★ on Google. See what the Haldwani gaming community says about Anytime Gaming." },
      { property: "og:title", content: "Reviews — What Gamers Say" },
      { property: "og:description", content: "4.8★ on Google. Real reviews." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

const reviews = [
  { name: "Rohan Singh", rating: 5, quote: "Best gaming setup in Haldwani, hands down. RTX rigs run BGMI buttery smooth and the network is rock solid.", date: "2 weeks ago" },
  { name: "Priya Mehra", rating: 5, quote: "VR was insane! Staff was super friendly and the AC kept us going for hours. Definitely coming back with friends.", date: "1 month ago" },
  { name: "Aman Kumar", rating: 5, quote: "Did my birthday here — PS5 + snacks + neon vibes = perfect. The owner went out of his way to make it special.", date: "1 month ago" },
  { name: "Sahil V.", rating: 5, quote: "144Hz monitors and mechanical keyboards. I came once and now I'm here every weekend with my squad.", date: "2 months ago" },
  { name: "Ananya P.", rating: 4, quote: "Loved the vibe — lighting really hits. Slightly busy on weekends, so book ahead.", date: "2 months ago" },
  { name: "Vikram J.", rating: 5, quote: "PS5 collection is updated, FIFA 24 was a blast. Pricing is fair for the quality you get.", date: "3 months ago" },
  { name: "Neha Bisht", rating: 5, quote: "Took my younger brother for his first VR experience — he's still talking about it. Staff was very patient.", date: "3 months ago" },
  { name: "Rahul T.", rating: 5, quote: "Tournaments are organized properly with real prizes. Best gaming cafe in Uttarakhand IMO.", date: "4 months ago" },
];

function Reviews() {
  return (
    <div style={{ background: "var(--brand-black)" }}>
      <section className="py-20 md:py-[96px]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <p className="section-label">// Player Reviews</p>
              <h1
                className="mt-4 font-display uppercase leading-[0.95]"
                style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "var(--brand-white)" }}
              >
                What
                <br />
                <span style={{ color: "var(--brand-red)" }}>Gamers Say.</span>
              </h1>
            </div>
            <div
              className="inline-flex items-center gap-4 px-6 py-5"
              style={{
                background: "var(--brand-card)",
                border: "1px solid var(--brand-border)",
                borderRadius: "12px",
              }}
            >
              <div>
                <div className="font-mono font-bold" style={{ fontSize: "48px", color: "var(--brand-white)", lineHeight: 1 }}>
                  4.8
                </div>
                <div className="flex mt-2" style={{ color: "var(--brand-gold)" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <div
                className="font-accent uppercase text-[10px] pl-4 border-l"
                style={{ letterSpacing: "2.5px", color: "var(--brand-muted)", borderColor: "var(--brand-border)" }}
              >
                on
                <br />
                Google
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="p-6 flex flex-col"
              style={{
                background: "var(--brand-card)",
                border: "1px solid var(--brand-border)",
                borderRadius: "12px",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" style={{ color: "var(--brand-gold)" }}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[11px]" style={{ color: "var(--brand-muted)" }}>
                  {r.date}
                </span>
              </div>
              <p className="mt-5 italic text-[14px] leading-relaxed flex-1" style={{ color: "var(--brand-white)" }}>
                "{r.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--brand-border)" }}>
                <div
                  className="grid h-9 w-9 place-items-center rounded font-display"
                  style={{ background: "var(--brand-red)", color: "var(--brand-white)", fontSize: "16px" }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-accent uppercase text-[13px]" style={{ letterSpacing: "1.5px", color: "var(--brand-white)" }}>
                    {r.name}
                  </div>
                  <div className="text-[10px] uppercase" style={{ letterSpacing: "1.5px", color: "var(--brand-muted)" }}>
                    Google Review
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 mt-16">
          <div
            className="text-center px-6 py-14"
            style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "12px",
            }}
          >
            <h3
              className="font-display uppercase"
              style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--brand-white)" }}
            >
              Had a great session?
            </h3>
            <p className="mt-3 text-[14px]" style={{ color: "var(--brand-muted)" }}>
              Leave us a review on Google. It helps us grow.
            </p>
            <a
              href="https://www.google.com/search?q=Anytime+Gaming+Cafe+Haldwani"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-md font-accent font-bold uppercase text-white transition-all duration-[160ms] ease-out hover:brightness-110"
              style={{
                background: "var(--brand-red)",
                fontSize: "13px",
                letterSpacing: "2px",
                padding: "14px 28px",
              }}
            >
              <Star size={14} fill="currentColor" /> Review on Google
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
