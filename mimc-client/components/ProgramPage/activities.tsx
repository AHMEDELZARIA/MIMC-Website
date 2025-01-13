"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline"; // Import additional icons for the legend

import { cinzel } from "@/config/fonts";
import { title } from "process";
import { link } from "fs";

export default function Activities() {
  // Activities Data
  const activities = [
    // {
    //   title: "QIYAM NIGHT",
    //   category: "ACCOMMODATIONS",
    //   imageUrl: "/imgs/com/c33.jpg",
    //   date: "Sat Feb 14, 2025",
    //   time: "9:00 PM - 8:00 AM",
    //   requiresSignUp: true,
    //   link: "https://docs.google.com/forms/d/e/1FAIpQLScSY9QW0pA2dmAtre7kUIHpryEL04PQp3IOeJHS4EkI-Btuqw/viewform?usp=sharing"
    // },
    {
      title: "SHARK TANK",
      category: "COMPETITION & WORKSHOP",
      imageUrl: "/imgs/act/act22.jpg",
      date: "Sun Feb 16, 2025",
      time: "12:00 PM - 3:30 PM",
      requiresSignUp: true,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfMpGn5-Yb5NsT6PRsvEenSqIfqD5cqyXCLIgiqv2m4Q9GQ-Q/viewform"
    },
    {
      title: "QIRAA'ATUL",
      category: "QUR'AN COMPETITION",
      imageUrl: "/imgs/act/act19.jpg",
      date: "Sat Feb 15, 2025",
      time: "12:00 PM - 4:30 PM",
      requiresSignUp: true,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScBDBGLH67Mqlzqg35h8xEQOaf0LabSYNzFqMMgr5j0ckbTeA/viewform?usp=dialog",
    },
    {
      title: "FAUX STAINED",
      category: "GLASS MAKING",
      imageUrl: "/imgs/act/stained-glass.jpg",
      date: "Sat Feb 15, 2025",
      time: "2:30 PM - 4:30 PM",
      requiresSignUp: true,
      link: "https://docs.google.com/forms/d/1AOjYALVt3Gx007jWrKriwCtTQ7qAc9XEoxW07IF-2Pc/prefill",
    },
    {
      title: "ESCAPE ROOM",
      category: "TEST YOUR WITS",
      imageUrl: "/imgs/act/escape-room.png",
      date: "Sun Feb 16, 2025",
      time: "1:30 PM - 6:15 PM",
      requiresSignUp: true,
      link: "https://docs.google.com/forms/d/1hMh2SH41CUmwhs55DuzYG91BF3pvaEguYEXg-rVlczQ/prefill",
    },
    {
      title: "RAMADAN",
      category: "WORKSHOP",
      imageUrl: "/imgs/act/ramadan.png",
      date: "Sun Feb 16, 2025",
      time: "5:15 PM - 6:15 PM",
      requiresSignUp: false,
    },
    {
      title: "NETWORKING PROGRAM",
      category: "CAMPUS TO CAREER",
      imageUrl: "/imgs/act/networking.jpg",
      date: "Sun Feb 16, 2025",
      time: "11:00 AM - 1:00 PM",
      requiresSignUp: false,
    },
    {
      title: "AL FURQAAN",
      category: "ISLAMIC TRIVIA",
      imageUrl: "/imgs/act/trivia.jpg",
      date: "Sun Feb 16, 2025",
      time: "5:15 PM - 6:15 PM",
      requiresSignUp: false,
    },
    {
      title: "SURAH AL FATIHA",
      category: "BOOK DISCUSSION",
      imageUrl: "/imgs/act/book.jpg",
      date: "Sat Feb 15, 2025",
      time: "5:15 PM - 6:15 PM",
      requiresSignUp: true,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdBs3ZkYtD9LcUW7zDKevJAjR_aR2BKBQboi_5_etBAMGfdUA/viewform?usp=sharing",
    },
    {
      title: "INTER-MSA",
      category: "EXEC FORUM",
      imageUrl: "/imgs/act/inter-msa.jpg",
      date: "Sat Feb 15, 2025",
      time: "12:00 PM - 6:15 PM",
      requiresSignUp: true,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdh537_or0Xho97_PAvDwDf6NAz-kAOzKysrRzYmvTJ8UmhWg/viewform"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggering the child animations
      },
    },
  };

   const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.section
      className=""
      initial="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
      variants={containerVariants}
    >
      {/* Section Title */}
      <h3
        className={`${cinzel.className} text-xl font-bold text-center px-4 md:px-8`}
      >
        PRESENTING OUR
      </h3>
      <h1
        className={`${cinzel.className} text-6xl md:text-7xl font-bold mb-4 text-center relative group px-4 md:px-8`}
      >
        {/* <h3 className="text-xl font-bold text-center px-4 md:px-8">ENGAGE IN</h3> */}
        {/* <h1 className="text-7xl font-bold mb-4 text-center relative group px-4 md:px-8"> */}
        <span className="inline-block relative">
          ACTIVITIES
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </h1>
      <p className="text-sm md:text-base font-medium text-[#F0FFC9] opacity-80 mb-4 text-justify px-4 md:px-8">
        Explore a variety of exciting activities designed to inspire, engage,
        and connect you with fellow attendees. From creative workshops to
        thrilling challenges, there's something for everyone to enjoy. Some activities, indicated by the icons below, require sign up since space is limited. {" "}
        <strong className="underline text-white">
          Click an activity to secure your spot!
        </strong>
      </p>

      {/* Legend */}
      <div className="flex justify-center gap-8 mb-12">
        <div className="flex items-center gap-2">
          <CheckIcon className="w-6 h-6 text-green-500" />
          <span className="text-sm text-[#F0FFC9]">Sign-Up Required</span>
        </div>
        <div className="flex items-center gap-2">
          <XMarkIcon className="w-6 h-6 text-red-500" />
          <span className="text-sm text-[#F0FFC9]">No Sign-Up Required</span>
        </div>
      </div>

      {/* Activities Grid */}
      <motion.div
        className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-12 py-3 px-4"
        // className="grid gap-y-12 py-3 px-4" // temp while we only have QQC up to keep it centered.
        style={{
          backgroundImage: `
            linear-gradient(to bottom, #570326 10%,rgba(87, 3, 38, 0.85) 30%, rgba(87, 3, 38, 0.85) 90%, #570326 100%), 
            url('/imgs/act/bg-activities.jpg')
          `,
          backgroundSize: "cover", // Keep the image filling the container
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        variants={containerVariants}
      >
        {activities.map((activity, index) => (
          <a
            key={index}
            className="relative cursor-pointer w-80 h-80 mx-auto rounded-full overflow-hidden border-5 border-[#A9DA88] flex flex-col items-center justify-self transition-all duration-400 hover:border-[#A9DA88] hover:shadow-2xl hover:shadow-[#A9DA88] group"
            href={activity.link} // Link to the activity page
            rel="noopener noreferrer" // Security best practice
            target="_blank" // Open in a new tab
          >
            {/* Background Image */}
            <img
              alt={activity.title}
              className="absolute inset-0 w-full h-full object-cover transform scale-100 transition-transform duration-500 group-hover:scale-110"
              src={activity.imageUrl}
            />

            {/* Dim Overlay */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-70" />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              {/* Activity Name */}
              <h2 className="text-2xl font-bold">{activity.title}</h2>
              <h3 className="text-md font-bold bg-[#A9DA88] text-black px-3 py-0.5 rounded-xl mt-2">
                {activity.category}
              </h3>

              {/* Calendar Icon */}
              <CalendarIcon className="w-8 h-8 mt-2 text-white" />

              {/* Date */}
              <p className="text-md mt-1 font-semibold">{activity.date}</p>

              {/* Time */}
              <p className="text-md font-semibold">{activity.time}</p>

              {/* Sign-Up Icon */}
              {activity.requiresSignUp ? (
                <CheckIcon className="w-6 h-6 mt-3 text-green-500" />
              ) : (
                <XMarkIcon className="w-6 h-6 mt-3 text-red-500" />
              )}
            </div>
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
}
