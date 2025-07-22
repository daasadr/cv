import HeroActions from './HeroActions';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-full sm:h-screen min-h-[50rem] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 pb-20 md:pb-10"
      aria-labelledby="hero-title"
      role="banner"
    >
      {/* 3D Background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-[10rem] sm:pt-[5rem] md:pt-0">
        <HeroContent />
        <HeroActions />
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
