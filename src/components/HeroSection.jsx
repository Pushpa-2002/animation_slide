import React, { forwardRef, useEffect, useState } from "react";
import "../styles/HeroSection.css";
import Image from "next/image";

const HeroSection = forwardRef(({ loaded, scrollEndRef }, ref) => {
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
    <section 
      ref={ref} 
      className="hero_full_section"
    >
      {/* Hero Content */}
      <div
        className={`hero_section h-[100vh] w-full ${
          animate ? "animate-in" : ""
        }`}
      >
        <div className="hero_content flex flex-col justify-start items-center">
          <Image
            src="/images/logo_home@2x.png"
            alt="Logo"
            width={100}
            height={50}
            className="logo pt-10"
          />

          <div className="mt-8 text-center text-white">
            <h1 className="text-4xl font-bold">Welcome to Our App</h1>
            <p className="mt-4 text-lg">Experience the best mobile solution</p>
            {/* Optional Button */}
          </div>
        </div>
      </div>
          <div ref={scrollEndRef} style={{  height: "1px" }}></div>
      {/* Reviews */}
      <div className={`reviews px-4 bg-gray-100 ${animate ? "reviews-in" : ""}`}>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center justify-center">
          <img src="/images/logo1@2x.png" alt="Logo 1" className="mx-auto" />
          <img src="/images/logo2@2x.png" alt="Logo 2" className="mx-auto" />
          <img src="/images/logo3@2x.png" alt="Logo 3" className="mx-auto" />
          <img src="/images/logo4@2x.png" alt="Logo 4" className="mx-auto" />
          <img src="/images/logo5@2x.png" alt="Logo 5" className="mx-auto" />
          <img src="/images/logo6@2x.png" alt="Logo 6" className="mx-auto" />
        </div>
      
      </div>
    </section>
  );
});

export default HeroSection;
