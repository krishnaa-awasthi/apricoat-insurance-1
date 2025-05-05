import React, { useEffect, useContext } from 'react';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Service';
import Testimonials from './Pages/Testimonial';
import Contact from './Pages/Contact';
import Members from './Pages/Members';
import { ScrollProvider } from './Context/ScrollContext';
import { useLocation } from 'react-router-dom';
import ServiceDetails from './Pages/ServiceDetails';
import ChildServicesPage from './Pages/ChildService';

const App = () => {
  const location = useLocation();
  const { homeRef, aboutRef, serviceRef, testimonialRef, contactRef } = useContext(ScrollProvider);

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  }, [location]);

  if (location.pathname === '/apricoat-insurance/team') {
    return (
      <div className="min-h-screen w-full bg-white text-black p-4 md:p-8">
        <Nav />
        <Members />
      </div>
    );
  }

  if(location.pathname === '/apricoat-insurance/allserivces') {
    return (
      <div className="min-h-screen w-full bg-white text-black p-4 md:p-8">
        <Nav />
        <ServiceDetails />
      </div>
    )
  }

  const ServicePath = location.pathname.split('/').slice(2).join('/');
  if (ServicePath) {
    return (
      <div className="min-h-screen w-full bg-white text-black p-4 md:p-8">
        <Nav />
        <ChildServicesPage />
      </div>
    );
  }
  
  

  return (
    <div className="w-full min-h-screen bg-white text-black overflow-x-hidden">
      <Nav />
      <main className="flex flex-col gap-16 md:gap-24 lg:gap-32 px-4 sm:px-6 md:px-12">
        <Home id='home' refProp={homeRef} />
        <About id='about' refProp={aboutRef}  />
        <Services id='service' refProp={serviceRef} />
        <Testimonials id='testimonial' refProp={testimonialRef} />
        <Contact id='contact' refProp={contactRef} />
      </main>
    </div>
  );
};

export default App;
