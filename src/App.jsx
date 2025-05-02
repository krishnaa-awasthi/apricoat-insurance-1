import React, { useContext } from 'react';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Service';
import Testimonials from './Pages/Testimonial';
import Contact from './Pages/Contact';
import Members from './Pages/Members';
import { ScrollProvider } from './Context/ScrollContext';
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const { homeRef, aboutRef, serviceRef, testimonialRef, contactRef } = useContext(ScrollProvider);
  const location = useLocation();

  if (location.pathname === "/apricoat-insurance/team") {
    return (
      <div className="min-h-screen w-full bg-white text-black p-4 md:p-8">
        <Members />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white text-black overflow-x-hidden">
      <Nav />
      <main className="flex flex-col gap-16 md:gap-24 lg:gap-32 px-4 sm:px-6 md:px-12">
        <Home refProp={homeRef} />
        <About refProp={aboutRef} />
        <Services refProp={serviceRef} />
        <Testimonials refProp={testimonialRef} />
        {/* <Contact refProp={contactRef}/> */}
      </main>
    </div>
  );
};

export default App;
