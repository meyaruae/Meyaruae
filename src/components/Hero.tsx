import React, { useCallback, memo, useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for sticky header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = 'https://images.unsplash.com/photo-1595522099319-e4db9be6e000?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  }, []);

  return (
    <section 
      id="home"
      className="relative h-[600px] sm:h-[700px] lg:h-[800px] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-800 transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: imageLoaded ? 'url(https://images.unsplash.com/photo-1595522099319-e4db9be6e000?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' : 'none',
          minHeight: '100%'
        }}
      />
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 container text-center px-4 sm:px-6">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-center text-left">
            From small fixes to complete maintenance plans
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed px-4 text-center text-left">
            Meyar keeps your kitchen safe and functional
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="w-3/4 sm:w-fit bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group px-6 py-3 text-sm sm:text-lg"
              onClick={() => scrollToSection('booking')}
            >
              Book Appointment
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              className="w-3/4 sm:w-fit bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 text-sm sm:text-lg"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;