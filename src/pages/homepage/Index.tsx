import Header from '@/components/common/Header';
import HeroSection from '@/components/homepage/HeroSection';
import FeaturesSection from '@/components/homepage/FeaturesSection';
import Footer from '@/components/common/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
