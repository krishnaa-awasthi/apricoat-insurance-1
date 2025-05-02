import React, { useContext } from 'react';
import { TeamProvider } from '../Context/TeamContext';
import cn from 'classnames'


const Members = ({ isAlternate}) => {
  const [teamMembers] = useContext(TeamProvider);
  return (
    <div className='w-full min-h-screen bg-blue-50 p-10'>
      <h1 className='text-4xl font-bold text-center text-blue-900 mb-12'>
        Meet Our Team
      </h1>
      <p className='text-center text-gray-700  max-w-3xl mx-auto text-2xl font-semibold mb-10'>
        Our dedicated team of professionals is here to provide you with the best insurance solutions tailored to your needs. Each member brings a wealth of experience and expertise to ensure you receive the highest level of service and support.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto'>
        {teamMembers.map((member) => (
              <div
              className={cn(
                "bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg",
                isAlternate ? "border-l-4 border-blue-500" : "border-l-4 border-blue-700"
              )}
            >
              <div className="p-6">
                <h3
                  className={cn(
                    "text-xl font-semibold mb-1",
                    isAlternate ? "text-blue-500" : "text-blue-700"
                  )}
                > 
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
