import React, { forwardRef, useEffect, useState } from "react";
import "../styles/HeroSection.css";

const HeroSection = forwardRef(({ loaded }, ref) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (loaded) {
      const timeout = setTimeout(() => {
        setAnimate(true); // trigger the class
      }, 50); // delay to ensure DOM paint first
      return () => clearTimeout(timeout);
    }
  }, [loaded]);

  return (
    <>
      <div
        
        className={`hero_section h-[100vh] w-full ${animate ? "animate-in" : ""}`}
      ></div>
  <div ref={ref}></div>
      <div className="reviews px-4 bg-gray-100">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center justify-center">
          <img src="/images/logo1@2x.png" alt="Logo 1" className="mx-auto" />
          <img src="/images/logo2@2x.png" alt="Logo 2" className="mx-auto" />
          <img src="/images/logo3@2x.png" alt="Logo 3" className="mx-auto" />
          <img src="/images/logo4@2x.png" alt="Logo 4" className="mx-auto" />
          <img src="/images/logo5@2x.png" alt="Logo 5" className="mx-auto" />
          <img src="/images/logo6@2x.png" alt="Logo 6" className="mx-auto" />
        </div>
      </div>
    </>
  );
});

export default HeroSection;
