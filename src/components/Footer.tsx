import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for sticky header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const getWhatsAppUrl = (phoneNumber: string) => {
    const digits = phoneNumber.replace(/\D/g, '');
    return `https://wa.me/${digits}?text=Hello`;
  };

  const handleEmailClick = (email: string) => {
    window.open(`mailto:${email}`, '_self');
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/meyarkitchen', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/meyarkitchen', label: 'Instagram' }
  ];

  const quickLinks = [
    { label: 'Home', action: () => scrollToSection('home') },
    { label: 'About Us', action: () => scrollToSection('about') },
    { label: 'Services', action: () => scrollToSection('services') },
    { label: 'Book Now', action: () => scrollToSection('booking') }
  ];

  const services = [
    'Appliance Repair',
    'Plumbing Solutions',
    'Electrical & Lighting Work',
    'Ventilation & Hood Cleaning',
    'Cabinet & Countertop Repairs',
    'ACS',
    'Refrigerators',
    'Freezers',
    'Chillers Ovens',
    'Washing Machines Electrical',
    'AMC For Restaurant Kitchen and Laundry Machines',
    'Planned Preventative Maintenance',
    'Annual Maintenance Contracts',
    'Kitchen Equipment Maintenance',
    'Specialized HVAC Services',
    'Professional Plumbing Solutions'
  ];

  const mid = Math.ceil(services.length / 2);
  const servicesCol1 = services.slice(0, mid);
  const servicesCol2 = services.slice(mid);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24">
          {/* Responsive grid: 1 col mobile, 2 cols tablet, 5 cols desktop (Services spans 2 for two-column content) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-10 lg:gap-x-6 lg:gap-y-10 xl:gap-x-6 xl:gap-y-12 text-left">
            {/* Company Info */}
            <div className="min-w-0 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">MEYAR</h3>
              <p className="text-xs sm:text-sm lg:text-base text-primary-foreground/90 mb-4 sm:mb-6 leading-relaxed max-w-sm">
                Your trusted partner for professional kitchen maintenance solutions.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="min-w-0 lg:col-span-1">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-xs sm:text-sm lg:text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors py-1.5 text-left w-full rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services - two columns, gets more width on desktop */}
            <div className="min-w-0 lg:col-span-2">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6">Our Services</h4>
              <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-2 sm:gap-y-2.5 lg:gap-y-3">
                <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3 min-w-0">
                  {servicesCol1.map((service, index) => (
                    <li key={index} className="text-xs sm:text-sm lg:text-base text-primary-foreground/90 break-words leading-snug">
                      {service}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3 min-w-0">
                  {servicesCol2.map((service, index) => (
                    <li key={index} className="text-xs sm:text-sm lg:text-base text-primary-foreground/90 break-words leading-snug">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="min-w-0 lg:col-span-1">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 lg:mb-6">Contact Info</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3 min-w-0">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 w-[18px] h-[18px] sm:w-5 sm:h-5" aria-hidden />
                  <div className="text-xs sm:text-sm lg:text-base text-primary-foreground/90 leading-relaxed break-words min-w-0">
                    <span className="block">Mafraq industrial area</span>
                    <span className="block">Abudhabi UAE</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <a
                    href={getWhatsAppUrl('+971545730050')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 w-full text-left py-2 rounded hover:opacity-90 transition-opacity min-h-[44px] sm:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
                  >
                    <Phone size={18} className="flex-shrink-0 w-[18px] h-[18px] sm:w-5 sm:h-5" aria-hidden />
                    <span className="text-xs sm:text-sm lg:text-base text-primary-foreground/90 break-all">+971-545730050</span>
                  </a>
                  <a
                    href={getWhatsAppUrl('+971 55 445 6700')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 w-full text-left py-2 rounded hover:opacity-90 transition-opacity min-h-[44px] sm:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
                  >
                    <Phone size={18} className="flex-shrink-0 w-[18px] h-[18px] sm:w-5 sm:h-5" aria-hidden />
                    <span className="text-xs sm:text-sm lg:text-base text-primary-foreground/90 break-all">+971 55 445 6700</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleEmailClick('service@meyaruae.com')}
                    className="flex items-center gap-2 sm:gap-3 w-full text-left py-2 rounded hover:opacity-90 transition-opacity min-h-[44px] sm:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
                  >
                    <Mail size={18} className="flex-shrink-0 w-[18px] h-[18px] sm:w-5 sm:h-5" aria-hidden />
                    <span className="text-xs sm:text-sm lg:text-base text-primary-foreground/90 break-all">service@meyaruae.com</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEmailClick('Vidyuth@meyaruae.com')}
                    className="flex items-center gap-2 sm:gap-3 w-full text-left py-2 rounded hover:opacity-90 transition-opacity min-h-[44px] sm:min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
                  >
                    <Mail size={18} className="flex-shrink-0 w-[18px] h-[18px] sm:w-5 sm:h-5" aria-hidden />
                    <span className="text-xs sm:text-sm lg:text-base text-primary-foreground/90 break-all">Vidyuth@meyaruae.com</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="py-6 sm:py-8 lg:py-10">
            <div className="text-center text-xs sm:text-sm lg:text-base text-primary-foreground/90">
              © {new Date().getFullYear()} MEYAR. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;