"use client";

import { motion } from "framer-motion";
import { Spacer } from "@nextui-org/react";

import { cinzel } from "@/config/fonts";
import McMasterMap from "@/components/ItineraryMapPage/Map";

export default function ItineraryPage() {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

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
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/imgs/itinerary/bg-itinerary.jpg"
          alt="Itinerary Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className={`${cinzel.className} text-6xl md:text-7xl font-bold mb-8 text-center relative group`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
          >
            <span className="inline-block relative">
              ITINERARY
              <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
            </span>
          </motion.h1>
          {/* Grid displaying the two day itineraries */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img
                src="/imgs/itinerary/day-1.png"
                alt="Day 1 Itinerary"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img
                src="/imgs/itinerary/day-2.png"
                alt="Day 2 Itinerary"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
        <Spacer y={20} />
        <McMasterMap />
      </div>
    </div>
  );
}
