"use client";

import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Card, CardHeader, Spacer, Image, Link } from "@nextui-org/react";
import { useRef } from "react";

export default function Intro() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Trigger animation only once

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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
        {/* Section Title */}
        <motion.h2
          animate={isInView ? "visible" : "hidden"}
          className="text-7xl font-bold mb-8 text-center relative group"
          initial="hidden"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <span className="inline-block relative">
            MIMC 2025?!
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
}
