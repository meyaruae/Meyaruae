import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles/globals.css';

// Lazy load components that are below the fold
const AboutUs = lazy(() => import('./components/AboutUs'));
const Services = lazy(() => import('./components/Services'));
const OurPromise = lazy(() => import('./components/OurPromise'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const MaintenancePlans = lazy(() => import('./components/MaintenancePlans'));
const Booking = lazy(() => import('./components/Booking'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<LoadingSpinner />}>
            <AboutUs />
            <WhyChooseUs />
            <OurPromise />
            <MaintenancePlans />
            <Services />
            <Booking />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
