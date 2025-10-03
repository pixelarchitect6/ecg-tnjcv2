import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ModernHeader from './components/ModernHeader';
import HeroSlider from './components/HeroSlider';
import WelcomeSection from './components/WelcomeSection';
import PresidentsMessage from './components/PresidentsMessage';
import Mission from './components/Mission';
import Ministries from './components/Ministries';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import LeadershipSlider from './components/LeadershipSlider';
import CampusSlider from './components/CampusSlider';
import MobileAppPromo from './components/MobileAppPromo';
import Give from './components/Give';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEOHead />
        <ModernHeader />
        <HeroSlider />
        <WelcomeSection />
        <PresidentsMessage />
        <Mission />
        <Ministries />
        <Events />
        <Testimonials />
        <LeadershipSlider />
        <CampusSlider />
        <MobileAppPromo />
        <Give />
        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;