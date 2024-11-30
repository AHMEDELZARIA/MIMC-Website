"use client";

import { Spacer } from "@nextui-org/react";

import TestimonialSection from "@/components/HomePage/testamonials";
import PhotoGallery from "@/components/HomePage/photo-gallery";
import Stats from "@/components/HomePage/stats";
import Intro from "@/components/HomePage/intro";
import Landing from "@/components/HomePage/landing";

export default function Home() {
  return (
    <>
      {/* ========================= */}
      {/* landing Section */}
      {/* ========================= */}
      <Landing />

      <Spacer y={10} />

      {/* ========================= */}
      {/* Content Section */}
      <Intro />

      {/* ========================= */}
      {/* Stats Section */}
      {/* ========================= */}
      <Stats />

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
    </>
  );
}
