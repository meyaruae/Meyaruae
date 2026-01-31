import React, { memo } from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle } from 'lucide-react';

const WE_PROVIDE_LIST = ['ACS', 'Refrigerators', 'Freezers', 'Chillers Ovens', 'Washing Machines Electrical', 'Plumbing', 'AMC For Restaurant Kitchen and Laundry Machines'];
const WHAT_WE_OFFER_LIST = ['Planned Preventative Maintenance', 'Annual Maintenance Contracts', 'Kitchen Equipment Maintenance', 'Specialized HVAC Services', 'Professional Plumbing Solutions'];

const SERVICE_DETAILS = [
  { title: 'Appliance Repair', description: 'Ovens, stoves, refrigerators, dishwashers, and more' },
  { title: 'Plumbing Solutions', description: 'Leak repairs, faucet installation, water connections' },
  { title: 'Electrical & Lighting Work', description: 'Wiring, lighting upgrades, safety checks' },
  { title: 'Ventilation & Hood Cleaning', description: 'Keeping your air clean and safe' },
  { title: 'Cabinet & Countertop Repairs', description: 'Restore functionality and style' }
];

const Services: React.FC = memo(() => {
  return (
    <section id="services" className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-background dark:bg-background-dark">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-4 sm:mb-6 lg:mb-8">
            Our Services
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground-dark mb-4 sm:mb-6 leading-tight text-center text-left">
            We cover everything your kitchen needs
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground dark:text-muted-foreground-dark max-w-3xl mx-auto leading-relaxed px-4 text-center text-left">
            No matter the size of the job, we bring the same level of dedication and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
          <Card className="bg-card dark:bg-card-dark border-border dark:border-border-dark">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-foreground-dark mb-4 sm:mb-6 uppercase tracking-wide">
                WE PROVIDE
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {WE_PROVIDE_LIST.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground dark:text-muted-foreground-dark text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card dark:bg-card-dark border-border dark:border-border-dark">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-foreground-dark mb-4 sm:mb-6 uppercase tracking-wide">
                WHAT WE OFFER?
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {WHAT_WE_OFFER_LIST.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground dark:text-muted-foreground-dark text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {SERVICE_DETAILS.map((service, index) => (
              <Card key={index} className="bg-card dark:bg-card-dark border-border dark:border-border-dark">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-sm sm:text-base font-semibold text-foreground dark:text-foreground-dark mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground-dark leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;
