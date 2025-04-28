import React, { useContext } from 'react'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Service'
import Testimonials from './Pages/Testimonial'
import { ScrollProvider } from './Context/ScrollContext'
import Contact from './Pages/Contact'

const App = () => {
  const {homeRef, aboutRef, serviceRef, testimonialRef, contactRef} = useContext(ScrollProvider);
  return (
    <div className='w-screen h-screen relative'>
      <Nav/>
      <Home refProp = {homeRef} />
      <About refProp = {aboutRef}/>
      <Services refProp = {serviceRef}/>
      <Testimonials refProp={testimonialRef}/>
      {/* <Contact refProp={contactRef}/> */}
    </div>
  )
}

export default App