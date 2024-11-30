"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  return (
    <section className="px-0 md:px-0 mt-20 mb-100">
      {/* Swiper with Dynamic Pagination */}
      <Swiper
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full"
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}" style="background-color: rgba(255, 255, 255, 0.5); width: 12px; height: 12px;"></span>`,
        }}
        slidesPerView={1}
        spaceBetween={10}
      >
        {/* Slide 1 - Brock */}
        <SwiperSlide>
          <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-10">
            {/* Image Section */}
            <div className="relative w-full md:w-[65%] h-64 md:h-80 overflow-hidden">
              <img
                alt="Testimonial 1"
                className="absolute w-full h-full object-cover"
                src="/imgs/quote/brock.jpg" // Replace with your image path
              />
              {/* Gradient Overlay for Fade Effect */}
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-black via-transparent to-transparent" />
            </div>

            {/* Testimonial Content */}
            <div className="relative w-full md:w-[35%] text-left flex flex-col gap-4 px-4 md:px-8 bg-black bg-opacity-50 py-6 rounded-lg">
              <div className="text-4xl text-white/70">&ldquo;</div>
              <p className="text-base md:text-lg font-medium leading-relaxed">
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
                  <p className="text-base font-bold">
                    A Brock University Student
                  </p>
                  <p className="text-sm text-white/70">Keynote Lecture</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Waterloo */}
        <SwiperSlide>
          <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-10">
            {/* Image Section */}
            <div className="relative w-full md:w-[65%] h-64 md:h-80 overflow-hidden">
              <img
                alt="Testimonial 1"
                className="absolute w-full h-full object-cover"
                src="/imgs/quote/wmsa.jpg" // Replace with your image path
              />
              {/* Gradient Overlay for Fade Effect */}
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-black via-transparent to-transparent" />
            </div>

            {/* Testimonial Content */}
            <div className="relative w-full md:w-[35%] text-left flex flex-col gap-4 px-4 md:px-8 bg-black bg-opacity-50 py-6 rounded-lg">
              <div className="text-4xl text-white/70">&ldquo;</div>
              <p className="text-base md:text-lg font-medium leading-relaxed">
                <em>
                  It’s being around people from different universities and how we come together for one [goal] - getting closer to our deen.
                </em>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  alt="Waterloo University Student"
                  className="h-auto w-auto max-h-12"
                  src="/imgs/msa-logos/wmsa.png"
                />
                <div>
                  <p className="text-base font-bold">
                    A Waterloo University Student
                  </p>
                  <p className="text-sm text-white/70">Keynote Panel Lecture</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - TMU */}
        <SwiperSlide>
          <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-10">
            {/* Image Section */}
            <div className="relative w-full md:w-[65%] h-64 md:h-80 overflow-hidden">
              <img
                alt="Testimonial 1"
                className="absolute w-full h-full object-cover"
                src="/imgs/quote/tmu.jpg" // Replace with your image path
              />
              {/* Gradient Overlay for Fade Effect */}
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-black via-transparent to-transparent" />
            </div>

            {/* Testimonial Content */}
            <div className="relative w-full md:w-[35%] text-left flex flex-col gap-4 px-4 md:px-8 bg-black bg-opacity-50 py-6 rounded-lg">
              <div className="text-4xl text-white/70">&ldquo;</div>
              <p className="text-base md:text-lg font-medium leading-relaxed">
                <em>
                  I love the sense of community. There’s a lot of people that I
                  met here at MIMC last year that I got to see again this year.
                  Also the lectures, they’re very informative and insightful mashaAllah.
                </em>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  alt="TMU University Student"
                  className="h-auto w-auto max-h-12 object-contain"
                  src="/imgs/msa-logos/tmu.png"
                />
                <div>
                  <p className="text-base font-bold">A TMU Student</p>
                  <p className="text-sm text-white/70">
                    Arabic Calligraphy Workshop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 - MacMsa */}
        <SwiperSlide>
          <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-10">
            {/* Image Section */}
            <div className="relative w-full md:w-[65%] h-64 md:h-80 overflow-hidden">
              <img
                alt="Testimonial 1"
                className="absolute w-full h-full object-cover"
                src="/imgs/quote/macmsa.jpg" // Replace with your image path
              />
              {/* Gradient Overlay for Fade Effect */}
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-black via-transparent to-transparent" />
            </div>

            {/* Testimonial Content */}
            <div className="relative w-full md:w-[35%] text-left flex flex-col gap-4 px-4 md:px-8 bg-black bg-opacity-50 py-6 rounded-lg">
              <div className="text-4xl text-white/70">&ldquo;</div>
              <p className="text-base md:text-lg font-medium leading-relaxed">
                <em>
                  One of the most inspiring things about MIMC is the vast amount
                  of people that come out, and as a result you hear about all
                  these different ideas, different perspectives.
                </em>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  alt="Mac University Student"
                  className="h-auto w-auto max-h-12 object-contain"
                  src="/imgs/msa-logos/macmsa.png"
                />
                <div>
                  <p className="text-base font-bold">
                    A McMaster University Student
                  </p>
                  <p className="text-sm text-white/70">Shark Tank</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
