"use client";

import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Card, CardHeader, Spacer, Image } from "@nextui-org/react";
import { useRef } from "react";
import React, { useState, useEffect } from "react";

import { cinzel } from "@/config/fonts";

const Intro: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Trigger animation only once

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft()); // Initialize with the current countdown
  const [hydrated, setHydrated] = useState(false); // Track hydration status

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

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full py-10 text-white"
      initial="hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #570326 20%, transparent 30%, transparent 80%, #570326 100%), 
          url('/imgs/about/bg.png')
        `,
        backgroundSize: "cover", // Keep the image filling the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={fadeInVariants}
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-8 relative z-10">
        {/* <motion.p
          className={`${cinzel.className} text-4xl font-bold italic text-[#F0FFC9] mb-4`}
          variants={textVariants}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Truth and Falsehood
        </motion.p> */}

        {/* Countdown Timer */}
        {hydrated && ( // Render only after hydration
          <motion.div
            className="flex flex-col items-center text-[#F0FFC9] font-bold text-xl md:text-3xl pb-12"
            transition={{ duration: 1, delay: 0.8 }}
            variants={textVariants}
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
                <span className="text-4xl md:text-5xl">{timeLeft.minutes}</span>
                <span className="text-sm md:text-base">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl">{timeLeft.seconds}</span>
                <span className="text-sm md:text-base">Seconds</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Section Title */}
        <motion.h2
          animate={isInView ? "visible" : "hidden"}
          className="text-7xl font-bold mb-8 text-center relative group"
          initial="hidden"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <span className="inline-block relative">
            <h1 className={cinzel.className}>MIMC 2025?!</h1>
            {/* Underline Animation */}
            <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
          </span>
        </motion.h2>
        <Spacer y={2} />
        <motion.p
          animate={isInView ? "visible" : "hidden"}
          className="text-base md:text-lg mb-4 text-justify"
          initial="hidden"
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={fadeInVariants}
        >
          <strong className="text-[#F0FFC9]">
            MIMC is back to McMaster University this February!
          </strong>{" "}
          A 2-day convention of lectures, activities, competitions, bazaar,
          vendor, and more! Join us alongside over{" "}
          <strong className="text-[#F0FFC9]">1,000 attendees</strong> from all
          across Ontario to embrace the meaning of this year’s theme{" "}
          <strong className="text-[#F0FFC9] italic">
            Truth and Falsehood!
          </strong>{" "}
          Expect to leave inspired, connected, and slightly tired...
        </motion.p>

        {/* 1x3 Grid of Cards */}
        <motion.div
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          transition={{ duration: 0.8, delay: 0.6, staggerChildren: 0.2 }}
          variants={fadeInVariants}
        >
          {/* Card 1 */}
          <motion.div
            className="aspect-w-4 aspect-h-3"
            variants={fadeInVariants}
          >
            <Card
              isHoverable
              isPressable
              className="relative bg-gradient-to-br from-[#6a0336] to-[#450222]"
              style={{
                boxShadow: "0 0 25px 5px rgba(87, 3, 38, 0.4)",
              }}
            >
              <CardHeader className="absolute z-20 top-2 left-2 flex-col !items-start text-left">
                <p className="text-tiny text-[#F0FFC9]/70 uppercase font-bold">
                  Knowledge & Reflection
                </p>
                <h4 className="text-[white] text-small font-medium text-large">
                  Learn from impactful speakers and enrich your faith.
                </h4>
              </CardHeader>
              <Image
                isBlurred
                isZoomed
                removeWrapper
                alt="About Image 2"
                className="object-cover"
                src="/imgs/about/about_2.jpg"
              />
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="aspect-w-4 aspect-h-3"
            variants={fadeInVariants}
          >
            <Card
              isHoverable
              isPressable
              className="relative bg-gradient-to-br from-[#6a0336] to-[#450222]"
              style={{
                boxShadow: "0 0 25px 5px rgba(87, 3, 38, 0.4)", // Glow effect with the primary color
              }}
            >
              <CardHeader className="absolute z-20 top-2 left-2 flex-col !items-start text-left">
                <p className="text-tiny text-[#F0FFC9]/70 uppercase font-bold">
                  Building Unity
                </p>
                <h4 className="text-white text-small font-medium text-large">
                  Foster bonds of brotherhood and sisterhood.
                </h4>
              </CardHeader>
              <Image
                isBlurred
                isZoomed
                removeWrapper
                alt="About Image 1"
                className="object-cover"
                src="/imgs/about/about_1.jpg"
              />
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="aspect-w-4 aspect-h-3"
            variants={fadeInVariants}
          >
            <Card
              isHoverable
              isPressable
              className="relative bg-gradient-to-br from-[#6a0336] to-[#450222]"
              style={{
                boxShadow: "0 0 25px 5px rgba(87, 3, 38, 0.4)",
              }}
            >
              <CardHeader className="absolute z-20 top-2 left-2 flex-col !items-start text-left">
                <p className="text-tiny text-[#F0FFC9]/70 uppercase font-bold">
                  Serving the Ummah
                </p>
                <h4 className="text-white text-small font-medium text-large">
                  Highlight efforts to uplift the Muslim community.
                </h4>
              </CardHeader>
              <Image
                isBlurred
                isZoomed
                removeWrapper
                alt="About Image 3"
                className="object-cover"
                src="/imgs/about/about_3.jpg"
              />
            </Card>
          </motion.div>
        </motion.div>
        <Spacer y={10} />

        {/* Qiyām Accommodations Link */}
        {/* <p className="text-lg mb-4 text-center">
          <strong className="text-[#F0FFC9]">Long travels?</strong> Sign-up for
          Qiyām Accommodations{" "}
          <Link
            className="text-[#F0FFC9] font-bold underline"
            href="/qiyam-accommodations"
            isExternal={false} // Set to true if the link points to an external website
            underline="hover"
          >
            here
          </Link>
        </p> */}
      </div>
    </motion.section>
  );
};

export default Intro;
