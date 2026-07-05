import { PHONE_DISPLAY, PHONE_TEL, whatsappUrl } from "@/lib/whatsapp";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Instagram, Clock, Car, Bike, ParkingSquare, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Heera Nagar, Haldwani | Anytime Gaming" },
      { name: "description", content: "Find Anytime Gaming at Jail Road, Heera Nagar, Haldwani. Open 7 days. Call or WhatsApp to book." },
      { property: "og:title", content: "Visit Us — Anytime Gaming Haldwani" },
      { property: "og:description", content: "Jail Road, Heera Nagar, Haldwani. Open 7 days." },
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
    const text = `Hi Anytime Gaming! 🎮\n\n👤 Name: ${fd.get("name")}\n📞 Phone: ${fd.get("phone")}\n\n${fd.get("message")}`;
    window.open(whatsappUrl(text), "_blank");
    setSent(true);
  };

  const inputStyle = {
    background: "var(--brand-card)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "6px",
    color: "var(--brand-white)",
    fontFamily: "var(--font-sans)",
    fontSize: "15px",
    padding: "12px 14px",
  } as const;
  const labelStyle = {
    fontFamily: "var(--font-accent)",
    fontWeight: 600,
    fontSize: "11px",
    letterSpacing: "2.5px",
    textTransform: "uppercase" as const,
    color: "var(--brand-muted)",
  };

  return (
    <div style={{ background: "var(--brand-dark)" }}>
      <section className="py-20 md:py-[96px]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="section-label">// Visit Us</p>
          <h1
            className="mt-4 font-display uppercase leading-[0.95]"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "var(--brand-white)" }}
          >
            Find Us.
            <br />
            <span style={{ color: "var(--brand-red)" }}>Game With Us.</span>
          </h1>
        </div>
      </section>

      <section className="pb-16" style={{ background: "var(--brand-dark)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid lg:grid-cols-2 gap-6">
          <div
            className="p-8 space-y-6"
            style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "12px",
            }}
          >
            {[
              { icon: MapPin, label: "Address", value: <>Anytime Gaming Cafe<br />Jail Rd, Heera Nagar,<br />Haldwani, Uttarakhand — 263139</> },
              { icon: Clock, label: "Timings", value: <>Mon – Sun · 10:00 AM – 11:00 PM</> },
              { icon: Phone, label: "WhatsApp / Call", value: <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors" style={{ color: "var(--brand-white)" }}>{PHONE_DISPLAY}</a> },
              { icon: Instagram, label: "Instagram", value: <a href="https://instagram.com/anytimegaming_hld" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" style={{ color: "var(--brand-white)" }}>@anytimegaming_hld</a> },
            ].map((r) => (
              <div key={r.label} className="flex gap-4">
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded"
                  style={{ background: "var(--brand-red)" }}
                >
                  <r.icon size={18} className="text-white" />
                </div>
                <div>
                  <p style={labelStyle}>{r.label}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: "var(--brand-white)" }}>
                    {r.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="p-8"
            style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "12px",
            }}
          >
            <p className="section-label">// Booking Form</p>
            <h2
              className="mt-3 mb-8 font-display uppercase"
              style={{ fontSize: "clamp(28px, 3.5vw, 36px)", color: "var(--brand-white)" }}
            >
              Send Booking Request
            </h2>
            <div className="space-y-5">
              <div>
                <label style={labelStyle}>Your Name</label>
                <input
                  required
                  name="name"
                  className="mt-2 w-full focus:outline-none focus:border-[var(--brand-red)] focus:shadow-[0_0_0_3px_var(--brand-red-glow)] transition-all duration-[160ms]"
                  style={inputStyle}
                  placeholder="e.g. Rohan Singh"
                />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  className="mt-2 w-full focus:outline-none focus:border-[var(--brand-red)] focus:shadow-[0_0_0_3px_var(--brand-red-glow)] transition-all duration-[160ms]"
                  style={inputStyle}
                  placeholder={PHONE_DISPLAY}
                />
              </div>
              <div>
                <label style={labelStyle}>Message / Booking Details</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none focus:outline-none focus:border-[var(--brand-red)] focus:shadow-[0_0_0_3px_var(--brand-red-glow)] transition-all duration-[160ms]"
                  style={inputStyle}
                  placeholder="Which platform? How many players? What time?"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 rounded-md font-accent font-bold uppercase text-white transition-all duration-[160ms] ease-out hover:brightness-110"
                style={{
                  background: "var(--brand-red)",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  padding: "16px 20px",
                }}
              >
                <Send size={14} /> Send Booking Request
              </button>
              {sent && (
                <p className="text-[13px] text-center" style={{ color: "var(--brand-red)" }}>
                  Opening WhatsApp…
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="pb-16" style={{ background: "var(--brand-dark)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div
            className="overflow-hidden"
            style={{
              border: "1px solid var(--brand-border)",
              borderRadius: "12px",
            }}
          >
            <iframe
              title="Anytime Gaming Cafe location"
              src="https://www.google.com/maps?q=Heera+Nagar+Jail+Road+Haldwani&output=embed"
              className="w-full h-[420px]"
              style={{ filter: "grayscale(40%) contrast(1.1) brightness(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="section-label">// Getting There</p>
          <h2
            className="mt-4 mb-10 font-display uppercase"
            style={{ fontSize: "clamp(32px, 4.5vw, 48px)", color: "var(--brand-white)" }}
          >
            How to Reach Us
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Car, title: "By Auto / Taxi", desc: 'Tell the driver: "Heera Nagar, Jail Road, Haldwani".' },
              { icon: Bike, title: "From Bus Stand", desc: "10-minute ride from Haldwani Bus Stand." },
              { icon: ParkingSquare, title: "Parking", desc: "Available right outside the cafe. No hassle." },
            ].map((r) => (
              <div
                key={r.title}
                className="p-7"
                style={{
                  background: "var(--brand-card)",
                  border: "1px solid var(--brand-border)",
                  borderRadius: "12px",
                }}
              >
                <r.icon size={22} style={{ color: "var(--brand-red)" }} />
                <h3
                  className="mt-4 font-accent font-bold uppercase"
                  style={{ fontSize: "15px", letterSpacing: "2px", color: "var(--brand-white)" }}
                >
                  {r.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
