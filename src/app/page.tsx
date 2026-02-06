import Navigation from '@/components/LandingPage/Navigation';
import Hero from '@/components/LandingPage/Hero';
import Fitur from '@/components/LandingPage/Fitur';
import Pricing from '@/components/LandingPage/Pricing';
import CTA from '@/components/LandingPage/CTA';
import Footer from '@/components/LandingPage/Footer';

const App = () => {

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />
      <Hero />
      <Fitur />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;