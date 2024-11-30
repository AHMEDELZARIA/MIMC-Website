"use client";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Spacer } from "@nextui-org/react";

export default function Stats() {
  return (
    <section className="bg-container w-full py-10 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-8">
        {/* Section Header */}
        <h2 className="md:text-5xl sm:text-4xl font-bold mb-8">
          MIMC IN NUMBERS
        </h2>
        <Spacer y={10} />
        {/* ========================= */}
        {/* 1x3 Grid of Circles */}
        {/* ========================= */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-20  place-items-center">
          {/* Circle 1 */}
          <div className="relative w-64 h-64 rounded-full border-4 hover:border-green stat-circle">
            {/* Image */}
            <img
              alt="Attendance Growth"
              className="w-full h-full object-cover opacity-50"
              src="/imgs/stats/stat_1.jpg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
              <p className=" font-extrabold text-6xl leading-tight">35%</p>
              <p className="font-medium text-l">ATTENDANCE GROWTH</p>
            </div>
          </div>

          {/* Circle 2 */}
          <div className="relative w-64 h-64 rounded-full border-4 border-white stat-circle">
            {/* Image */}
            <img
              alt="Social Media Reach"
              className="w-full h-full object-cover opacity-50"
              src="/imgs/stats/stat_2.jpg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
              <p className="font-extrabold text-6xl leading-tight">+50k</p>
              <p className="font-medium text-l">SOCIAL MEDIA REACH</p>
            </div>
          </div>

          {/* Circle 3 */}
          <div className="relative w-64 h-64 rounded-full border-4 border-white stat-circle">
            {/* Image */}
            <img
              alt="MSA Partners"
              className="w-full h-full object-cover opacity-50"
              src="/imgs/stats/stat_3.jpg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
              <p className="font-extrabold text-6xl leading-tight">14</p>
              <p className="font-medium text-l">MSA PARTNERS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
