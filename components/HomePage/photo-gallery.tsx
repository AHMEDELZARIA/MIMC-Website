"use client";

import { Card, Spacer, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

export default function GallerySection() {
  // Image data for card decks
  const galleryData = {
    Lectures: {
      images: [
        "/imgs/lec/l1.jpg",
        "/imgs/lec/l2.jpg",
        "/imgs/lec/l3.jpg",
        "/imgs/lec/l4.jpg",
        "/imgs/lec/l5.jpg",
        "/imgs/lec/l6.jpg",
        "/imgs/lec/l7.jpg",
        "/imgs/lec/l8.jpg",
        "/imgs/lec/l9.jpg",
        "/imgs/lec/l10.jpg",
        "/imgs/lec/l11.jpg",
        "/imgs/lec/l12.jpg",
        "/imgs/lec/l13.jpg",
        "/imgs/lec/l14.jpg",
        "/imgs/lec/l16.jpg",
        "/imgs/lec/l17.jpg",
        "/imgs/lec/l18.jpg",
        "/imgs/lec/l19.jpg",
        "/imgs/lec/l20.jpg",
        "/imgs/lec/l21.jpg",
        "/imgs/lec/l22.jpg",
        "/imgs/lec/l23.jpg",
        "/imgs/lec/l24.jpg",
        "/imgs/lec/l26.jpg",
        "/imgs/lec/l27.jpg",
        "/imgs/lec/l28.jpg",
        "/imgs/lec/l29.jpg",
        "/imgs/lec/l30.jpg",
        "/imgs/lec/l31.jpg",
        "/imgs/lec/l32.jpg",
        "/imgs/lec/l33.jpg",
        "/imgs/lec/l34.jpg",
        "/imgs/lec/l35.jpg",
        "/imgs/lec/l36.jpg",
        "/imgs/lec/l37.jpg",
        "/imgs/lec/l38.jpg",
        "/imgs/lec/l39.jpg",
        "/imgs/lec/l40.jpg",
        "/imgs/lec/l41.jpg",
        "/imgs/lec/l42.jpg",
        "/imgs/lec/l43.jpg",
        "/imgs/lec/l44.jpg",
        "/imgs/lec/l45.jpg",
        "/imgs/lec/l46.jpg",
        "/imgs/lec/l47.jpg",
      ],
      description: "Explore captivating lectures that inspire and enlighten.",
    },
    Activities: {
      images: [
        "/imgs/act/act1.jpg",
        "/imgs/act/act2.jpg",
        "/imgs/act/act3.jpg",
        "/imgs/act/act4.jpg",
        "/imgs/act/act5.jpg",
        "/imgs/act/act6.jpg",
        "/imgs/act/act7.jpg",
        "/imgs/act/act8.jpg",
        "/imgs/act/act9.jpg",
        "/imgs/act/act10.jpg",
        "/imgs/act/act11.jpg",
        "/imgs/act/act12.jpg",
        "/imgs/act/act13.jpg",
        "/imgs/act/act14.jpg",
        "/imgs/act/act15.jpg",
        "/imgs/act/act16.jpg",
        "/imgs/act/act17.jpg",
        "/imgs/act/act18.jpg",
        "/imgs/act/act19.jpg",
        "/imgs/act/act21.jpg",
        "/imgs/act/act22.jpg",
        "/imgs/act/act23.jpg",
        "/imgs/act/act24.jpg",
        "/imgs/act/act25.jpg",
        "/imgs/act/act26.jpg",
        "/imgs/act/act27.jpg",
        "/imgs/act/act28.jpg",
        "/imgs/act/act29.jpg",
        "/imgs/act/act30.jpg",
        "/imgs/act/act31.jpg",
        "/imgs/act/act32.jpg",
        "/imgs/act/act33.jpg",
        "/imgs/act/act34.jpg",
      ],
      description: "Discover engaging activities that bring everyone together.",
    },
    Community: {
      images: [
        "/imgs/com/c1.jpg",
        "/imgs/com/c2.jpg",
        "/imgs/com/c3.jpg",
        "/imgs/com/c4.jpg",
        "/imgs/com/c5.jpg",
        "/imgs/com/c6.jpg",
        "/imgs/com/c7.jpg",
        "/imgs/com/c8.jpg",
        "/imgs/com/c9.jpg",
        "/imgs/com/c10.jpg",
        "/imgs/com/c11.jpg",
        "/imgs/com/c12.jpg",
        "/imgs/com/c13.jpg",
        "/imgs/com/c14.jpg",
        "/imgs/com/c15.jpg",
        "/imgs/com/c16.jpg",
        "/imgs/com/c17.jpg",
        "/imgs/com/c18.jpg",
        "/imgs/com/c19.jpg",
        "/imgs/com/c21.jpg",
        "/imgs/com/c22.jpg",
        "/imgs/com/c23.jpg",
        "/imgs/com/c24.jpg",
        "/imgs/com/c25.jpg",
        "/imgs/com/c26.jpg",
        "/imgs/com/c27.jpg",
        "/imgs/com/c28.jpg",
        "/imgs/com/c29.jpg",
        "/imgs/com/c30.jpg",
        "/imgs/com/c31.jpg",
        "/imgs/com/c32.jpg",
        "/imgs/com/c33.jpg",
        "/imgs/com/c34.jpg",
        "/imgs/com/c35.jpg",
        "/imgs/com/c36.jpg",
        "/imgs/com/c37.jpg",
        "/imgs/com/c38.jpg",
        "/imgs/com/c39.jpg",
        "/imgs/com/c40.jpg",
        "/imgs/com/c41.jpg",
        "/imgs/com/c42.jpg",
        "/imgs/com/c43.jpg",
        "/imgs/com/c44.jpg",
        "/imgs/com/c45.jpg",
      ],
      description: "Celebrate the sense of belonging and shared purpose.",
    },
  };

  // Image data for sliding displays
  const slidingData = {
    Vertical: {
      images: [
        "/imgs/gallery_vertical/v1.jpg",
        "/imgs/gallery_vertical/v2.jpg",
        "/imgs/gallery_vertical/v3.jpg",
        "/imgs/gallery_vertical/v4.jpg",
        "/imgs/gallery_vertical/v5.jpg",
        "/imgs/gallery_vertical/v6.jpg",
        "/imgs/gallery_vertical/v7.jpg",
        "/imgs/gallery_vertical/v8.jpg",
        "/imgs/gallery_vertical/v9.jpg",
        "/imgs/gallery_vertical/v10.jpg",
        "/imgs/gallery_vertical/v11.jpg",
        "/imgs/gallery_vertical/v12.jpg",
        "/imgs/gallery_vertical/v13.jpg",
        "/imgs/gallery_vertical/v14.jpg",
        "/imgs/gallery_vertical/v15.jpg",
        "/imgs/gallery_vertical/v16.jpg",
        "/imgs/gallery_vertical/v17.jpg",
        "/imgs/gallery_vertical/v18.jpg",
        "/imgs/gallery_vertical/v19.jpg",
        "/imgs/gallery_vertical/v21.jpg",
        "/imgs/gallery_vertical/v22.jpg",
        "/imgs/gallery_vertical/v23.jpg",
        "/imgs/gallery_vertical/v27.jpg",
        "/imgs/gallery_vertical/v28.jpg",
        "/imgs/gallery_vertical/v29.jpg",
        "/imgs/gallery_vertical/v30.jpg",
        "/imgs/gallery_vertical/v31.jpg",
        "/imgs/gallery_vertical/v32.jpg",
        "/imgs/gallery_vertical/v33.jpg",
        "/imgs/gallery_vertical/v34.jpg",
        "/imgs/gallery_vertical/v35.jpg",
        "/imgs/gallery_vertical/v36.jpg",
        "/imgs/gallery_vertical/v37.jpg",
        "/imgs/gallery_vertical/v38.jpg",
        "/imgs/gallery_vertical/v39.jpg",
        "/imgs/gallery_vertical/v40.jpg",
        "/imgs/gallery_vertical/v41.jpg",
        "/imgs/gallery_vertical/v42.jpg",
        "/imgs/gallery_vertical/v43.jpg",
        "/imgs/gallery_vertical/v44.jpg",
        "/imgs/gallery_vertical/v45.jpg",
        "/imgs/gallery_vertical/v46.jpg",
        "/imgs/gallery_vertical/v47.jpg",
      ],
    },
  };

  return (
    <section className="px-4 md:px-8 mt-16">
      {/* Section Title */}
      <h2 className="text-7xl font-bold mb-8 text-center relative group">
        <span className="inline-block relative">
          MIMC IN A GALLERY
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </h2>
      {/* 1x3 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-12">
        {Object.entries(galleryData).map(
          ([category, { images, description }]) => (
            <div
              key={category}
              className="bg-black bg-opacity-40 p-4 rounded-lg"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-semibold mb-2 text-center text-white">
                {category}
              </h3>
              {/* Category Description */}
              <p className="text-sm text-center font-medium text-gray-300 mb-4">
                {description}
              </p>

              {/* Swiper for Category */}
              <Swiper
                className="w-full max-w-sm mx-auto"
                effect="cards"
                grabCursor={true}
                modules={[EffectCards, Pagination]}
                pagination={{
                  el: ".custom-pagination",
                  clickable: true,
                  dynamicBullets: true,
                  renderBullet: (index, className) =>
                    `<span class="${className}" style="
                    background-color: rgba(0, 128, 255, 0.7); 
                    width: 12px; 
                    height: 12px; 
                    border-radius: 50%; 
                    margin: 0 4px;
                  "></span>`,
                }}
              >
                {images.map((imgSrc, index) => (
                  <SwiperSlide
                    key={index}
                    className="rounded-lg overflow-hidden"
                  >
                    <img
                      alt={`${category} ${index + 1}`}
                      className="w-full h-full object-cover"
                      src={imgSrc}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ),
        )}
      </div>

      <Spacer y={10} />

      {/* Infinite Loop of Images */}
      {/* Category Title */}
      <h3 className="text-5xl font-bold mb-4 text-center relative group">
        <span className="inline-block relative">
          EXPERIENCE THE JOURNEY
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </h3>
      {/* Category Description */}
      <p className="text-sm md:text-base font-medium text-gray-300 mb-8 text-center">
        Every image tells a story — relive the moments that brought us closer as
        a community.
      </p>
      <div>
        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="w-full"
          loop={true}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
        >
          {galleryData["Lectures"].images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-40 md:h-60 overflow-hidden rounded-lg">
                <img
                  alt={`Loop ${index + 1}`}
                  className="w-full h-full object-cover"
                  src={imgSrc}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Infinite Loop of Images */}
      {/* Category Title */}
      <div className="mt-8">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className="w-full"
          loop={true}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={60}
        >
          {slidingData["Vertical"].images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  alt={`Loop ${index + 1}`}
                  className="w-full h-full object-cover"
                  src={imgSrc}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Spacer y={14} />

      <h2 className="text-5xl font-bold mb-4 text-center relative group">
        <span className="inline-block relative">
          RELIVE THE HIGHLIGHTS
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </h2>
      <p className="text-base text-center font-medium text-gray-300 mb-8">
        Watch our recap videos from MIMC 2023 and MIMC 2024 to experience the
        energy, excitement, and unity of these unforgettable events.
      </p>

      {/* Highlight Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* MIMC 2023 Video */}
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            src="https://www.youtube.com/embed/MMS6QCKd_Us?si=70-r8VGYcKfuyx2y"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="MIMC 2023 Highlights"
          />
        </div>

        {/* MIMC 2024 Video */}
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            src="https://www.youtube.com/embed/hff0PwUltNo?si=76sE7yVqnhYojHa-"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="MIMC 2024 Highlights"
          />
        </div>
      </div>

      <Spacer y={20} />

      <div className="flex justify-center w-full">
        <Card
          isHoverable
          isPressable
          className="w-3/4 bg-black bg-opacity-50 rounded-lg shadow-lg"
        >
          <CardHeader className="py-6 px-8 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-white text-center">
              MIMC Lecture Playlist
            </h3>
            <p className="text-sm font-medium text-gray-300 text-center mt-2">
              <strong>Missed last year's lectures?</strong> Catch up with our{" "}
              <strong>high-quality </strong>
              recordings and get inspired by our speakers.
            </p>
          </CardHeader>
          <Divider className="mb-4" />
          <CardBody>
            {/* YouTube Embed */}
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute inset-0 w-full h-full border-0 rounded-b-lg"
                src="https://www.youtube.com/embed/videoseries?list=PLeOpHlIwa7pKOUuUf2QcMM2EtjnzYEPW9"
                title="MIMC Lecture Playlist"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
