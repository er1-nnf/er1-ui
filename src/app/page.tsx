import { Hero } from '@/components/sections/Hero';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Features } from '@/components/sections/Features';
import { ForBusiness } from '@/components/sections/ForBusiness';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <BeforeAfter />
      <Features />
      <ForBusiness />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
