import { ArrowRight, Globe2 } from 'lucide-react';
import { Button } from '@/react-app/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://019c666e-1c1f-7ab6-b880-eb3249675bde.mochausercontent.com/hero-spices.jpg"
          alt="Indian Spices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Globe2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Building Trust Through Quality & Reliability
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Premium Indian
            <span className="block bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Exports Worldwide
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up delay-200">
            A growing startup dedicated to connecting global markets with India's finest agricultural products, authentic spices, and premium textiles. Building lasting partnerships through quality, trust, and personal relationships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Button size="lg" className="text-lg px-8 group" onClick={scrollToContact}>
              Start Partnership
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={scrollToContact}>
              Request Catalog
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up delay-500">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-muted-foreground mt-1">Quality Assured</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                Trust
              </div>
              <div className="text-sm text-muted-foreground mt-1">First Approach</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground mt-1">Client Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
