import { PHONE_DISPLAY, WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";
import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      className="mt-24 border-t"
      style={{ background: "#040408", borderColor: "var(--brand-border)" }}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-16 pb-10 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-10 w-10 place-items-center rounded-md font-display text-xl"
              style={{ background: "var(--brand-red)", color: "var(--brand-white)" }}
            >
              A
            </span>
            <span className="font-display text-xl tracking-widest">
              ANYTIME<span style={{ color: "var(--brand-red)" }}>.</span>
            </span>
          </div>
          <p
            className="mt-5 font-accent font-bold uppercase text-[13px]"
            style={{ letterSpacing: "3px", color: "var(--brand-red)" }}
          >
            Come. Play. Win. Repeat.
          </p>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
            Haldwani's premier gaming destination. PS5, PS4, PC, VR & Racing under one roof.
          </p>
        </div>

        <div>
          <h4
            className="font-accent font-semibold uppercase text-[11px] mb-5"
            style={{ letterSpacing: "3px", color: "var(--brand-muted)" }}
          >
            Pages
          </h4>
          <ul className="space-y-3 text-[14px]">
            {[
              { to: "/services", label: "Platforms" },
              { to: "/pricing", label: "Pricing" },
              { to: "/gallery", label: "Gallery" },
              { to: "/tournaments", label: "Tournaments" },
              { to: "/reviews", label: "Reviews" },
              { to: "/contact", label: "Visit Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="transition-colors duration-[120ms] hover:text-white"
                  style={{ color: "var(--brand-muted)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className="font-accent font-semibold uppercase text-[11px] mb-5"
            style={{ letterSpacing: "3px", color: "var(--brand-muted)" }}
          >
            Contact
          </h4>
          <ul className="space-y-3 text-[14px]" style={{ color: "var(--brand-white)" }}>
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "var(--brand-red)" }} />
              <span style={{ color: "var(--brand-muted)" }}>
                Jail Rd, Heera Nagar,
                <br />
                Haldwani, Uttarakhand
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "var(--brand-red)" }} />
              <span style={{ color: "var(--brand-muted)" }}>{PHONE_DISPLAY}</span>
            </li>
            <li className="flex gap-2.5">
              <Instagram size={16} className="mt-0.5 shrink-0" style={{ color: "var(--brand-red)" }} />
              <span style={{ color: "var(--brand-muted)" }}>@anytimegaming_hld</span>
            </li>
          </ul>
        </div>

        <div>
          <h4
            className="font-accent font-semibold uppercase text-[11px] mb-5"
            style={{ letterSpacing: "3px", color: "var(--brand-muted)" }}
          >
            Follow
          </h4>
          <p className="text-[14px] mb-4" style={{ color: "var(--brand-muted)" }}>
            Mon – Sun · 10:00 AM – 11:00 PM
          </p>
          <div className="flex gap-2.5">
            {[
              { href: WHATSAPP_BOOKING_URL, icon: MessageCircle, label: "WhatsApp" },
              { href: "https://instagram.com/anytimegaming_hld", icon: Instagram, label: "Instagram" },
              { href: "https://maps.google.com/?q=Heera+Nagar+Haldwani", icon: MapPin, label: "Map" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-md border transition-all duration-[160ms] hover:border-[var(--brand-red)] hover:text-white"
                style={{
                  borderColor: "var(--brand-border)",
                  color: "var(--brand-muted)",
                  background: "var(--brand-card)",
                }}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="border-t py-6 text-center text-xs"
        style={{ borderColor: "var(--brand-border)", color: "var(--brand-muted)" }}
      >
        © 2026 Anytime Gaming Cafe · All Rights Reserved
      </div>
    </footer>
  );
}
