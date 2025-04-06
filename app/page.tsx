import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import { GatewaySection } from '@/components/sections/GatewaySection';
import { TrustedSection } from '@/components/sections/TrustedSection';
import { Header } from '@/components/navigations/Header';
import { HeroSection } from '@/components/sections/Hero';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>
        <HeroSection />
        <ShowcaseSection />
        <GatewaySection />
        <TrustedSection />
      </main>
      <Footer />
    </div>
  );
}
