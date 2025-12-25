import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Impact } from '@/components/landing/impact';
import { Categories } from '@/components/landing/categories';
import { Experience } from '@/components/landing/experience';
import { Showcase } from '@/components/landing/showcase';
import { FinalCta } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Impact />
        <Categories />
        <Experience />
        <Showcase />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
