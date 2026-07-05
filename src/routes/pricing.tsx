import { WHATSAPP_BOOKING_URL } from "@/lib/whatsapp";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Crown, Moon, Cake, Users } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Transparent Rates | Anytime Gaming" },
      { name: "description", content: "No hidden charges. Pay only for what you play. PS5, PS4, PC, VR and racing rates at Anytime Gaming, Haldwani." },
      { property: "og:title", content: "Transparent Pricing — Anytime Gaming" },
      { property: "og:description", content: "Simple rates for PS5, PS4, PC, VR and racing." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const ps5Rows = [
  { players: 1, half: 70, one: 100 },
  { players: 2, half: 120, one: 180 },
  { players: 3, half: 170, one: 260 },
  { players: 4, half: 200, one: 300 },
];
const ps4Rows = [
  { players: 1, half: 50, one: 80 },
  { players: 2, half: 100, one: 150 },
  { players: 3, half: 150, one: 220 },
  { players: 4, half: 200, one: 250 },
];
const cards = [
  { title: "VR Experience", prices: [["30 Minutes", 150], ["60 Minutes", 250]] as const },
  { title: "VR + Racing Wheel", prices: [["30 Minutes", 250], ["1 Hour", 400]] as const },
  { title: "Racing Wheel Only", prices: [["30 Minutes", 150], ["60 Minutes", 250]] as const },
  { title: "PC Gaming", prices: [["30 Minutes", 70], ["60 Minutes", 100]] as const },
];
const combos = [
  { icon: Users, title: "Squad Package", desc: "Bring 3+ friends. Get 10% off total bill." },
  { icon: Moon, title: "Night Owl Pack", desc: "Late-night sessions after 9PM. Discounted rates." },
  { icon: Cake, title: "Birthday Bash", desc: "Book the full cafe. Decor + gaming + snacks. Custom quote." },
];

function PriceTable({ title, rows }: { title: string; rows: typeof ps5Rows }) {
  return (
    <div>
      <h3
        className="font-display uppercase mb-5"
        style={{ fontSize: "clamp(28px, 3.5vw, 42px)", color: "var(--brand-white)" }}
      >
        {title}
      </h3>
      <div
        className="overflow-x-auto"
        style={{
          background: "var(--brand-card)",
          border: "1px solid var(--brand-border)",
          borderRadius: "12px",
        }}
      >
        <table className="w-full min-w-[400px]">
          <thead style={{ background: "var(--brand-dark)" }}>
            <tr>
              {["Players", "30 Mins", "1 Hour"].map((h) => (
                <th
                  key={h}
                  className="text-left px-6 py-4 font-accent font-semibold uppercase"
                  style={{ fontSize: "11px", letterSpacing: "3px", color: "var(--brand-muted)" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.players}
                style={{
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                  borderTop: "1px solid var(--brand-border)",
                }}
              >
                <td
                  className="px-6 py-5 font-accent uppercase"
                  style={{ fontSize: "14px", letterSpacing: "1px", color: "var(--brand-white)" }}
                >
                  {r.players} Player{r.players > 1 ? "s" : ""}
                </td>
                <td className="px-6 py-5 font-mono font-bold" style={{ fontSize: "16px", color: "var(--brand-white)" }}>
                  ₹{r.half}
                </td>
                <td className="px-6 py-5 font-mono font-bold" style={{ fontSize: "16px", color: "var(--brand-white)" }}>
                  ₹{r.one}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[12px] italic" style={{ color: "var(--brand-muted)" }}>
        Per player rates. Prices may vary for special events.
      </p>
    </div>
  );
}

function Pricing() {
  return (
    <div>
      <section className="py-20 md:py-[96px]" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="section-label">// Pricing</p>
          <h1
            className="mt-4 font-display uppercase leading-[0.95]"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "var(--brand-white)" }}
          >
            Transparent
            <br />
            <span style={{ color: "var(--brand-red)" }}>Pricing.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16px]" style={{ color: "var(--brand-muted)" }}>
            No hidden charges. Pay only for what you play.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 grid lg:grid-cols-2 gap-10">
          <PriceTable title="PS5 Gaming" rows={ps5Rows} />
          <PriceTable title="PS4 Gaming" rows={ps4Rows} />
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "var(--brand-dark)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="section-label">// VR · PC · Racing</p>
          <h2
            className="mt-4 mb-10 font-display uppercase"
            style={{ fontSize: "clamp(32px, 4.5vw, 48px)", color: "var(--brand-white)" }}
          >
            Other Platforms
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((c) => (
              <div
                key={c.title}
                className="p-7 transition-all duration-[200ms] hover:-translate-y-[2px]"
                style={{
                  background: "var(--brand-card)",
                  border: "1px solid var(--brand-border)",
                  borderRadius: "12px",
                }}
              >
                <h3
                  className="font-accent font-bold uppercase mb-5"
                  style={{ fontSize: "15px", letterSpacing: "2px", color: "var(--brand-white)" }}
                >
                  {c.title}
                </h3>
                <div className="space-y-3">
                  {c.prices.map(([d, p]) => (
                    <div
                      key={d}
                      className="flex justify-between items-center pb-3 border-b last:border-0"
                      style={{ borderColor: "var(--brand-border)" }}
                    >
                      <span className="text-[13px]" style={{ color: "var(--brand-muted)" }}>
                        {d}
                      </span>
                      <span className="font-mono font-bold" style={{ fontSize: "16px", color: "var(--brand-white)" }}>
                        ₹{p}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "var(--brand-black)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="section-label">// Combos</p>
          <h2
            className="mt-4 mb-10 font-display uppercase"
            style={{ fontSize: "clamp(32px, 4.5vw, 48px)", color: "var(--brand-white)" }}
          >
            Group & Special Packs
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {combos.map((c) => (
              <div
                key={c.title}
                className="p-7"
                style={{
                  background: "var(--brand-card)",
                  border: "1px solid var(--brand-border)",
                  borderRadius: "12px",
                }}
              >
                <c.icon size={22} style={{ color: "var(--brand-red)" }} />
                <h3
                  className="mt-5 font-accent font-bold uppercase"
                  style={{ fontSize: "16px", letterSpacing: "1.5px", color: "var(--brand-white)" }}
                >
                  {c.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "var(--brand-dark)" }}>
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="section-label">// Membership</p>
          <h2
            className="mt-4 mb-10 font-display uppercase"
            style={{ fontSize: "clamp(32px, 4.5vw, 48px)", color: "var(--brand-white)" }}
          >
            Play More. Save More.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { name: "Starter", price: "999", perks: ["10 Hours of Gaming", "Priority Booking", "10% Off Extra Hours"], popular: false },
              { name: "Pro Gamer", price: "1,999", perks: ["25 Hours of Gaming", "1 VR Session Free", "Birthday Bonus Hour", "Member-Only Tournaments"], popular: true },
            ].map((p) => (
              <div
                key={p.name}
                className="relative p-8"
                style={{
                  background: "var(--brand-card)",
                  border: p.popular ? "1px solid var(--brand-red)" : "1px solid var(--brand-border)",
                  borderRadius: "12px",
                  boxShadow: p.popular ? "0 12px 32px rgba(232,25,44,0.15)" : undefined,
                }}
              >
                {p.popular && (
                  <span
                    className="absolute -top-3 left-8 rounded px-3 py-1 font-accent font-bold uppercase text-white"
                    style={{ background: "var(--brand-red)", fontSize: "10px", letterSpacing: "2.5px" }}
                  >
                    Most Popular
                  </span>
                )}
                <Crown size={22} style={{ color: p.popular ? "var(--brand-red)" : "var(--brand-muted)" }} />
                <h3
                  className="mt-4 font-display uppercase"
                  style={{ fontSize: "28px", color: "var(--brand-white)" }}
                >
                  {p.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-mono font-bold" style={{ fontSize: "42px", color: "var(--brand-white)" }}>
                    ₹{p.price}
                  </span>
                  <span className="text-[13px]" style={{ color: "var(--brand-muted)" }}>
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.perks.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[14px]" style={{ color: "var(--brand-white)" }}>
                      <Check size={15} className="mt-0.5 shrink-0" style={{ color: "var(--brand-red)" }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 block text-center rounded-md font-accent font-bold uppercase transition-all duration-[160ms] ease-out hover:brightness-110"
                  style={{
                    background: p.popular ? "var(--brand-red)" : "transparent",
                    color: "var(--brand-white)",
                    border: p.popular ? "none" : "1px solid rgba(255,255,255,0.15)",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    padding: "14px 20px",
                  }}
                >
                  Join {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
