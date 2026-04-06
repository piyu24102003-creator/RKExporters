import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import Products from '@/react-app/components/Products';
import History from '@/react-app/components/History';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <History />
      <Contact />
      <Footer />
    </div>
  );
}
