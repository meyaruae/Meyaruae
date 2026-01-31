import React from 'react';
import { Card, CardContent } from './ui/card';
import { Zap, CalendarCheck, Award, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Rapid Response',
    description: 'Fast repairs to minimize downtime and keep your kitchen running smoothly.',
  },
  {
    icon: CalendarCheck,
    title: 'Preventive Care',
    description: 'Proactive maintenance plans that extend equipment life and prevent costly breakdowns.',
  },
  {
    icon: Award,
    title: 'Expert Technicians',
    description: 'Certified specialists skilled in handling all major commercial brands with professional technical precision.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Compliance',
    description: 'Strict adherence to health and safety standards, ensuring a compliant and secure cooking environment.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-background dark:bg-background-dark">
      <div className="container px-4 sm:px-6">
        {/* Why Choose Us heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-4 sm:mb-6 lg:mb-8">
            Why Choose Us?
          </div>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground dark:text-muted-foreground-dark max-w-3xl mx-auto leading-relaxed px-4 text-center">
            Four pillars of service that set us apart
          </p>
        </div>

        {/* Four reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="text-center bg-card dark:bg-card-dark border-border dark:border-border-dark hover:shadow-xl dark:hover:shadow-dark-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <reason.icon size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-3 sm:mb-4 text-center">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-base lg:text-lg text-muted-foreground dark:text-muted-foreground-dark leading-relaxed text-center">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner With Excellence */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-4 sm:mb-6">
            Partner With Excellence
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground dark:text-muted-foreground-dark leading-relaxed">
            When you choose Meyar, you aren't just hiring a repair service—you're gaining a trusted partner invested in your success. We take pride in our integrity, clear communication, and passion for the culinary industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
