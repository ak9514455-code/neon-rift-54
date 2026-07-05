import { WHATSAPP_BOOKING_URL, PHONE_TEL, PHONE_DISPLAY, whatsappUrl } from "@/lib/whatsapp";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Instagram, Clock, Car, Bike, ParkingSquare, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Heera Nagar, Haldwani | Anytime Gaming Cafe" },
      { name: "description", content: "Find Anytime Gaming Cafe at Jail Road, Heera Nagar, Haldwani. Open 7 days. Get directions, call, or message us on WhatsApp." },
      { property: "og:title", content: "Visit Us — Anytime Gaming Cafe Haldwani" },
      { property: "og:description", content: "Jail Road, Heera Nagar, Haldwani. Open 7 days a week." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = `Hi! I'm ${fd.get("name")} (${fd.get("phone")}). ${fd.get("message")}`;
    window.open(whatsappUrl(text), "_blank");
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <header className="text-center mb-14">
        <p className="font-accent uppercase tracking-[0.3em] text-sm text-accent">Visit us</p>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl font-black uppercase text-glow">Find Us. Game With Us.</h1>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Info */}
        <div className="glass-card p-8 space-y-6">
          <div className="flex gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-neon shadow-neon"><MapPin size={20} className="text-white" /></div>
            <div>
              <p className="font-accent uppercase tracking-wider text-xs text-accent">Address</p>
              <p className="mt-1 font-display text-lg">Anytime Gaming Cafe<br/>Jail Rd, Heera Nagar,<br/>Haldwani, Uttarakhand — 263139</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-pink shadow-neon-pink"><Clock size={20} className="text-white" /></div>
            <div>
              <p className="font-accent uppercase tracking-wider text-xs text-accent">Timings</p>
              <p className="mt-1 font-display text-lg">Mon – Sun · 10:00 AM – 11:00 PM</p>
              <p className="text-sm text-neon-pink font-accent uppercase tracking-wider">Open all 7 days</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-neon shadow-neon"><Phone size={20} className="text-white" /></div>
            <div>
              <p className="font-accent uppercase tracking-wider text-xs text-accent">WhatsApp / Call</p>
              <a href={`tel:${PHONE_TEL}`} className="mt-1 block font-display text-lg hover:text-accent">{PHONE_DISPLAY}</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-pink shadow-neon-pink"><Instagram size={20} className="text-white" /></div>
            <div>
              <p className="font-accent uppercase tracking-wider text-xs text-accent">Instagram</p>
              <a href="https://instagram.com/anytimegaming_hld" target="_blank" rel="noreferrer" className="mt-1 block font-display text-lg hover:text-accent">@anytimegaming_hld</a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="glass-card p-8">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">Send Us a Message</h2>
          <div className="space-y-4">
            <div>
              <label className="font-accent uppercase tracking-wider text-xs text-muted-foreground">Name</label>
              <input required name="name" className="mt-1 w-full rounded-md bg-input/50 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:shadow-neon-blue transition" placeholder="Your name" />
            </div>
            <div>
              <label className="font-accent uppercase tracking-wider text-xs text-muted-foreground">Phone</label>
              <input required name="phone" type="tel" className="mt-1 w-full rounded-md bg-input/50 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:shadow-neon-blue transition" placeholder={PHONE_DISPLAY} />
            </div>
            <div>
              <label className="font-accent uppercase tracking-wider text-xs text-muted-foreground">Message / Query</label>
              <textarea required name="message" rows={4} className="mt-1 w-full rounded-md bg-input/50 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:shadow-neon-blue transition resize-none" placeholder="Booking? Event? Question?" />
            </div>
            <button type="submit" className="w-full inline-flex justify-center items-center gap-2 rounded-md bg-gradient-pink px-6 py-3 font-accent font-bold uppercase tracking-wider text-white shadow-neon-pink hover:scale-[1.02] transition">
              <Send size={16} /> Send via WhatsApp
            </button>
            {sent && <p className="text-sm text-accent text-center">Opening WhatsApp…</p>}
          </div>
        </form>
      </div>

      {/* Map */}
      <section className="mt-12 overflow-hidden rounded-2xl border border-border glass-card">
        <iframe
          title="Anytime Gaming Cafe location"
          src="https://www.google.com/maps?q=Heera+Nagar+Jail+Road+Haldwani&output=embed"
          className="w-full h-[420px] grayscale-[30%] contrast-110"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* How to reach */}
      <section className="mt-16">
        <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-center mb-10">How to Reach Us</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Car, title: "By Auto / Taxi", desc: "Tell the driver: \"Heera Nagar, Jail Road, Haldwani\"." },
            { icon: Bike, title: "From Bus Stand", desc: "10-minute ride from Haldwani Bus Stand. Easily accessible." },
            { icon: ParkingSquare, title: "Parking", desc: "Available right outside the cafe. No hassle." },
          ].map((r) => (
            <div key={r.title} className="glass-card p-6 hover:shadow-neon transition">
              <r.icon size={28} className="text-accent" />
              <h3 className="mt-4 font-display text-lg font-bold uppercase">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
