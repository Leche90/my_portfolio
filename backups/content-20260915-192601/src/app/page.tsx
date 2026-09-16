import Header from '@/components/Header';
import Colophon from '@/components/sections/Colophon';
import Index from '@/components/sections/Index';
import Cabinet from '@/components/sections/Cabinet';
import Pricing from '@/components/sections/Pricing';
import Correspondence from '@/components/sections/Correspondence';
import Footer from '@/components/Footer';

/**
 * ─── HERO VARIANT SWITCHER ─────────────────────────────────────────
 * Three concepts of "The Index" portfolio. Try each, pick one:
 *
 *   HeroAlpha — "The Cover Page"
 *     Editorial book-cover style. Big serif title, paper texture,
 *     Roman numerals. Clean, confident, no 3D yet. The lightest of
 *     the three.
 *
 *   HeroBeta  — "The Specimen"
 *     Type-specimen layout with a CSS-3D rotating volume in the corner.
 *     Like a museum exhibit. Bold, mid-weight 3D, mouse-reactive.
 *
 *   HeroGamma — "The Archive"
 *     Three.js wireframe cube floating in cream space, with mouse parallax.
 *     Cinematic, the heaviest. Full 3D scene.
 *
 * To swap variants: comment out the active import and uncomment another.
 * ───────────────────────────────────────────────────────────────────
 */
// import Hero from '@/components/heroes/HeroAlpha';
import Hero from '@/components/heroes/HeroBeta';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Colophon />
        <Index />
        <Cabinet />
        <Pricing />
        <Correspondence />
      </main>
      <Footer />
    </>
  );
}
