"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Spacer } from "@nextui-org/react";

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const StatCircle = ({ start, end, suffix, label, imgSrc, direction }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger only once when visible

    return (
      <motion.div
        className="relative w-80 h-80 rounded-full border-5 border-[#A9DA88] stat-circle hover:scale-105 hover:shadow-lg transition-all duration-300"
        variants={circleVariants}
        custom={direction}
        ref={ref}
      >
        <img alt={label} className="w-full h-full object-cover" src={imgSrc} />
        <div className="absolute inset-0 bg-[#570326]/70 flex flex-col items-center justify-center text-center px-4">
          <p className="font-extrabold text-5xl md:text-6xl leading-tight text-[#F0FFC9]">
            {isInView ? (
              <CountUp start={start} end={end} duration={2} suffix={suffix} />
            ) : (
              start
            )}
          </p>
          <p className="font-medium text-xl text-[#F0FFC9]">{label}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      className="relative w-full text-white"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #570326 2%, transparent 30%, transparent 70%, #570326 100%),
          url('/imgs/stats/bg.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="container mx-auto flex flex-col items-center justify-center px-4 md:px-8 relative z-10"
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.h2
          className="text-6xl font-bold mb-8 text-center relative group"
          variants={containerVariants}
        >
          <span className="inline-block relative">
            MIMC IN NUMBERS
            <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
          </span>
        </motion.h2>

        <Spacer y={10} />

        {/* Circles Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-20 place-items-center"
          variants={containerVariants}
        >
          {/* Circle 1 */}
          <StatCircle
            start={-200}
            end={35}
            suffix="%"
            label="ATTENDANCE GROWTH"
            imgSrc="/imgs/stats/stat_1.jpg"
            direction="left"
          />

          {/* Circle 2 */}
          <StatCircle
            start={-50000}
            end={50000}
            suffix="+"
            label="SOCIAL MEDIA REACH"
            imgSrc="/imgs/stats/stat_2.jpg"
            direction="center"
          />

          {/* Circle 3 */}
          <StatCircle
            start={-200}
            end={14}
            suffix={""}
            label="MSA PARTNERS"
            imgSrc="/imgs/stats/stat_3.jpg"
            direction="right"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
