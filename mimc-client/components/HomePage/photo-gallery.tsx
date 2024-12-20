"use client";

import { motion } from "framer-motion";
import { Card, Spacer, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { cinzel } from "@/config/fonts";

const PhotoGallery: React.FC = () => {
  // Image data for card decks
  const galleryData = {
    LECTURES: {
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
    ACTIVITIES: {
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
    COMMUNITY: {
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
    Horizontal: {
      images: [
        "/imgs/gallery_horizontal/h1.jpg",
        "/imgs/gallery_horizontal/h2.jpg",
        "/imgs/gallery_horizontal/h3.jpg",
        "/imgs/gallery_horizontal/h4.jpg",
        "/imgs/gallery_horizontal/h5.jpg",
        "/imgs/gallery_horizontal/h6.jpg",
        "/imgs/gallery_horizontal/h7.jpg",
        "/imgs/gallery_horizontal/h8.jpg",
        "/imgs/gallery_horizontal/h9.jpg",
        "/imgs/gallery_horizontal/h10.jpg",
        "/imgs/gallery_horizontal/h11.jpg",
        "/imgs/gallery_horizontal/h12.jpg",
        "/imgs/gallery_horizontal/h13.jpg",
        "/imgs/gallery_horizontal/h14.jpg",
        "/imgs/gallery_horizontal/h15.jpg",
        "/imgs/gallery_horizontal/h16.jpg",
        "/imgs/gallery_horizontal/h17.jpg",
        "/imgs/gallery_horizontal/h18.jpg",
        "/imgs/gallery_horizontal/h19.jpg",
        "/imgs/gallery_horizontal/h20.jpg",
        "/imgs/gallery_horizontal/h21.jpg",
        "/imgs/gallery_horizontal/h22.jpg",
        "/imgs/gallery_horizontal/h23.jpg",
        "/imgs/gallery_horizontal/h24.jpg",
        "/imgs/gallery_horizontal/h25.jpg",
        "/imgs/gallery_horizontal/h26.jpg",
        "/imgs/gallery_horizontal/h27.jpg",
        "/imgs/gallery_horizontal/h28.jpg",
        "/imgs/gallery_horizontal/h29.jpg",
        "/imgs/gallery_horizontal/h30.jpg",
        "/imgs/gallery_horizontal/h31.jpg",
        "/imgs/gallery_horizontal/h32.jpg",
        "/imgs/gallery_horizontal/h33.jpg",
        "/imgs/gallery_horizontal/h34.jpg",
        "/imgs/gallery_horizontal/h35.jpg",
        "/imgs/gallery_horizontal/h36.jpg",
        "/imgs/gallery_horizontal/h37.jpg",
        "/imgs/gallery_horizontal/h38.jpg",
        "/imgs/gallery_horizontal/h39.jpg",
        "/imgs/gallery_horizontal/h40.jpg",
        "/imgs/gallery_horizontal/h41.jpg",
        "/imgs/gallery_horizontal/h42.jpg",
        "/imgs/gallery_horizontal/h43.jpg",
        "/imgs/gallery_horizontal/h44.jpg",
        "/imgs/gallery_horizontal/h45.jpg",
      ],
    },
  };

  // Framer Motion Variants
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const swiperSlideVariants = {
    hidden: { scale: 0.8, rotate: -10, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="px-4 md:px-8 mt-16"
      initial="hidden"
      viewport={{ once: true, amount: 0.3 }}
      whileInView="visible"
    >
      <motion.h2
        className="text-7xl font-bold mb-8 text-center relative group"
        initial="hidden"
        variants={titleVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <span className="inline-block relative">
          <h1 className={cinzel.className}>MIMC IN A GALLERY</h1>
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h2>
      {/* 1x3 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-12">
        {Object.entries(galleryData).map(
          ([category, { images, description }], index) => (
            <motion.div
              key={category}
              className={"p-4 rounded-lg"}
              initial="hidden"
              transition={{ delay: index * 0.3 }}
              variants={cardVariants}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <h3 className="text-2xl font-semibold mb-2 text-center text-white">
                {category}
              </h3>
              <p className="text-sm text-center font-semibold text-[#F0FFC9] opacity-80 mb-4">
                {description}
              </p>
              <Swiper
                className="w-full max-w-sm mx-auto"
                effect="cards"
                grabCursor={false}
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
                {images.map((imgSrc, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="rounded-lg pointer-events-none"
                  >
                    <motion.img
                      alt={`${category} ${idx + 1}`}
                      className="w-full h-full object-cover pointer-events-none"
                      loading="lazy"
                      src={imgSrc}
                      variants={swiperSlideVariants}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          ),
        )}
      </div>

      <Spacer y={10} />

      {/* EXPERIENCE THE JOURNEY */}
      <motion.h3
        className="text-5xl font-bold mb-4 text-center relative group"
        initial="hidden"
        variants={titleVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <span className="inline-block relative">
          <h1 className={cinzel.className}>EXPERIENCE THE JOURNEY</h1>
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h3>
      <motion.p
        className="text-sm md:text-base font-semibold text-[#F0FFC9] opacity-80 mb-8 text-center"
        initial="hidden"
        transition={{ delay: 0.2 }}
        variants={titleVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        Every image tells a story — relive the moments that brought us closer as
        a community.
      </motion.p>
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
        {slidingData["Horizontal"].images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="w-full h-40 md:h-60 overflow-hidden rounded-lg"
              initial="hidden"
              variants={swiperSlideVariants}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <img
                alt={`Loop ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                src={imgSrc}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Vertical Sliding Images */}
      <motion.div className="mt-8">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="w-full"
          loop={true}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={15}
        >
          {slidingData["Vertical"].images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="w-full h-full overflow-hidden rounded-lg"
                initial="hidden"
                variants={swiperSlideVariants}
                viewport={{ once: true }}
                whileInView="visible"
              >
                <img
                  alt={`Vertical Loop ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  src={imgSrc}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <Spacer y={14} />

      {/* RELIVE THE HIGHLIGHTS */}
      <motion.h3
        className="text-5xl font-bold mb-4 text-center relative group"
        initial="hidden"
        variants={titleVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <span className="inline-block relative">
          <h1 className={cinzel.className}>RELIVE THE HIGHLIGHTS</h1>
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-[#F0FFC9] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </motion.h3>
      <motion.p
        className="text-base text-center font-semibold text-[#F0FFC9] opacity-80 mb-8"
        initial="hidden"
        transition={{ delay: 0.2 }}
        variants={titleVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        Watch our recap videos from MIMC 2023 and MIMC 2024 to experience the
        energy, excitement, and unity of these unforgettable events.
      </motion.p>

      {/* Highlight Videos */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Stagger animations for children
            },
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        {/* MIMC 2023 Video */}
        <motion.div
          className="relative w-full h-0 pb-[56.25%]"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <iframe
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            src="https://www.youtube.com/embed/MMS6QCKd_Us"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="MIMC 2023 Highlights"
          />
        </motion.div>

        {/* MIMC 2024 Video */}
        <motion.div
          className="relative w-full h-0 pb-[56.25%]"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <iframe
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            src="https://www.youtube.com/embed/hff0PwUltNo"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="MIMC 2024 Highlights"
          />
        </motion.div>
      </motion.div>

      <Spacer y={16} />

      {/* Playlist Card */}
      <motion.div
        className="flex justify-center w-full"
        initial="hidden"
        variants={cardVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <Card
          isHoverable
          isPressable
          className="w-3/4 bg-[#45021e] bg-opacity-70 rounded-lg shadow-lg p-5"
        >
          <CardHeader className="py-6 px-8 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-white text-center">
              MIMC Lecture Playlist
            </h3>
            <p className="text-sm font-medium text-[#F0FFC9] opacity-80 text-center mt-2">
              <strong>Missed last year&apos;s lectures?</strong> Catch up with
              our our <strong>high-quality</strong> recordings and get inspired
              by speakers.
            </p>
          </CardHeader>
          <Divider className="mb-4" />
          <CardBody>
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
      </motion.div>
    </motion.section>
  );
};

export default PhotoGallery;
