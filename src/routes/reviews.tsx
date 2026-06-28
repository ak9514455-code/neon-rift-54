import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — What Gamers Say | Anytime Gaming Cafe" },
      { name: "description", content: "Rated 4.8★ on Google. See what the Haldwani gaming community says about Anytime Gaming Cafe." },
      { property: "og:title", content: "Reviews — What Gamers Say" },
      { property: "og:description", content: "4.8★ on Google. Real reviews from the Haldwani gaming community." },
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
  { name: "Ananya P.", rating: 4, quote: "Loved the vibe — neon lighting really hits. Slightly busy on weekends, so book ahead.", date: "2 months ago" },
  { name: "Vikram J.", rating: 5, quote: "PS5 collection is updated, FIFA 24 was a blast. Pricing is fair for the quality you get.", date: "3 months ago" },
  { name: "Neha Bisht", rating: 5, quote: "Took my younger brother for his first VR experience — he's still talking about it. Staff was very patient.", date: "3 months ago" },
  { name: "Rahul T.", rating: 5, quote: "Tournaments are organized properly with real prizes. Best gaming cafe in Uttarakhand IMO.", date: "4 months ago" },
];

function Reviews() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <header className="text-center mb-16">
        <p className="font-accent uppercase tracking-[0.3em] text-sm text-accent">Reviews</p>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl font-black uppercase text-glow">What Gamers Say</h1>
        <div className="mt-6 inline-flex items-center gap-3 glass-card px-6 py-3">
          <div className="flex text-neon-pink">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="currentColor" />)}</div>
          <span className="font-display text-2xl font-black">4.8</span>
          <span className="font-accent uppercase text-xs tracking-widest text-muted-foreground">on Google</span>
        </div>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r) => (
          <article key={r.name} className="glass-card p-6 hover:shadow-neon transition flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex text-neon-pink">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
              <span className="text-xs text-muted-foreground">{r.date}</span>
            </div>
            <p className="mt-4 text-foreground/90 leading-relaxed flex-1">"{r.quote}"</p>
            <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border/40">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-neon text-white font-display font-bold text-sm">{r.name[0]}</div>
              <span className="font-accent uppercase tracking-wider text-sm">{r.name}</span>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 glass-card p-12 text-center">
        <h3 className="font-display text-3xl font-black uppercase">Had a great experience?</h3>
        <p className="mt-3 text-muted-foreground">Leave us a review — it helps us grow. 🙏</p>
        <a href="https://www.google.com/search?q=Anytime+Gaming+Cafe+Haldwani" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-pink px-7 py-3 font-accent font-bold uppercase tracking-wider text-white shadow-neon-pink hover:scale-105 transition">
          <Star size={18} fill="currentColor" /> Review on Google
        </a>
      </section>
    </div>
  );
}
