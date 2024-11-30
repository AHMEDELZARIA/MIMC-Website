"use client";

import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

export default function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a delay to apply the fade-in effect
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay in milliseconds
  }, []);

  return (
    <section
      className={`relative w-full h-screen overflow-hidden ${
        isVisible ? "fade-in" : "opacity-0"
      }`}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        src="/vids/background.mp4"
        style={{
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      {/* Overlay with Introductory Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-7xl font-bold mb-4">MIMC 2025</h1>
          <p className="text-lg md:text-xl">Truth and Falsehood</p>
        </div>
      </div>
    </section>
  );
}
