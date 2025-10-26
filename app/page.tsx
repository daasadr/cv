import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation/index';
import Hero from '@/components/sections/Hero';
import UnderFold from '@/components/UnderFold';
import { WebVitalsReporterLoader } from '@/components/WebVitalsReporter';

export default function Home() {
  return (
    <>
      {/* Web Vitals monitoring */}
      <WebVitalsReporterLoader />

      {/* Critical above-the-fold content - loads immediately */}
      <Navigation />
      <main id="main-content">
        <Hero />

        {/* Under-fold sections with dynamic loading */}
        <UnderFold />
      </main>
      <Footer />
    </>
  );
}
