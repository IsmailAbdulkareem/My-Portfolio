import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-black flex flex-col"
    >
      <Navbar />
      <div className="container mx-auto flex flex-col lg:flex-row items-center h-[calc(100vh-60px)]">
        {/* Left section with image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          {/* Image with blue blurred border */}
          <img
            src="/ismail.png"  // Make sure the path to your image is correct
            alt="Ismail"
            className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full object-none"
            style={{
              boxShadow: "0 0 40px 10px rgba(0, 123, 255, 0.6)",  // Glowing blue effect
            }}
          />
        </div>

        {/* Text section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center text-center lg:text-left text-3xl sm:text-5xl font-bold leading-tight px-4 lg:px-0">
          <div>
            <p className="fade-in text-blue-500" style={{ animationDelay: "0.2s" }}>I'm</p>
            <p className="fade-in text-green-500" style={{ animationDelay: "0.4s" }}>Ismail</p>
            <p className="fade-in text-purple-500" style={{ animationDelay: "0.6s" }}>Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
