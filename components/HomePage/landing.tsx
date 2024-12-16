"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

export default function Landing() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("2025-02-18T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
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
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Overlay with Introductory Text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-50 px-4 md:px-8 z-10"
        variants={textVariants}
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-9xl font-bold mb-4"
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            MIMC 2025
          </motion.h1>
          <motion.p
            className="text-4xl font-bold italic text-[#F0FFC9] mb-4"
            variants={textVariants}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Truth and Falsehood
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            className="flex flex-col items-center text-[#F0FFC9] font-bold text-xl md:text-3xl"
            variants={textVariants}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl">{timeLeft.days || 0}</span>
                <span className="text-sm md:text-base">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl">{timeLeft.hours || 0}</span>
                <span className="text-sm md:text-base">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl">{timeLeft.minutes || 0}</span>
                <span className="text-sm md:text-base">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl">{timeLeft.seconds || 0}</span>
                <span className="text-sm md:text-base">Seconds</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={videoVariants}
      >
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="/vids/background.mp4"
          style={{
            maskImage: "linear-gradient(to bottom, #570326 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #570326 60%, transparent 100%)",
          }}
        />
      </motion.div>
    </motion.section>
  );
}
