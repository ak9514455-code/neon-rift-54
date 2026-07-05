import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call"
        className="grid h-12 w-12 place-items-center rounded-full border transition-transform duration-[160ms] hover:scale-[1.08]"
        style={{
          background: "var(--brand-card)",
          borderColor: "var(--brand-red)",
          color: "var(--brand-red)",
        }}
      >
        <Phone size={18} />
      </a>
      <a
        href={WHATSAPP_BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full transition-transform duration-[160ms] hover:scale-[1.08]"
        style={{ background: "#25D366", color: "white", boxShadow: "0 8px 24px rgba(37,211,102,0.4)" }}
      >
        <MessageCircle size={26} />
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "#25D366", opacity: 0.35 }}
        />
      </a>
    </div>
  );
}
