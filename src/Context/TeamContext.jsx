import React, { createContext, useState } from 'react';

export const TeamProvider = createContext();
const TeamContext = ({children}) => {
    const [teamMembers , setteamMembers] = useState([
        {
            id: 1,
            name: "Mayank Saxena",
            role: "Managing Director & Principal Officer",
            description: "As the Managing Director and Principal Officer of Apricoat Insurance, Mayank Saxena brings visionary leadership and deep industry expertise to the organization. He oversees strategic planning, regulatory compliance, and overall business growth. His commitment to excellence and client-centric values drives the company's mission to provide reliable and innovative insurance solutions, especially in the marine and fire sectors.",
            // image: "https://via.placeholder.com/150"
          },
          {
            id: 2,
            name: "Shaifali Saxena",
            role: "On Board Director",
            description: "Shaifali leads the onboarding operations at Apricoat Insurance, ensuring a smooth and seamless experience for every new client and employee. With a sharp focus on efficiency and personalization, she ensures that all stakeholders are well-informed, well-prepared, and confident in their journey with us from day one.",
            image: "https://via.placeholder.com/150"
          },
          {
            id: 3,
            name: "Pratyush Mishra",
            role: "Business Development Executive (BDE)",
            description: "Pratyush plays a vital role in expanding Apricoat Insurance’s reach by building strategic partnerships and identifying new growth opportunities. He is the driving force behind client engagement and market development, ensuring our services continually meet the evolving needs of customers.",
            // image: "https://via.placeholder.com/150"
          },
          {
            id: 4,
            name: "Our Associates",
            role: "Sales Person",
            description: "At Apricoat Insurance, our 14 dedicated associates form the backbone of our operations. With diverse expertise across underwriting, client servicing, claims processing, policy documentation, and support services, they work diligently to uphold our commitment to excellence. Each associate is trained to deliver prompt, accurate, and empathetic assistance, ensuring that our clients receive the best possible support at every stage of their insurance journey. Their professionalism and collaborative spirit drive our mission to build trust, security, and lasting relationships.",
            // image: "https://via.placelder.com/150"
          },
    ])
    
  return (
    <TeamProvider.Provider value = { [teamMembers , setteamMembers] }>
      {children}
    </TeamProvider.Provider>
  )
}

export default TeamContext