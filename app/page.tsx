import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Portfolio } from '@/components/portfolio';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}