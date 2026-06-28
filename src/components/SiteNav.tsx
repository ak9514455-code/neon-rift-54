import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/tournaments", label: "Tournaments" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Visit Us" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-3 flex items-center justify-between glass-card px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2 font-display font-black text-lg tracking-wider">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-neon text-white shadow-neon">A</span>
            <span className="hidden sm:inline">ANYTIME<span className="text-accent">.</span></span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-sm font-accent font-semibold uppercase tracking-wider text-foreground/70 hover:text-accent transition-colors"
                activeProps={{ className: "px-3 py-2 text-sm font-accent font-semibold uppercase tracking-wider text-accent" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center rounded-md bg-gradient-pink px-4 py-2 text-sm font-accent font-bold uppercase tracking-wider text-white shadow-neon-pink hover:opacity-90 transition"
          >
            Book Slot
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass-card p-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-sm font-accent font-semibold uppercase tracking-wider text-foreground/80 hover:bg-primary/20"
                  activeProps={{ className: "px-3 py-3 rounded-md text-sm font-accent font-semibold uppercase tracking-wider text-accent bg-primary/20" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex justify-center items-center rounded-md bg-gradient-pink px-4 py-3 text-sm font-accent font-bold uppercase tracking-wider text-white"
              >
                Book Slot on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
