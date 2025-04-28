import React from 'react'

const Contact = ({refProp}) => {
  return (
    <div ref={refProp} className='h-screen  w-screen bg-blue-600 flex justify-center items-center p-20'>
        <div className='w-[95%] h-[80%] bg-red-300'></div>
    </div>
  )
}

export default Contact