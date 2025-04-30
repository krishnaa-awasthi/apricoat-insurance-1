import React, { useState , createContext } from 'react'

export const  ServicesProvider = createContext();

const ServiceContext = (props) => {
    const [service ,setServiceData] = useState([
        {
          title: "Life Insurances",
          description: "Comprehensive coverage for vessels, cargo, and marine operations protecting against risks at sea.",
          icon: "🚢", // Replace with icon components if needed
        },
        {
          title: "General Insurance",
          description: "Protection for your property and assets against fire damage, ensuring financial security.",
          icon: "🔥",
        },
        {
          title: "Health Insurance",
          description: "Safeguard your commercial or residential property against various risks and damages.",
          icon: "🏢",
        },
        {
          title: "Mutual Funds",
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
