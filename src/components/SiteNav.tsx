import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Platforms" },
  { to: "/pricing", label: "Pricing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/tournaments", label: "Tournaments" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Visit" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[60px] border-b"
      style={{
        background: "rgba(7,7,16,0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottomColor: "rgba(232,25,44,0.15)",
      }}
    >
      <div className="mx-auto max-w-[1200px] h-full px-5 sm:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className="grid h-9 w-9 place-items-center rounded-md font-display text-xl leading-none"
            style={{ background: "var(--brand-red)", color: "var(--brand-white)" }}
          >
            A
          </span>
          <span className="font-display text-lg tracking-widest" style={{ color: "var(--brand-white)" }}>
            ANYTIME<span style={{ color: "var(--brand-red)" }}>.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-3.5 py-2 text-[14px] font-medium transition-colors duration-[120ms] hover:text-white group"
              style={{ color: "var(--brand-muted)", fontFamily: "var(--font-sans)" }}
              activeProps={{
                style: { color: "var(--brand-white)", fontFamily: "var(--font-sans)" },
                className:
                  "relative px-3.5 py-2 text-[14px] font-medium [&>span]:opacity-100",
              }}
            >
              {l.label}
              <span
                className="absolute left-3.5 right-3.5 -bottom-[1px] h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-[160ms]"
                style={{ background: "var(--brand-red)" }}
              />
            </Link>
          ))}
        </nav>

        <a
          href={WHATSAPP_BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center rounded-md font-accent font-bold uppercase text-white transition-all duration-[160ms] ease-out hover:brightness-110"
          style={{
            background: "var(--brand-red)",
            fontSize: "13px",
            letterSpacing: "2px",
            padding: "10px 20px",
            boxShadow: "0 4px 14px rgba(232,25,44,0.25)",
          }}
        >
          Book Now
        </a>

        <button
          className="lg:hidden p-2"
          style={{ color: "var(--brand-white)" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden absolute top-[60px] right-0 w-[80%] max-w-sm h-screen border-l animate-in slide-in-from-right duration-300"
          style={{ background: "var(--brand-dark)", borderColor: "var(--brand-border)" }}
        >
          <div className="flex flex-col p-6 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded text-[15px] font-medium transition-colors"
                style={{ color: "var(--brand-white)", fontFamily: "var(--font-sans)" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center items-center rounded-md font-accent font-bold uppercase text-white"
              style={{
                background: "var(--brand-red)",
                fontSize: "13px",
                letterSpacing: "2px",
                padding: "12px 20px",
              }}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
