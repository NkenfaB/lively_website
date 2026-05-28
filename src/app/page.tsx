import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Trust } from '@/components/sections/Trust';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { Download } from '@/components/sections/Download';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <HowItWorks />
        <Features />
        <Download />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
