"use client";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Card, CardHeader, Spacer, Image, Link } from "@nextui-org/react";

export default function Intro() {
  return (
    <section className="bg-container w-full py-10 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-8">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">MIMC 2025?!</h2>
        <Spacer y={2} />
        <p className="text-base md:text-lg mb-4 text-justify">
          <strong>MIMC is back to McMaster University this February!</strong>{" "}
          A 2-day convention of lectures, activities, competitions, bazaar,
          vendor, and more! Join us alongside over{" "}
          <strong>1,000 attendees</strong> from all across Ontario to embrace
          the meaning of this year’s theme{" "}
          <strong className="italic">Truth and Falsehood!</strong> Expect to
          leave inspired, connected, and slightly tired...
        </p>

        {/* ========================= */}
        {/* 1x3 Grid of Cards */}
        {/* ========================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="aspect-w-4 aspect-h-3">
            <Card
              isHoverable
              isPressable
              className="relative bg-gradient-to-br from-gray-900 to-gray-700"
              style={{
                boxShadow: "0 0 25px 5px rgba(255, 255, 255, 0.15)", // Subtle white glow
              }}
            >
              <CardHeader className="absolute z-20 top-2 left-2 flex-col !items-start text-left">
                <p className="text-tiny text-white/60 uppercase font-bold">
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
          </div>

          {/* Card 2 */}
          <div className="aspect-w-4 aspect-h-3">
            <Card
              isHoverable
              isPressable
              className="relative bg-gradient-to-br from-gray-900 to-gray-700"
              style={{
                boxShadow: "0 0 25px 5px rgba(255, 255, 255, 0.15)",
              }}
            >
              <CardHeader className="absolute z-20 top-2 left-2 flex-col !items-start text-left">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Knowledge & Reflection
                </p>
                <h4 className="text-white text-small font-medium text-large">
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
          </div>

          {/* Card 3 */}
          <div className="aspect-w-4 aspect-h-3">
            <Card
              isHoverable
              isPressable
              className="relative bg-gradient-to-br from-gray-900 to-gray-700"
              style={{
                boxShadow: "0 0 25px 5px rgba(255, 255, 255, 0.15)",
              }}
            >
              <CardHeader className="absolute z-20 top-2 left-2 flex-col !items-start text-left">
                <p className="text-tiny text-white/60 uppercase font-bold">
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
          </div>
        </div>
        <Spacer y={10} />
        {/* ========================= */}
        {/* Qiyām Accommodations Link */}
        {/* ========================= */}
        <p className="text-base md:text-lg mb-4 text-center">
          <strong>Long travels?</strong> Sign-up for Qiyām Accommodations{" "}
          <Link
            className="text-inherit font-bold underline"
            color="primary"
            href="/qiyam-accommodations"
            isExternal={false} // Set to true if the link points to an external website
            underline="hover"
          >
            here
          </Link>
        </p>
      </div>
    </section>
  );
}
