import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-display font-black text-xl tracking-wider">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-neon text-white shadow-neon">A</span>
            ANYTIME<span className="text-accent">.</span>
          </div>
          <p className="mt-4 font-accent uppercase tracking-widest text-sm text-accent">Game On. Anytime.</p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Haldwani's most advanced gaming cafe. PS5, PS4, PC & VR — all under one roof.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-accent">Pricing</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/tournaments" className="hover:text-accent">Tournaments</Link></li>
            <li><Link to="/reviews" className="hover:text-accent">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Visit Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-accent" /> Jail Rd, Heera Nagar, Haldwani, Uttarakhand</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-accent" /> __PHONE_DISPLAY__</li>
            <li className="flex gap-2"><Instagram size={16} className="mt-0.5 shrink-0 text-accent" /> @anytimegaming_hld</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-foreground mb-4">Hours</h4>
          <p className="text-sm text-muted-foreground">Monday – Sunday<br/>10:00 AM – 11:00 PM</p>
          <p className="mt-3 font-accent text-sm text-neon-pink uppercase tracking-wider">Open All 7 Days</p>
          <div className="mt-5 flex gap-3">
            <a href="__WA_BOOKING__" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-lg glass-card hover:shadow-neon-pink transition" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            <a href="https://instagram.com/anytimegaming_hld" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-lg glass-card hover:shadow-neon transition" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://maps.google.com/?q=Heera+Nagar+Haldwani" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-lg glass-card hover:shadow-neon transition" aria-label="Map"><MapPin size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © 2026 Anytime Gaming Cafe. All Rights Reserved.
      </div>
    </footer>
  );
}
