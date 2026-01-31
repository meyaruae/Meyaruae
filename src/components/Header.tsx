import React, { useState, useEffect, useCallback, memo } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for sticky header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  }, []);

  const handlePhoneClick = useCallback(() => {
    window.open('tel:+971554456700', '_self');
  }, []);

  const handleEmailClick = useCallback(() => {
    window.open('mailto:service@meyaruae.com', '_self');
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 sm:py-3">
        <div className="container">
          <div className="flex flex-row justify-between items-center gap-2 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
            <button 
              onClick={handlePhoneClick}
              className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity duration-75 cursor-pointer"
            >
              <Phone size={14} className="sm:w-4 sm:h-4" />
              <a href="https://wa.me/+971554456700?text=Hello" className="text-xs sm:text-sm lg:text-base">+971554456700</a>
            </button>
            <button 
              onClick={handleEmailClick}
              className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity duration-75 cursor-pointer"
            >
              <Mail size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm lg:text-base">service@meyaruae.com</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className={`sticky top-0 z-50 bg-background dark:bg-background-dark border-b border-border dark:border-border-dark transition-all duration-300 ${
        isScrolled ? 'shadow-md dark:shadow-dark-md' : ''
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div 
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection('home')}
            >
              MEYER
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              <button
                onClick={() => scrollToSection('home')}
                className="text-base xl:text-lg text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-base xl:text-lg text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-base xl:text-lg text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-base xl:text-lg text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-muted dark:bg-muted-dark hover:bg-muted-foreground/20 dark:hover:bg-white/10 transition-colors duration-75"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              
              {/* CTA Button */}
              <Button onClick={() => scrollToSection('booking')} className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-muted dark:bg-muted-dark hover:bg-muted-foreground/20 dark:hover:bg-white/10 transition-colors duration-75"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              
              <button
                className="p-2 rounded-lg bg-muted dark:bg-muted-dark hover:bg-muted-foreground/20 dark:hover:bg-white/10 transition-colors duration-75"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-background dark:bg-background-dark border-b border-border dark:border-border-dark shadow-lg z-50">
              {/* Mobile Header */}
              <div className="flex items-center justify-between h-16 px-4 border-b border-border dark:border-border-dark">
                <div 
                  className="text-xl font-bold text-primary cursor-pointer hover:opacity-80"
                  onClick={() => scrollToSection('home')}
                >
                  MEYER
                </div>
                <button
                  className="p-2 rounded-lg bg-muted dark:bg-muted-dark hover:bg-muted-foreground/20 dark:hover:bg-white/10 transition-colors duration-75"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Mobile Menu Content */}
              <div className="px-4 py-6 sm:py-8">
                <nav className="flex flex-col space-y-4 sm:space-y-6">
                  <button
                    onClick={() => scrollToSection('home')}
                    className={`text-lg sm:text-xl text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary transition-colors py-3 sm:py-4 font-medium text-left`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className={`text-lg sm:text-xl text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary transition-colors py-3 sm:py-4 font-medium text-left`}
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className={`text-lg sm:text-xl text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary transition-colors py-3 sm:py-4 font-medium text-left`}
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`text-lg sm:text-xl text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary transition-colors py-3 sm:py-4 font-medium text-left`}
                  >
                    Contact
                  </button>
                  <Button 
                    onClick={() => scrollToSection('booking')}
                    className="w-full mt-6 sm:mt-8 bg-primary hover:bg-primary/90 text-primary-foreground py-3 sm:py-4 text-base sm:text-lg"
                  >
                    Book Now
                  </Button>
                </nav>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
});

Header.displayName = 'Header';

export default Header;