"use client";

import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay to ensure smooth fade-in effect
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay in ms (adjust as needed)
  }, []);

  return (
    <>
      {/* Video Section */}
      <section
        className={`relative w-full h-screen overflow-hidden ${isVisible ? "fade-in" : "opacity-0"}`}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          src="vids/background.mp4"
          style={{
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        />

        {/* Overlay with Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 px-4 md:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
              Welcome to MIMC 2025
            </h1>
            <p className="text-lg md:text-xl">Our theme is idek...</p>
            <Button
              className="mt-8"
              color="success"
              radius="full"
              size="lg"
              variant="shadow"
            >
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section
        className={`bg-container w-full py-20 text-white ${isVisible ? "fade-in" : "opacity-0"}`}
      >
        <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About MIMC</h2>
          <p className="text-base md:text-lg mb-4 text-center">
            Join us at the McMaster Inter-MSA Convention, the ultimate gathering
            for Muslim students across Ontario!
          </p>
          <p className="text-base md:text-lg mb-4 text-center">
            Hosted by MacMSA, this convention brings together students for a day
            of inspiring talks, workshops, and meaningful connections. Celebrate
            unity, deepen your knowledge, and connect with like-minded
            individuals as we empower the next generation of Muslim leaders!
          </p>
        </div>
      </section>
    </>
  );
}