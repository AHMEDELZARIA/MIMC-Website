"use client";

import { motion } from "framer-motion";
import { Card, Spacer, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
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
      image: "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2Ffinallecture.jpg?alt=media&token=afae7d47-9ce7-45c7-a1ff-d0440d4e8578",
      // images: [
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FLectures%2F1.jpg?alt=media&token=bb962e65-3a0e-406a-8fc4-bb0a25e03e35",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FLectures%2F2.jpg?alt=media&token=c09db826-95c6-4a26-8176-5a282702b028",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FLectures%2F3.jpg?alt=media&token=cea21c1d-3100-458d-af08-b1204692c79c",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FLectures%2F4.jpg?alt=media&token=b86f4bbb-3a65-4c6f-9493-6fa503d4929b",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FLectures%2F5.jpg?alt=media&token=7836bbb2-a8ac-4934-81ba-84c246144622",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FLectures%2F6.jpg?alt=media&token=d40e42bc-a26f-42d9-b267-b314e9c310dc",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FLectures%2F7.jpg?alt=media&token=6761369f-1ec2-47ea-9806-77ec7767ada3",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FLectures%2F8.jpg?alt=media&token=7667e1eb-c21a-4b72-be8a-970a67bef09c",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FLectures%2F9.jpg?alt=media&token=2ec4fcb9-fcec-4860-9b6e-7da096e43f1d",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FLectures%2F10.jpg?alt=media&token=e8ea73d0-1337-4d55-880a-9b3b220d8564",
      // ],
      description: "Explore captivating lectures that inspire and enlighten.",
    },
    ACTIVITIES: {
      image: "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2Ffinalactivity.jpg?alt=media&token=8974185c-cded-4c16-833a-db1b06587142",
      // images: [
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FActivites%2F1.jpg?alt=media&token=d0bc02fc-e512-4b75-bdbb-5ac485bd41de",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FActivites%2F2.jpg?alt=media&token=dda6ccdc-2877-4b47-975a-38432f64fbf9",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FActivites%2F3.jpg?alt=media&token=b7dfb13e-1fcd-4c25-83f0-5a66884afc15",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FActivites%2F4.jpg?alt=media&token=74a6f82d-7d85-40c4-982f-77b8c16b4390",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FActivites%2F5.jpg?alt=media&token=3c06e54d-055a-4070-bde2-5869e6969811",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FActivites%2F6.jpg?alt=media&token=347bff5c-60bc-4e00-bc52-cd41c17b95bd",
      //   // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FActivites%2F7.jpg?alt=media&token=123cfac9-42eb-47ae-bf21-b642e54c0d9a",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FActivites%2F8.jpg?alt=media&token=ff693c9e-b660-48d0-88db-5f96002473b0",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FActivites%2F9.jpg?alt=media&token=10192508-5884-49a5-ac5b-40f648509e4b",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FActivites%2F10.jpg?alt=media&token=e70343e8-356d-44bb-b089-d04ae982a0e2",
      // ],
      description: "Discover engaging activities that bring everyone together.",
    },
    COMMUNITY: {
      image: "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2Ffinalcommunity.jpg?alt=media&token=0806cb54-7aa3-40e5-afd6-c94341cec6bb",
      // images: [
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FCommunity%2F1.jpg?alt=media&token=04b2a6ac-4970-4be7-8c72-ee4b662eb123",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FCommunity%2F2.jpg?alt=media&token=66a23857-48f9-4b3d-9e0b-29a59220a01d",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FCommunity%2F3.jpg?alt=media&token=fbf7de57-d091-4580-aac7-238b6a97ccd9",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FCommunity%2F4.jpg?alt=media&token=52f5cf9b-3184-46e3-ae6f-e9c2701aac19",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FCommunity%2F5.jpg?alt=media&token=9a76c011-6f4e-4f1f-8d3c-63e1cfe1b7a5",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FCommunity%2F6.jpg?alt=media&token=3baadd4e-af65-4bc0-9a1b-41e97ba125f8",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FCommunity%2F7.jpg?alt=media&token=691e261c-0f48-4059-8088-257bb10a5f86",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FCommunity%2F8.jpg?alt=media&token=bd8b7865-4283-40b6-945d-d188412a30b7",
      //   "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FCommunity%2F9.jpg?alt=media&token=3f78731f-8538-4e1e-8b3c-67082a13f431",
      //   // "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FCommunity%2F10.jpg?alt=media&token=2740ee7e-6ee6-4b81-8f68-0ee2fc3201cb",
      // ],
      description: "Celebrate the sense of belonging and shared purpose.",
    },
  };

  // Image data for sliding displays
  const slidingData = {
    Vertical: {
      images: [
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv10.jpg?alt=media&token=de0ca870-23fd-4ebb-afd8-9436c54d509b",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv11.jpg?alt=media&token=f3ff1cb0-dda0-42e0-8dc2-9095d752743b",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv12.jpg?alt=media&token=981f5041-995f-40ea-8c46-f513904ca90a",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv13.jpg?alt=media&token=3624dae5-043d-4d61-836e-720d75e83596",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv14.jpg?alt=media&token=8bba23e4-c4f2-4f86-a212-d1b23b512833",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv15.jpg?alt=media&token=a2d66770-7c3c-4cd5-ad96-64249c895697",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv16.jpg?alt=media&token=1158ad27-6297-4378-a633-1a85514a683f",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv17.jpg?alt=media&token=0c2a53bb-f590-4e69-a393-754f051be760",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv19.jpg?alt=media&token=ea69aba6-844c-41cf-8f50-7cc9df07b68c",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv2.jpg?alt=media&token=622c7e26-fedb-4995-a983-266c6322381c",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv20.jpg?alt=media&token=026c1c5b-a570-4a3b-a8fb-be7b6686a15f",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv21.jpg?alt=media&token=54c9ad45-bd65-496e-9ef8-761f41942495",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FgalleryHoizontal%2Fv22.jpg?alt=media&token=1ed3dd8a-6bd0-4d91-be48-d6b08f595e9e",
      ],
    },
    Horizontal: {
      images: [
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FFirstRow%2F1.jpg?alt=media&token=cbe660e3-25cc-4e89-82eb-161a07e13e04",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FFirstRow%2F2.jpg?alt=media&token=f90a76d3-1360-4d86-aa6d-4892d2a58395",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FFirstRow%2F3.jpg?alt=media&token=81925b5b-c156-4b51-b083-0d2de8da85d9",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FFirstRow%2F4.jpg?alt=media&token=ec0f1e63-e570-4fa7-963d-4d2c171cf262",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FFirstRow%2F5.jpg?alt=media&token=675f02bd-8375-443e-a9e3-8f47c6118bd0",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FFirstRow%2F6.jpg?alt=media&token=16dd0842-4ebd-4d7a-be68-0c500f6bf1cb",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FFirstRow%2F7.jpg?alt=media&token=956c5041-6b2d-4adf-8eb9-cc4b0fd08292",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FFirstRow%2F8.jpg?alt=media&token=d85ecfa4-c2c4-4058-b58a-ea97ac978b07",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FFirstRow%2F9.jpg?alt=media&token=2477b91b-0983-4beb-81f9-f68bb0032c2b",
        "https://firebasestorage.googleapis.com/v0/b/macmsa-clientapp.appspot.com/o/mimcImages%2FHomePage%2FFirstRow%2F10.jpg?alt=media&token=1767c0d8-3b37-499c-908e-3b2a31247866",
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
        className="text-6xl md:text-7xl font-bold mb-8 text-center relative group"
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
          ([category, { image, description }], index) => (
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
              {/* <Swiper
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
              </Swiper> */}
              <Card
                isHoverable
                isPressable
                className="relative bg-gradient-to-br from-[#6a0336] to-[#450222]"
                style={{
                  boxShadow: "0 0 25px 5px rgba(87, 3, 38, 0.4)",
                }}
              >
                {/* <CardHeader className="absolute z-20 top-2 left-2 flex-col !items-start text-left">
                  <p className="text-tiny text-[#F0FFC9]/70 uppercase font-bold">
                    {category}
                  </p>
                  <h4 className="text-[white] text-small font-medium text-large">
                    Learn from impactful speakers and enrich your faith.
                  </h4>
                </CardHeader> */}
                <Image
                  isBlurred
                  isZoomed
                  removeWrapper
                  alt="About Image 2"
                  className="object-cover"
                  src={image}
                />
              </Card>
            </motion.div>
          ),
        )}
      </div>

      <Spacer y={10} />

      {/* EXPERIENCE THE JOURNEY */}
      <motion.h3
        className="text-4xl md:text-5xl font-bold mb-4 text-center relative group"
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
        className="text-4xl md:text-5xl font-bold mb-4 text-center relative group"
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
