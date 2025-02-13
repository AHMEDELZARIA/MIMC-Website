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
      {/* Page Background (applies to the entire page) */}
      <div className="absolute inset-0">
        <img
          src="/imgs/itinerary/bg-itinerary.jpg"
          alt="Itinerary Background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          {/* Itinerary Title */}
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

          {/* Itinerary Grid */}
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

          {/* New Campus Map Section */}
          <motion.section
            className="py-8 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className={`${cinzel.className} text-4xl md:text-5xl font-bold text-center mb-8`}
              variants={titleVariants}
            >
              CAMPUS MAP
            </motion.h2>
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={containerVariants}
            >
              <motion.div
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer mb-6"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                variants={itemVariants}
              >
                <img
                  src="/imgs/itinerary/map.png"
                  alt="Campus Map"
                  className="w-full max-w-4xl mx-auto h-auto object-cover"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/Peter+George+Centre+for+Living+and+Learning/@43.2654039,-79.9208391,17z/data=!3m1!4b1!4m6!3m5!1s0x882c9b6596106407:0xf256463687b966a8!8m2!3d43.2654!4d-79.9182642!16s%2Fg%2F11fd45zv1p?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D",
                      "_blank",
                    )
                  }
                  className="bg-[#570326] text-[#F0FFC9] font-bold py-2 px-4 mt-8 rounded hover:bg-[#450222] transition-colors"
                >
                  Open in Google Maps
                </button>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
