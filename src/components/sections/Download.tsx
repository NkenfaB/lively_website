import { Download as DownloadIcon, Smartphone, AlertTriangle } from 'lucide-react';

import { Container } from '../Container';
import { Pill } from '../Pill';
import { Reveal } from '../Reveal';
import { Button } from '../Button';
import { site } from '@/lib/site';

export function Download() {
  return (
    <section id="download" className="py-24 sm:py-32 relative">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glow ring-1 ring-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950" />
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light"
                 style={{
                   backgroundImage:
                     'radial-gradient(800px circle at 20% 0%, rgba(255,255,255,0.25), transparent 50%), radial-gradient(600px circle at 90% 100%, rgba(255,255,255,0.18), transparent 60%)',
                 }}
            />

            <div className="relative px-7 py-14 sm:px-14 sm:py-16 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div>
                <Pill tone="brand" className="bg-white/15 text-white">
                  Available now · Android
                </Pill>
                <h2 className="mt-5 font-display text-white text-[32px] sm:text-[40px] leading-[1.08] font-bold tracking-tight">
                  Install Lively in under a minute.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/80 max-w-md">
                  A signed APK direct from the project. iOS and Play Store builds will follow.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button
                    href={site.apkUrl}
                    variant="secondary"
                    size="lg"
                    leading={<DownloadIcon size={18} />}
                    className="!bg-white !text-brand-800 hover:!bg-white">
                    Download APK
                  </Button>

                  <button
                    type="button"
                    disabled
                    aria-disabled
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-full text-[15px] font-semibold text-white/70 ring-1 ring-white/20 cursor-not-allowed">
                    <Smartphone size={18} />
                    On Google Play · Coming soon
                  </button>
                </div>

                <div className="mt-6 flex items-start gap-2.5 text-[12.5px] leading-relaxed text-white/65 max-w-lg">
                  <AlertTriangle size={16} className="flex-shrink-0 mt-px" />
                  <p>
                    Android may warn you about installing apps outside the Play Store — that&apos;s standard for sideloaded APKs. Verify the file signature matches the one shown in the changelog.
                  </p>
                </div>
              </div>

              <ol className="bg-white/[0.06] backdrop-blur rounded-2xl p-6 sm:p-7 ring-1 ring-white/10 space-y-4 text-white/85">
                <li className="flex gap-3">
                  <span className="font-bold text-white/95 w-5">1.</span>
                  <span className="text-[13.5px] leading-relaxed">Tap <strong className="text-white">Download APK</strong> on your Android phone.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white/95 w-5">2.</span>
                  <span className="text-[13.5px] leading-relaxed">If prompted, allow installing from this source.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white/95 w-5">3.</span>
                  <span className="text-[13.5px] leading-relaxed">Open the downloaded file and tap Install.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white/95 w-5">4.</span>
                  <span className="text-[13.5px] leading-relaxed">Launch Lively. Grant microphone access and you&apos;re set.</span>
                </li>
              </ol>
            </div>
          </div>
        </Reveal>

        {/* iOS / Play store secondary callout */}
        <Reveal delay={0.05}>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="rounded-2xl ring-1 ring-[color:var(--color-border)] p-5">
              <p className="text-[12.5px] font-bold uppercase tracking-wider text-[color:var(--color-text-subtle)]">
                iOS
              </p>
              <p className="mt-1 text-[14px] text-[color:var(--color-text-muted)]">
                Coming after the research deployment.
              </p>
            </div>
            <div className="rounded-2xl ring-1 ring-[color:var(--color-border)] p-5">
              <p className="text-[12.5px] font-bold uppercase tracking-wider text-[color:var(--color-text-subtle)]">
                Google Play
              </p>
              <p className="mt-1 text-[14px] text-[color:var(--color-text-muted)]">
                Under review. Sideload via APK for now.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
