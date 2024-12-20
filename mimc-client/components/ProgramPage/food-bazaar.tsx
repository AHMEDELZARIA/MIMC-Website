"use client";

import React from "react";

export default function FoodBazaar() {
  // Food Data
  // Bazaar Data

  return (
    <section className="px-4 md:px-8">
      {/* Section Title */}
      <h3 className="text-xl font-bold text-center">INDULGE AND BROWSE OUR</h3>
      <h1 className="text-6xl md:text-7xl font-bold mb-8 text-center relative group">
        <span className="inline-block relative">
          FOOD & BAZAAR
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </h1>
    </section>
  );
}