"use client";

import { motion } from "framer-motion";
import { cinzel } from "@/config/fonts";

export default function BazaarPage() {
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

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const vendors = [
    {
      logo: "/imgs/logo1.png",
      name: "Vendor 1",
      instagram: "https://instagram.com/vendor1",
      website: "https://vendor1.com",
      backgroundImage: "/imgs/vendor-bg1.jpg", // Replace with actual paths
    },
    {
      logo: "/imgs/logo2.png",
      name: "Vendor 2",
      instagram: "https://instagram.com/vendor2",
      website: "https://vendor2.com",
      backgroundImage: "/imgs/vendor-bg2.jpg", // Replace with actual paths
    },
    {
      logo: "/imgs/logo3.png",
      name: "Vendor 3",
      instagram: "https://instagram.com/vendor3",
      website: "https://vendor3.com",
      backgroundImage: "/imgs/vendor-bg3.jpg", // Replace with actual paths
    },
    {
      logo: "/imgs/logo4.png",
      name: "Vendor 4",
      instagram: "https://instagram.com/vendor4",
      website: "https://vendor4.com",
      backgroundImage: "/imgs/vendor-bg4.jpg", // Replace with actual paths
    },
    {
      logo: "/imgs/logo3.png",
      name: "Vendor 3",
      instagram: "https://instagram.com/vendor3",
      website: "https://vendor3.com",
      backgroundImage: "/imgs/vendor-bg3.jpg", // Replace with actual paths
    },
    {
      logo: "/imgs/logo4.png",
      name: "Vendor 4",
      instagram: "https://instagram.com/vendor4",
      website: "https://vendor4.com",
      backgroundImage: "/imgs/vendor-bg4.jpg", // Replace with actual paths
    },
    {
      logo: "/imgs/logo3.png",
      name: "Vendor 3",
      instagram: "https://instagram.com/vendor3",
      website: "https://vendor3.com",
      backgroundImage: "/imgs/vendor-bg3.jpg", // Replace with actual paths
    },
    {
      logo: "/imgs/logo4.png",
      name: "Vendor 4",
      instagram: "https://instagram.com/vendor4",
      website: "https://vendor4.com",
      backgroundImage: "/imgs/vendor-bg4.jpg", // Replace with actual paths
    },
    {
      logo: "/imgs/logo3.png",
      name: "Vendor 3",
      instagram: "https://instagram.com/vendor3",
      website: "https://vendor3.com",
      backgroundImage: "/imgs/vendor-bg3.jpg", // Replace with actual paths
    },
    {
      logo: "/imgs/logo4.png",
      name: "Vendor 4",
      instagram: "https://instagram.com/vendor4",
      website: "https://vendor4.com",
      backgroundImage: "/imgs/vendor-bg4.jpg", // Replace with actual paths
    },
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <motion.h3
        className={`${cinzel.className} text-xl font-bold text-center`}
        variants={titleVariants}
      >
        BROWSE OUR
      </motion.h3>
      <motion.h1
        className={`${cinzel.className} text-6xl md:text-7xl font-bold mb-8 text-center relative group`}
        variants={titleVariants}
      >
        <span className="inline-block relative">
          BAZAAR
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h1>

      {/* Vendor Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8"
        variants={containerVariants}
      >
        {vendors.map((vendor, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center justify-center bg-cover bg-center rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${vendor.backgroundImage})`,
            }}
            variants={itemVariants}
          >
            {/* Vendor Content */}
            <div className="p-6 text-center text-white">
              {/* Vendor Logo */}
              <div className="w-16 h-16 mb-2 mx-auto bg-white rounded-full flex items-center justify-center">
                <img
                  src={vendor.logo}
                  alt={`${vendor.name} Logo`}
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>
              {/* Vendor Name */}
              <h3 className="text-xl font-bold mb-5">{vendor.name}</h3>
              {/* Social Links */}
              <div className="flex items-center justify-center space-x-4">
                <a
                  href={vendor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0FFC9] hover:text-[#A9DA88] transition-colors"
                >
                  <img
                    src="/imgs/instagram-icon.png" // Replace with actual path
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href={vendor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0FFC9] underline hover:text-[#A9DA88] transition-colors"
                >
                  Website
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
