"use client";

import { Spacer } from "@nextui-org/react";

import TestimonialSection from "@/components/HomePage/testamonials";
import PhotoGallery from "@/components/HomePage/photo-gallery";
import Stats from "@/components/HomePage/stats";
import Intro from "@/components/HomePage/intro";
import Landing from "@/components/HomePage/landing";

export default function Home() {
  return (
    <div className="bg-[#570326]">
      {/* ========================= */}
      {/* landing Section */}
      {/* ========================= */}
      <Landing />

      <Spacer y={10} />

      {/* ========================= */}
      {/* Content Section */}
      <Intro />

      <Spacer y={20} />

      {/* ========================= */}
      {/* Stats Section */}
      {/* ========================= */}
      <Stats />

      <Spacer y={10} />

      {/* ========================= */}
      {/* Testimonial Section */}
      {/* ========================= */}
      <TestimonialSection />

      <Spacer y={10} />

      {/* ========================= */}
      {/* Photo Gallery Section */}
      {/* ========================= */}
      <PhotoGallery />

      <Spacer y={10} />
    </div>
  );
}
