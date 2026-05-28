'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * A stylized phone mockup that mimics the app's Record screen.
 * Pure SVG/CSS — no image asset needed, so it ships instantly on Vercel.
 * When you have a real screenshot, replace this with `<Image src=... />`.
 */
export function PhoneMockup() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {/* soft glow behind the phone */}
      <div className="absolute inset-0 -z-10 mx-auto blur-3xl opacity-50">
        <div className="mx-auto h-[460px] w-[280px] rounded-full bg-gradient-to-b from-brand-500/40 to-brand-900/30" />
      </div>

      {/* device frame */}
      <div className="relative mx-auto aspect-[9/19] w-[280px] sm:w-[300px] rounded-[44px] bg-gradient-to-b from-[#1a2536] to-[#0a1322] p-2 shadow-[0_30px_80px_-20px_rgba(8,33,63,0.65)] ring-1 ring-white/10">
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-[#070b14]">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />

          {/* status bar */}
          <div className="absolute inset-x-0 top-0 h-9 flex items-center justify-between px-6 pt-2 text-[10px] font-medium text-white/80">
            <span>11:35</span>
            <span>•</span>
          </div>

          {/* content */}
          <div className="absolute inset-0 pt-10 pb-6 px-5 flex flex-col items-center">
            <div className="rounded-full px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.1em] bg-rose-500/20 text-rose-200 ring-1 ring-rose-400/30">
              ● Recording
            </div>

            <p className="mt-4 text-center text-white font-bold text-[18px]">Listening…</p>
            <p className="text-center text-[11px] text-white/60">Cough 2–3 times in a single session.</p>

            {/* pulsing ring */}
            <div className="relative mt-7 mx-auto h-[140px] w-[140px]">
              <PulseRing delay={0} reduce={!!reduce} />
              <PulseRing delay={1.1} reduce={!!reduce} />
              <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-brand-500 to-brand-700 shadow-[inset_0_2px_6px_rgba(255,255,255,0.2)] flex items-center justify-center">
                <span className="font-bold text-white text-[22px]">00:12</span>
              </div>
            </div>

            <div className="mt-auto w-full space-y-2">
              <div className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-3">
                <p className="text-[10.5px] font-bold uppercase text-white/50 tracking-wider mb-0.5">Tips</p>
                <p className="text-[11px] text-white/80 leading-snug">Keep the phone steady. Avoid speaking.</p>
              </div>
              <div className="h-11 rounded-2xl bg-rose-500/95 flex items-center justify-center text-white text-[13px] font-bold">
                Stop and analyze
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PulseRing({ delay, reduce }: { delay: number; reduce: boolean }) {
  if (reduce) {
    return (
      <div className="absolute inset-0 rounded-full ring-2 ring-brand-300/40" />
    );
  }
  return (
    <motion.div
      className="absolute inset-0 rounded-full ring-2 ring-brand-300/60"
      initial={{ scale: 0.85, opacity: 0.55 }}
      animate={{ scale: 1.2, opacity: 0 }}
      transition={{ duration: 2.2, delay, repeat: Infinity, ease: 'easeOut' }}
    />
  );
}
