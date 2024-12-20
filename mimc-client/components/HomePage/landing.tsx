"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const Landing: React.FC = () => {
  const [, setTimeLeft] = useState(calculateTimeLeft()); // Initialize with the current countdown
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft()); // Initialize with the current countdown
  const [, setHydrated] = useState(false); // Track hydration status
  // const [hydrated, setHydrated] = useState(false); // Track hydration status

  // Function to calculate time remaining
  function calculateTimeLeft() {
    const targetDate = new Date("2025-02-15T09:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    // Mark component as hydrated
    setHydrated(true);

    // Start countdown timer
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.1, ease: "easeOut" },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.5, // Slight transparency for the video
      transition: { duration: 0.8, delay: 1.2, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true }}
      whileInView="visible"
    >
      {/* Overlay with Introductory Text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-50 px-4 md:px-8 z-10"
        variants={textVariants}
      >
        <div className="container mx-auto text-center">
          {/* <motion.h1
            className={`${cinzel.className} text-[10rem] font-bold text-shadow`}
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            MIMC 2025
          </motion.h1> */}

          {/* Responsive Image */}
          <Image
            alt="MIMC 2025"
            className="rounded-lg"
            height={545}
            layout="responsive"
            src="/imgs/mimc2025-fancy1.png"
            width={1998}
          />

          {/* <div style={{ maxHeight: '50%', width: '100%', position: 'relative' }}>
            <Image
              src="/imgs/mimc2025-fancy1.png"
              alt="MIMC 2025"
              layout="responsive"
              width={1998}
              height={545}
              className="rounded-lg"
              style={{ objectFit: 'contain', height: '80%' }}
            />
          </div> */}

          {/* <div className="relative w-full max-h-[500px]">
            <div className="relative w-full h-0 pb-[27.3%]">
              <Image
                src="/imgs/mimc2025-fancy1.png"
                alt="MIMC 2025"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div> */}

          {/* <motion.p
            className={`${cinzel.className} text-4xl font-bold italic text-[#F0FFC9] mb-4`}
            variants={textVariants}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Truth and Falsehood
          </motion.p> */}

          {/* Countdown Timer */}
          {/* {hydrated && ( // Render only after hydration
            <motion.div
              className="flex flex-col items-center text-[#F0FFC9] font-bold text-xl md:text-3xl"
              variants={textVariants}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl">{timeLeft.days}</span>
                  <span className="text-sm md:text-base">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl">{timeLeft.hours}</span>
                  <span className="text-sm md:text-base">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-sm md:text-base">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-sm md:text-base">Seconds</span>
                </div>
              </div>
            </motion.div>
          )} */}
        </div>
      </motion.div>

      {/* Video Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial="hidden"
        variants={videoVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/home-background.mp4?alt=media&token=360e304f-1161-445c-8ddb-3f0605e7648f"
          style={{
            maskImage:
              "linear-gradient(to bottom, #570326 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #570326 60%, transparent 100%)",
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Landing;
