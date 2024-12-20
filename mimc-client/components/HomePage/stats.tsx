"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Spacer } from "@nextui-org/react";

import { cinzel } from "@/config/fonts";

const Stats: React.FC = () => {
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
    hidden: (direction: string) => ({
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

  interface StatCircleProps {
    start: number;
    end: number;
    suffix: string;
    label: string;
    imgSrc: string;
    direction: string;
    speed: number;
  }

  const StatCircle: React.FC<StatCircleProps> = ({
    start,
    end,
    suffix,
    label,
    imgSrc,
    direction,
    speed,
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger only once when visible

    return (
      <motion.div
        ref={ref}
        className="relative w-80 h-80 rounded-full border-5 border-[#A9DA88] stat-circle hover:scale-105 hover:shadow-lg transition-all duration-300"
        custom={direction}
        variants={circleVariants}
        transition={{ duration: speed }}
      >
        <img
          alt={label}
          className="w-full h-full object-cover"
          loading="lazy"
          src={imgSrc}
        />
        <div className="absolute inset-0 bg-[#570326]/70 flex flex-col items-center justify-center text-center px-4">
          <p className="font-extrabold text-5xl md:text-6xl leading-tight text-[#F0FFC9]">
            {isInView ? (
              <CountUp duration={speed} end={end} start={start} suffix={suffix} />
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
      initial="hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #570326 2%, transparent 30%, transparent 70%, #570326 100%),
          url('/imgs/stats/bg.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
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
            <h1 className={cinzel.className}>MIMC IN NUMBERS</h1>
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
            direction="left"
            end={35}
            imgSrc="/imgs/stats/stat_1.jpg"
            label="ATTENDANCE GROWTH"
            start={0}
            suffix="%"
            speed={7}
          />

          {/* Circle 2 */}
          <StatCircle
            direction="center"
            end={50000}
            imgSrc="/imgs/stats/stat_2.jpg"
            label="SOCIAL MEDIA REACH"
            start={0}
            suffix="+"
            speed={5}
          />

          {/* Circle 3 */}
          <StatCircle
            direction="right"
            end={18}
            imgSrc="/imgs/stats/stat_3.jpg"
            label="MSA PARTNERS"
            start={0}
            suffix={""}
            speed={7}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Stats;
