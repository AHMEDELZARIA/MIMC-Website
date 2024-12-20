"use client";

import { motion } from "framer-motion";

import TicketPurchaseForm from "@/components/ticket-purchase-form";

import { cinzel } from "@/config/fonts";

export default function TicketPage() {
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
      animate="visible"
      className="relative w-full py-8 md:py-10"
      initial="hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #570326 10%,rgba(87, 3, 38, 0.85) 30%, rgba(87, 3, 38, 0.85) 90%, #570326 100%), 
          url('/imgs/tickets/bg-tickets.jpg')
        `,
        backgroundSize: "cover", // Keep the image filling the container
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Section Title */}
      <motion.h1
        className={`${cinzel.className} text-6xl md:text-7xl font-bold mb-4 text-center relative group`}
        variants={itemVariants}
      >
        <span className="inline-block relative">
          PURCHASE TICKETS
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h1>
      <TicketPurchaseForm />
    </motion.div>
  );
}
