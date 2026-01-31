import React, { useState, useCallback, memo } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Calendar, CheckCircle } from 'lucide-react';

const SERVICE_TYPE_OPTIONS = [
  // Service categories
  { value: 'applianceRepair', label: 'Appliance Repair' },
  { value: 'electricalWork', label: 'Electrical & Lighting Work' },
  { value: 'ventilationCleaning', label: 'Ventilation & Hood Cleaning' },
  { value: 'cabinetRepairs', label: 'Cabinet & Countertop Repairs' },
  // Equipment & services
  { value: 'acs', label: 'ACS' },
  { value: 'refrigerators', label: 'Refrigerators' },
  { value: 'freezers', label: 'Freezers' },
  { value: 'chillersOvens', label: 'Chillers Ovens' },
  { value: 'washingMachinesElectrical', label: 'Washing Machines Electrical' },
  { value: 'amcRestaurantKitchenLaundry', label: 'AMC For Restaurant Kitchen and Laundry Machines' },
  // Maintenance & contracts
  { value: 'plannedPreventativeMaintenance', label: 'Planned Preventative Maintenance' },
  { value: 'annualMaintenanceContracts', label: 'Annual Maintenance Contracts' },
  { value: 'kitchenEquipmentMaintenance', label: 'Kitchen Equipment Maintenance' },
  { value: 'specializedHvacServices', label: 'Specialized HVAC Services' },
  { value: 'professionalPlumbingSolutions', label: 'Professional Plumbing Solutions' }
];

const Booking: React.FC = memo(() => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setSubmitError(null);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'serviceType', 'preferredDate', 'preferredTime'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      setSubmitError('Please fill in all required fields.');
      return;
    }

    const scriptUrl = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      setSubmitError('Form submission is not configured. Please set REACT_APP_GOOGLE_SCRIPT_URL.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Use form-urlencoded so the request is sent without CORS preflight (Apps Script doesn't send CORS headers)
      const body = new URLSearchParams(
        Object.entries(formData).reduce((acc, [k, v]) => ({ ...acc, [k]: v ?? '' }), {} as Record<string, string>)
      ).toString();

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });

      // With no-cors we can't read the response; assume success if the request was sent
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        additionalNotes: ''
      });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setSubmitError('Failed to submit. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <section id="booking" className="py-6 sm:py-8 lg:py-12 xl:py-16 bg-background dark:bg-background-dark">
      <div className="relative">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
            Book Your Appointment
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground-dark mb-4 sm:mb-6 leading-tight text-center text-left">
            Book Your Appointment
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground dark:text-muted-foreground-dark max-w-3xl mx-auto leading-relaxed px-4 text-center text-left">
            Schedule a service call at your convenience
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl dark:shadow-dark-xl bg-card dark:bg-card-dark border-border dark:border-border-dark">
            <CardHeader className="text-center p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-2xl text-foreground dark:text-foreground-dark text-left">Service Request Form</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="fullName" className={`text-xs sm:text-base text-foreground dark:text-foreground-dark text-left`}>
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="bg-input dark:bg-input-dark border-border dark:border-border-dark text-foreground dark:text-foreground-dark h-10 sm:h-12 text-xs sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className={`text-xs sm:text-base text-foreground dark:text-foreground-dark text-left`}>
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="bg-input dark:bg-input-dark border-border dark:border-border-dark text-foreground dark:text-foreground-dark h-10 sm:h-12 text-xs sm:text-base"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="phone" className={`text-xs sm:text-base text-foreground dark:text-foreground-dark text-left`}>
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                      className="bg-input dark:bg-input-dark border-border dark:border-border-dark text-foreground dark:text-foreground-dark h-10 sm:h-12 text-xs sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceType" className={`text-xs sm:text-base text-foreground dark:text-foreground-dark text-left`}>
                      Service Type *
                    </Label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 sm:h-12 w-full rounded-md border border-border dark:border-border-dark bg-input dark:bg-input-dark px-3 py-2 text-xs sm:text-base text-foreground dark:text-foreground-dark ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:focus-visible:ring-ring-dark focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      {SERVICE_TYPE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="preferredDate" className={`text-xs sm:text-base text-foreground dark:text-foreground-dark text-left`}>
                      Preferred Date *
                    </Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="bg-input dark:bg-input-dark border-border dark:border-border-dark text-foreground dark:text-foreground-dark h-10 sm:h-12 text-xs sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime" className={`text-xs sm:text-base text-foreground dark:text-foreground-dark text-left`}>
                      Preferred Time *
                    </Label>
                    <Input
                      id="preferredTime"
                      name="preferredTime"
                      type="time"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="bg-input dark:bg-input-dark border-border dark:border-border-dark text-foreground dark:text-foreground-dark h-10 sm:h-12 text-xs sm:text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="additionalNotes" className={`text-xs sm:text-base text-foreground dark:text-foreground-dark text-left`}>
                    Additional Notes
                  </Label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Please provide any additional details about your service needs..."
                    rows={4}
                    className="bg-input dark:bg-input-dark border-border dark:border-border-dark text-foreground dark:text-foreground-dark text-xs sm:text-base"
                  />
                </div>
                
                {submitError && (
                  <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                    {submitError}
                  </p>
                )}
                {isSubmitted && (
                  <div className="rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-4 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">Thank you!</p>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Your service request has been successfully submitted. Our team will contact you shortly to confirm the details.
                      </p>
                    </div>
                  </div>
                )}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group h-12 sm:h-14 text-sm sm:text-lg"
                  disabled={isSubmitted || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Calendar className="mr-2 animate-pulse" size={18} />
                      Submitting...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className={`mr-2`} size={18} />
                      Booking Confirmed!
                    </>
                  ) : (
                    <>
                      <Calendar className={`mr-2`} size={18} />
                      Submit Booking
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </section>
  );
});

Booking.displayName = 'Booking';

export default Booking;