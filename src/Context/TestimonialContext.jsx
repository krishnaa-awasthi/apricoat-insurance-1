import React, { createContext, useContext, useState } from 'react';

export const TestimonialsProvider = createContext();


const TestimonialContext = (props) => {
    const [testimonials, setTestimonials] = useState([
        {
          name: 'Alice Johnson',
          role: 'CEO, BlueWave Corp',
          message: 'Apricoat provided exceptional service and made sure our marine insurance was customized.',
          rating: 5,
        },
        {
          name: 'Brian Carter',
          role: 'Owner, Carter Properties',
          message: 'They understood the risks my property faces and gave me peace of mind.',
          rating: 4,
        },
        {
          name: 'Sophia Patel',
          role: 'Manager, Ignite Logistics',
          message: 'Outstanding support. We rely on Apricoat for our business insurance every year.',
          rating: 5,
        },
        {
          name: 'Daniel Wu',
          role: 'Freelancer',
          message: 'Great communication and support.',
          rating: 4,
        },
      ]);

      const addTestimonial = (testimonial) => {
        setTestimonials((prev) => [testimonial, ...prev]);
      };
    
  return (
    <TestimonialsProvider.Provider value={{ testimonials, addTestimonial }}>
      {props.children}
    </TestimonialsProvider.Provider>
  )
}

export default TestimonialContext