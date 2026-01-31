import React from 'react';
import { Card, CardContent } from './ui/card';
import { Wrench, Calendar, Shield } from 'lucide-react';

const plans = [
  { icon: Wrench, title: 'One-Time Repair', description: 'Ideal for quick fixes' },
  { icon: Calendar, title: 'Monthly Maintenance', description: 'Regular inspections and tune-ups' },
  { icon: Shield, title: 'Annual Contracts', description: 'Full coverage with priority support' }
];

const MaintenancePlans: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-background dark:bg-background-dark">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-4 sm:mb-6 lg:mb-8">
            Maintenance Plans
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground-dark mb-4 sm:mb-6 leading-tight text-center text-left">
            Maintenance Plans
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground dark:text-muted-foreground-dark max-w-3xl mx-auto leading-relaxed px-4 text-center text-left">
            Our maintenance packages are designed to keep your kitchen in top shape all year round
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="text-center bg-card dark:bg-card-dark border-border dark:border-border-dark hover:shadow-lg dark:hover:shadow-dark-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <plan.icon size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className={`text-base sm:text-xl lg:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-3 sm:mb-4 text-left`}>
                  {plan.title}
                </h3>
                <p className={`text-xs sm:text-base lg:text-lg text-muted-foreground dark:text-muted-foreground-dark leading-relaxed text-left`}>
                  {plan.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenancePlans;
