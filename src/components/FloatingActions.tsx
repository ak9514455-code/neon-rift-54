import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+919876543210"
        className="grid h-12 w-12 place-items-center rounded-full bg-card border border-accent/40 text-accent shadow-neon-blue hover:scale-110 transition"
        aria-label="Call"
      >
        <Phone size={20} />
      </a>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-pink text-white shadow-neon-pink animate-pulse-glow hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
