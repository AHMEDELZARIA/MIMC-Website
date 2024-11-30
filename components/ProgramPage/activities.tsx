"use client";

import React from "react";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";

export default function Activities() {
  // Activities Data
  const activities = [
    {
      title: "QIYAM",
      category: "ACCOMMODATIONS",
      imageUrl: "/imgs/com/c33.jpg",
      date: "Dec 10, 2024",
      time: "10:00 AM - 6:00 PM",
    },
    {
      title: "SHARK TANK",
      category: "CASE COMPETITION",
      imageUrl: "/imgs/act/act22.jpg",
      date: "Dec 11, 2024",
      time: "2:00 PM - 5:00 PM",
    },
    {
      title: "QIRAA'ATUL",
      category: "QUR'AN COMPETITION",
      imageUrl: "/imgs/act/act19.jpg",
      date: "Dec 12, 2024",
      time: "1:00 PM - 3:00 PM",
    },
    {
      title: "STAINED",
      category: "GLASS MAKING",
      imageUrl: "/imgs/act/stained-glass.jpg",
      date: "Dec 13, 2024",
      time: "7:00 PM - 9:00 PM",
    },
    {
      title: "ESCAPE ROOM",
      category: "TEST YOUR WITS",
      imageUrl: "/imgs/act/escape-room.png",
      date: "Dec 14, 2024",
      time: "4:00 PM - 5:30 PM",
    },
    {
      title: "CALLIGRAPHY",
      category: "MASTER THE ART OF WRITING",
      imageUrl: "/imgs/act/act4.jpg",
      date: "Dec 15, 2024",
      time: "11:00 AM - 1:00 PM",
    },
  ];

  return (
    <section className="px-4 md:px-8">
      {/* Section Title */}
      <h3 className="text-xl font-bold text-center">ENGAGE IN</h3>
      <h1 className="text-7xl font-bold mb-8 text-center relative group">
        <span className="inline-block relative">
          ACTIVITIES
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </h1>

      {/* Activities Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-12">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="relative cursor-pointer w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-gray-300 flex flex-col items-center justify-center transition-all duration-400 hover:scale-105 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/50 active:scale-95 group"
          >
            {/* Background Image */}
            <img
              alt={activity.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 transform scale-100 transition-transform duration-500 group-hover:scale-110"
              src={activity.imageUrl}
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              {/* Activity Name */}
              <h2 className="text-3xl font-bold">{activity.title}</h2>
              <h3 className="text-md font-bold bg-blue-500 text-white px-3 py-0.5 rounded-xl mt-2">
                {activity.category}
              </h3>

              {/* Calendar Icon */}
              <CalendarIcon className="w-8 h-8 mt-2 text-white" />

              {/* Date */}
              <p className="text-md mt-1 font-semibold">{activity.date}</p>

              {/* Time */}
              <p className="text-md font-semibold">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}