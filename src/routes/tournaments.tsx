import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";
import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Calendar, IndianRupee, Users } from "lucide-react";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Tournaments — Compete & Win | Anytime Gaming" },
      { name: "description", content: "Monthly gaming tournaments at Anytime Gaming Haldwani. BGMI, Valorant, FIFA and more. Real prizes." },
      { property: "og:title", content: "Tournaments — Compete. Win. Repeat." },
      { property: "og:description", content: "Monthly BGMI, Valorant, FIFA tournaments with real prize pools." },
      { property: "og:url", content: "/tournaments" },
    ],
    links: [{ rel: "canonical", href: "/tournaments" }],
  }),
  component: Tournaments,
});

function Tournaments() {
  return (
    <div>
      <section className="py-20 md:py-[96px]" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="section-label">// Tournaments</p>
          <h1
            className="mt-4 font-display uppercase leading-[0.95]"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "var(--brand-white)" }}
          >
            Compete.
            <br />
            <span style={{ color: "var(--brand-red)" }}>Win. Repeat.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16px]" style={{ color: "var(--brand-muted)" }}>
            Monthly tournaments across BGMI, Valorant, FIFA and more. Real prizes, fair play.
          </p>
        </div>
      </section>

      <section className="pb-16" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div
            className="relative overflow-hidden p-8 md:p-12"
            style={{
              background: "var(--brand-card)",
              border: "1px solid rgba(232,25,44,0.2)",
              borderRadius: "12px",
            }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                right: "-100px",
                top: "-100px",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, var(--brand-red-glow), transparent 70%)",
              }}
            />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span
                  className="inline-block font-accent font-semibold uppercase"
                  style={{ fontSize: "11px", letterSpacing: "3px", color: "var(--brand-red)" }}
                >
                  🔥 Upcoming
                </span>
                <h2
                  className="mt-3 font-display uppercase leading-[0.95]"
                  style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--brand-white)" }}
                >
                  BGMI Squad Showdown
                </h2>
                <p className="mt-4 text-[15px]" style={{ color: "var(--brand-muted)" }}>
                  Get your squad. Lock in your seat. Bring the noise.
                </p>
                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center rounded-md font-accent font-bold uppercase text-white transition-all duration-[160ms] ease-out hover:brightness-110"
                  style={{
                    background: "var(--brand-red)",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    padding: "14px 28px",
                  }}
                >
                  Register on WhatsApp
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Calendar, label: "Date", value: "Sat, Aug 9" },
                  { icon: IndianRupee, label: "Entry", value: "₹50 / player" },
                  { icon: Trophy, label: "Prize", value: "₹2,000" },
                  { icon: Users, label: "Slots", value: "16 squads" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="p-5"
                    style={{
                      background: "var(--brand-dark)",
                      border: "1px solid var(--brand-border)",
                      borderRadius: "10px",
                    }}
                  >
                    <m.icon size={18} style={{ color: "var(--brand-red)" }} />
                    <p
                      className="mt-3 font-accent uppercase"
                      style={{ fontSize: "10px", letterSpacing: "2px", color: "var(--brand-muted)" }}
                    >
                      {m.label}
                    </p>
                    <p
                      className="mt-1 font-display"
                      style={{ fontSize: "20px", color: "var(--brand-white)" }}
                    >
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "var(--brand-dark)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid md:grid-cols-2 gap-5">
          <div
            className="p-7"
            style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "12px",
            }}
          >
            <h3 className="font-accent font-bold uppercase mb-5" style={{ fontSize: "16px", letterSpacing: "2px", color: "var(--brand-white)" }}>
              Tournament Rules
            </h3>
            <ul className="space-y-3 text-[14px]" style={{ color: "var(--brand-muted)" }}>
              <li>· Minimum age: 13+</li>
              <li>· Formats: Solo / Duo / Squad</li>
              <li>· Fair play enforced — no cheats, no smurfs</li>
              <li>· Results announced live on Instagram</li>
              <li>· Prize distributed same day</li>
            </ul>
          </div>
          <div
            className="p-7"
            style={{
              background: "var(--brand-card)",
              border: "1px solid var(--brand-border)",
              borderRadius: "12px",
            }}
          >
            <h3 className="font-accent font-bold uppercase mb-5" style={{ fontSize: "16px", letterSpacing: "2px", color: "var(--brand-white)" }}>
              Games Rotated
            </h3>
            <div className="flex flex-wrap gap-2">
              {["BGMI", "Valorant", "FIFA 24", "GTA V", "Tekken 8", "Rocket League", "COD Mobile"].map((g) => (
                <span
                  key={g}
                  className="px-3 py-1.5 font-accent uppercase"
                  style={{
                    background: "var(--brand-dark)",
                    border: "1px solid var(--brand-border)",
                    borderRadius: "6px",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    color: "var(--brand-white)",
                  }}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="section-label">// Hall of Fame</p>
          <h2
            className="mt-4 mb-10 font-display uppercase"
            style={{ fontSize: "clamp(32px, 4.5vw, 48px)", color: "var(--brand-white)" }}
          >
            Recent Champions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Team Shadow", game: "BGMI", month: "June 2026", prize: "₹2,000" },
              { name: "Aryan R.", game: "FIFA", month: "May 2026", prize: "₹1,500" },
              { name: "Voltage Squad", game: "Valorant", month: "April 2026", prize: "₹2,500" },
            ].map((w) => (
              <div
                key={w.name}
                className="p-6"
                style={{
                  background: "var(--brand-card)",
                  border: "1px solid var(--brand-border)",
                  borderRadius: "12px",
                }}
              >
                <Trophy size={20} style={{ color: "var(--brand-gold)" }} />
                <h4
                  className="mt-4 font-display uppercase"
                  style={{ fontSize: "22px", color: "var(--brand-white)" }}
                >
                  {w.name}
                </h4>
                <p
                  className="mt-1 font-accent uppercase"
                  style={{ fontSize: "11px", letterSpacing: "2px", color: "var(--brand-red)" }}
                >
                  {w.game} · {w.month}
                </p>
                <p className="mt-4 font-mono font-bold" style={{ fontSize: "24px", color: "var(--brand-white)" }}>
                  {w.prize}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
