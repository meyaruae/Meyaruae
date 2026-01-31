import React from 'react';

const AboutUs: React.FC = () => {

  const missionPoints = [
    'We deliver rapid, expert kitchen maintenance solutions to ensure your business stays operational and efficient.',
    'We strive to be your trusted partner through transparent pricing and unmatched technical service excellence.',
    'Our goal is providing proactive service that extends equipment life while maintaining the highest safety standards.',
  ];

  return (
    <section id="about" className="py-10 sm:py-12 lg:py-16 xl:py-20 bg-background dark:bg-background-dark">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* Left Column - Content */}
          <div className="order-1 space-y-8 sm:space-y-10">
            {/* Header */}
            <div>
              <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-3 sm:mb-4">
                About Us
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground dark:text-foreground-dark mb-4 leading-tight text-left">
                At Meyar Kitchen Maintenance & Service, we understand that the kitchen is the heart of every successful hospitality and food service business.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground-dark leading-relaxed">
                When your equipment fails, your business pauses. That's why we are dedicated to providing fast, professional, and reliable maintenance solutions that keep your kitchen running at peak performance.
              </p>
            </div>

            {/* Who are we */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground-dark mb-2 text-left">
                Who are we
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground-dark leading-relaxed">
                Meyar is a specialized team of certified technicians and service experts committed to the upkeep of commercial kitchens. From high-end restaurants and hotels to industrial cafeterias, we deliver comprehensive repair and preventive maintenance services tailored to the unique needs of the food service industry.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-muted dark:bg-muted-dark p-4 sm:p-5 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground-dark mb-3 text-left">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground-dark leading-relaxed">
                To be the leading authority in kitchen maintenance, recognized for setting the industry benchmark in technical innovation, reliability, and service excellence. We envision a future where every commercial kitchen we serve operates with zero downtime, powered by our proactive care and expert support.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-muted dark:bg-muted-dark p-4 sm:p-5 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground-dark mb-3 text-left">
                Our Mission
              </h3>
              <ol className="space-y-2.5 sm:space-y-3 list-none">
                {missionPoints.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground-dark leading-relaxed pt-0.5">
                      {point}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Our values */}
            <div className='bg-muted dark:bg-muted-dark p-4 sm:p-5 rounded-xl'>
              <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground-dark mb-2 text-left">
                Our values
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground-dark leading-relaxed">
                Our values center on integrity, technical excellence, and rapid service to ensure your kitchen's success.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-2 lg:sticky lg:top-24">
            <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional kitchen maintenance"
                className="w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
