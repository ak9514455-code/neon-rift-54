export function Particles({ count = 30 }: { count?: number }) {
  const particles = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const left = Math.random() * 100;
        const size = 2 + Math.random() * 4;
        const duration = 8 + Math.random() * 12;
        const delay = Math.random() * 10;
        const color = i % 3 === 0 ? "var(--neon-pink)" : i % 3 === 1 ? "var(--neon-blue)" : "var(--neon-purple)";
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `-20px`,
              width: size,
              height: size,
              background: color,
              boxShadow: `0 0 ${size * 3}px ${color}`,
              animation: `particle-rise ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
