"use client";

import { motion } from "framer-motion";

export default function SponsorsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className=""
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true }}
      whileInView="visible"
    >
      {/* Section Title */}
      <motion.h1
        className="text-6xl md:text-7xl font-bold mb-4 text-center relative group px-4 md:px-8"
        variants={itemVariants}
      >
        <span className="inline-block relative">
          SPONSORS
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-sm md:text-base font-medium text-[#F0FFC9] opacity-80 mb-8 text-justify px-4 md:px-8"
        variants={itemVariants}
      >
        JazakumAllah khair to our incredible sponsors for their generous support
        and unwavering commitment to making MIMC 2025 a success. Your
        contributions play a vital role in running this event, fostering
        meaningful connections, and empowering the community. We are deeply
        grateful for your partnership and the positive impact you help us
        create. Together, we are building a brighter future.
      </motion.p>

      <motion.div
        className=""
        style={{
          backgroundImage: `
            linear-gradient(to bottom, #570326 5%,rgba(87, 3, 38, 0.85) 30%, rgba(87, 3, 38, 0.85) 95%, #570326 100%), 
            url('imgs/sponsors/bg-sponsors.png')
          `,
          backgroundSize: "cover", // Keep the image filling the container
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "1000px",
        }}
      >
        {/* <motion.p
          className="text-sm md:text-base font-medium text-[#F0FFC9] opacity-80 mb-8 text-justify"
        >
          temp
        </motion.p> */}
      </motion.div>
    </motion.div>
  );
}
