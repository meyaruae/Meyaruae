import React from 'react';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const handlePhoneClick = (number: string) => {
    window.open(`tel:${number.replace(/\s/g, '')}`, '_self');
  };

  const handleEmailClick = (email: string) => {
    window.open(`mailto:${email}`, '_self');
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', details: ['+971 55 445 6700', '+971 567 403 055'], subtitle: 'Available for service calls', type: 'phone' as const },
    { icon: Mail, title: 'Email', details: ['Vidyuth@meyaruae.com', 'Service@Meyaruae.com'], subtitle: "We'll respond within 24 hours", type: 'email' as const },
    { icon: MapPin, title: 'Address', details: ['Mafraq Industrial Area', 'Abudhabi', 'UAE'], subtitle: 'Visit us', type: 'address' as const }
  ];

  return (
   <section id="contact" className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-muted dark:bg-muted-dark">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
            Contact Us
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground-dark mb-4 sm:mb-6 leading-tight text-center text-left">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground dark:text-muted-foreground-dark max-w-3xl mx-auto leading-relaxed px-4 text-center text-left">
            Ready to get started? Contact us today for professional kitchen maintenance services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="text-center bg-card dark:bg-card-dark border-border dark:border-border-dark hover:shadow-lg dark:hover:shadow-dark-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <info.icon size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className={`text-base sm:text-xl lg:text-2xl font-semibold text-foreground dark:text-foreground-dark mb-3 sm:mb-4 text-left`}>
                  {info.title}
                </h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, detailIndex) => (
                    info.type === 'phone' ? (
                      <button key={detailIndex} onClick={() => handlePhoneClick(detail)} className="block text-xs sm:text-base text-muted-foreground dark:text-muted-foreground-dark text-left hover:text-primary dark:hover:text-primary cursor-pointer">
                        {detail}
                      </button>
                    ) : info.type === 'email' ? (
                      <button key={detailIndex} onClick={() => handleEmailClick(detail)} className="block text-xs sm:text-base text-muted-foreground dark:text-muted-foreground-dark text-left hover:text-primary dark:hover:text-primary cursor-pointer">
                        {detail}
                      </button>
                    ) : (
                      <p key={detailIndex} className={`text-xs sm:text-base text-muted-foreground dark:text-muted-foreground-dark text-left`}>
                        {detail}
                      </p>
                    )
                  ))}
                </div>
                <p className={`text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground-dark text-left`}>
                  {info.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;