'use client';

import { Reveal } from '../Reveal';
import { Container } from '../Container';
import { Pill } from '../Pill';

export function Demo() {
  return (
    <section id="demo" className="py-24 sm:py-32 relative">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <Reveal>
            <Pill tone="brand">App demo</Pill>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-[34px] sm:text-[42px] leading-[1.1] font-bold tracking-tight">
              See Lively in action
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[15.5px] leading-relaxed text-[color:var(--color-text-muted)]">
              Record a cough, get an on-device result in seconds. Audio is processed entirely on your phone — nothing is uploaded.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto w-full max-w-[320px] rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-[color:var(--color-border)]">
            <video
              src="/lively_demo_edited.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover block"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
