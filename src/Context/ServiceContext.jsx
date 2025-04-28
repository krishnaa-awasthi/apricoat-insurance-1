import React, { useState , createContext } from 'react'

export const  ServicesProvider = createContext();

const ServiceContext = (props) => {
    const [service ,setServiceData] = useState([
        {
          title: "Marine Insurance",
          description: "Comprehensive coverage for vessels, cargo, and marine operations protecting against risks at sea.",
          icon: "🚢", // Replace with icon components if needed
        },
        {
          title: "Fire Insurance",
          description: "Protection for your property and assets against fire damage, ensuring financial security.",
          icon: "🔥",
        },
        {
          title: "Property Insurance",
          description: "Safeguard your commercial or residential property against various risks and damages.",
          icon: "🏢",
        },
        {
          title: "Business Insurance",
          description: "Tailored insurance solutions for businesses of all sizes, protecting against operational risks.",
          icon: "📊",
        },
      ])
  return (
    <ServicesProvider.Provider value={{ service, setServiceData }}>
      {props.children}
    </ServicesProvider.Provider>
  )
}

export default ServiceContext