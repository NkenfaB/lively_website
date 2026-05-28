import { ArrowRight } from 'lucide-react';

import { Container } from '../Container';
import { Reveal } from '../Reveal';
import { Button } from '../Button';

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="rounded-3xl p-10 sm:p-16 text-center bg-[color:var(--color-surface)] ring-1 ring-[color:var(--color-border)]">
            <h2 className="font-display text-[34px] sm:text-[42px] leading-[1.05] font-bold tracking-tight max-w-3xl mx-auto">
              A quiet, honest tool for the noisy moments.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--color-text-muted)] max-w-xl mx-auto">
              Lively isn&apos;t a diagnosis. It&apos;s a calm signal — a way to listen back, save a result, and make a more informed next move.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="#download" variant="primary" size="lg" trailing={<ArrowRight size={18} />}>
                Get the app
              </Button>
              <Button href="/privacy" variant="secondary" size="lg">
                Read our privacy notes
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
