import React from 'react';
import { Card, CardContent } from './ui/card';
import { UserCheck, Clock, DollarSign, Phone, Heart } from 'lucide-react';

const promises = [
  { icon: UserCheck, title: 'Experienced Technicians', description: 'Skilled professionals who know kitchens inside out' },
  { icon: Clock, title: 'Fast & Reliable Service', description: 'We value your time and respond quickly' },
  { icon: DollarSign, title: 'Affordable Pricing', description: 'Quality service that fits your budget' },
  { icon: Phone, title: 'Availability', description: "Emergencies don't wait, and neither do we 24/7" },
  { icon: Heart, title: 'Customer Satisfaction Guaranteed', description: "We don't stop until you're happy" }
];

const OurPromise: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-muted dark:bg-muted-dark">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-4 sm:mb-6 lg:mb-8">
            Our Promise
          </div>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground dark:text-muted-foreground-dark max-w-3xl mx-auto leading-relaxed px-4 text-center">
            We are committed to delivering excellence in every service we provide
          </p>
        </div>
        
        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {promises.slice(0, 3).map((promise, index) => (
            <Card key={index} className="text-center bg-card dark:bg-card-dark border-border dark:border-border-dark hover:shadow-xl dark:hover:shadow-dark-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <promise.icon size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className={`text-base sm:text-xl lg:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-3 sm:mb-4 text-center`}>
                  {promise.title}
                </h3>
                <p className={`text-xs sm:text-base lg:text-lg text-muted-foreground dark:text-muted-foreground-dark leading-relaxed text-center`}>
                  {promise.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {promises.slice(3, 5).map((promise, index) => (
            <Card key={index + 3} className="text-center bg-card dark:bg-card-dark border-border dark:border-border-dark hover:shadow-xl dark:hover:shadow-dark-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <promise.icon size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className={`text-base sm:text-xl lg:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-3 sm:mb-4 text-center`}>
                  {promise.title}
                </h3>
                <p className={`text-xs sm:text-base lg:text-lg text-muted-foreground dark:text-muted-foreground-dark leading-relaxed text-center`}>
                  {promise.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPromise;