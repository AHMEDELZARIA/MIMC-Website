"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="px-0 md:px-0 mt-20 mb-100 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the section is in view
      variants={sectionVariants}
    >
      {/* Swiper with Fixed Height */}
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full"
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}" style="background-color: rgba(87, 3, 38); width: 12px; height: 12px;"></span>`,
        }}
        slidesPerView={1}
        spaceBetween={0}
        style={{ height: "400px" }} // Fixed height for the Swiper
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex h-full bg-[#570326]">
            <div className="relative w-full md:w-[65%] h-full overflow-hidden pointer-events-none">
              <img
                alt="Testimonial 1"
                className="absolute w-full h-full object-cover opacity-40"
                src="/imgs/quote/brock.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white" />
            </div>
            <div className="w-full md:w-[35%] flex flex-col justify-center px-6 bg-white pointer-events-auto">
              <div className="text-7xl text-[#570326]">&ldquo;</div>
              <p className="text-base md:text-lg font-medium leading-relaxed text-[#570326]">
                <em>
                  The reason I came this year was actually because I was
                  convinced by everyone. There’s only benefits when I came
                  here. Alhamdulillah, it’s also properly segregated.
                </em>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  alt="Brock University Student"
                  className="h-auto w-auto max-h-12"
                  src="/imgs/msa-logos/brock.png"
                />
                <div>
                  <p className="text-base font-bold text-[#570326]">
                    A Brock University Student
                  </p>
                  <p className="text-sm text-gray-500">Keynote Lecture</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex h-full bg-[#570326]">
            <div className="relative w-full md:w-[65%] h-full overflow-hidden pointer-events-none">
              <img
                alt="Testimonial 2"
                className="absolute w-full h-full object-cover opacity-40"
                src="/imgs/quote/wmsa.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white" />
            </div>
            <div className="w-full md:w-[35%] flex flex-col justify-center px-6 bg-white pointer-events-auto">
              <div className="text-7xl text-[#570326]">&ldquo;</div>
              <p className="text-base md:text-lg font-medium leading-relaxed text-[#570326]">
                <em>
                  It’s being around people from different universities and how we
                  come together for one [goal] - getting closer to our deen.
                </em>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  alt="Waterloo University Student"
                  className="h-auto w-auto max-h-12"
                  src="/imgs/msa-logos/wmsa.png"
                />
                <div>
                  <p className="text-base font-bold text-[#570326]">
                    A Waterloo University Student
                  </p>
                  <p className="text-sm text-gray-500">Keynote Panel Lecture</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex h-full bg-[#570326]">
            <div className="relative w-full md:w-[65%] h-full overflow-hidden pointer-events-none">
              <img
                alt="Testimonial 3"
                className="absolute w-full h-full object-cover opacity-40"
                src="/imgs/quote/tmu.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white" />
            </div>
            <div className="w-full md:w-[35%] flex flex-col justify-center px-6 bg-white pointer-events-auto">
              <div className="text-7xl text-[#570326]">&ldquo;</div>
              <p className="text-base md:text-lg font-medium leading-relaxed text-[#570326]">
                <em>
                  I love the sense of community. There’s a lot of people that I
                  met here at MIMC last year that I got to see again this year.
                  Also the lectures, they’re very informative and insightful mashaAllah.
                </em>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  alt="TMU University Student"
                  className="h-auto w-auto max-h-12"
                  src="/imgs/msa-logos/tmu.png"
                />
                <div>
                  <p className="text-base font-bold text-[#570326]">
                    A TMU Student
                  </p>
                  <p className="text-sm text-gray-500">Arabic Calligraphy Workshop</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex h-full bg-[#570326]">
            <div className="relative w-full md:w-[65%] h-full overflow-hidden pointer-events-none">
              <img
                alt="Testimonial 4"
                className="absolute w-full h-full object-cover opacity-40"
                src="/imgs/quote/macmsa.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white" />
            </div>
            <div className="w-full md:w-[35%] flex flex-col justify-center px-6 bg-white pointer-events-auto">
              <div className="text-7xl text-[#570326]">&ldquo;</div>
              <p className="text-base md:text-lg font-medium leading-relaxed text-[#570326]">
                <em>
                  One of the most inspiring things about MIMC is the vast amount
                  of people that come out, and as a result you hear about all
                  these different ideas, different perspectives.
                </em>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  alt="MacMSA University Student"
                  className="h-auto w-auto max-h-12"
                  src="/imgs/msa-logos/macmsa.png"
                />
                <div>
                  <p className="text-base font-bold text-[#570326]">
                    A McMaster University Student
                  </p>
                  <p className="text-sm text-gray-500">Shark Tank</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
}
