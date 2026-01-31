import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-background dark:bg-background-dark">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-1">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
              About Us
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground-dark mb-4 sm:mb-6 leading-tight text-left">
              At Meyar, we believe the kitchen is the heart of every home and business
            </h2>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground dark:text-muted-foreground-dark text-left">
              <p className="text-sm sm:text-lg leading-relaxed">
                It's where families gather, meals are prepared, and memories are made.
              </p>
              <p className="text-sm sm:text-lg leading-relaxed">
                That's why we are dedicated to provide professional, and affordable kitchen maintenance.
              </p>
              <div className="bg-muted dark:bg-muted-dark p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-xl font-semibold text-foreground dark:text-foreground-dark mb-3 sm:mb-4 text-left">Our Mission is Simple</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-baseline gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-primary dark:bg-primary-foreground rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-base leading-relaxed">To keep your kitchen running smoothly</span>
                  </li>
                  <li className="flex items-baseline gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-primary dark:bg-primary-foreground rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-base leading-relaxed">To extend the life of your appliances and fittings</span>
                  </li>
                  <li className="flex items-baseline gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-primary dark:bg-primary-foreground rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-base leading-relaxed">To save you time, money, and stress</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm sm:text-lg leading-relaxed">
                Whether it's a one-time emergency fix or a long-term maintenance plan, our skilled team is ready to serve you with expertise and care.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional kitchen maintenance"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
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