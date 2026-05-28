import { Container } from '../Container';
import { Reveal } from '../Reveal';

const STATS = [
  { value: '< 50 ms', label: 'On-device inference' },
  { value: '0 audio', label: 'Uploaded by default' },
  { value: '100%', label: 'Works offline' },
  { value: 'OTA', label: 'Model updates' },
];

export function Trust() {
  return (
    <section className="py-16 sm:py-20 border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
      <Container>
        <Reveal>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--color-text-subtle)]">
            Built on open research
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.04}>
              <div className="text-center">
                <p className="font-display text-[28px] sm:text-[32px] font-bold tracking-tight bg-gradient-to-b from-[color:var(--color-text)] to-[color:var(--color-text-muted)] bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="mt-1 text-[12.5px] text-[color:var(--color-text-muted)]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
