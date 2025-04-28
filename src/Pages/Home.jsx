import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = ({refProp}) => {
  return (
    <div ref={refProp} className='w-screen h-screen bg-[url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop")] bg-cover'>
      <div className="w-full h-full flex flex-col justify-center p-20 bg-blue-500/60">
        <h1 className="text-8xl font-bold text-white pb-5">
          <TypeAnimation
            sequence={["Apricot Insurance", 3000, "", 1000]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </h1>
        <h2 className="text-4xl font-bold text-white pb-5">
          Protect what matters
        </h2>
        <p className="text-xl font-semibold text-white pb-5 w-[40%]">
          Specialized insurance solutions for marine, fire, and more. Get peace
          of mind with Apricoat's comprehensive coverage options.
        </p>
        <button className="w-[10%] h-[5vh] bg-orange-500 text-white font-bold text-xl rounded-md hover:bg-orange-400 transition duration-300 ease-in-out">
          Get Quotes
        </button>
      </div>
    </div>
  );
};

export default Home;
