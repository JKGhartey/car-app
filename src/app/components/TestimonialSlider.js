"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

import { fadeIn } from "/variants";
import { testimonialData } from "../../../constants";

export default function TestimonialSlider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="h-[450px] xl:h-[400px]"
     
    >
      {testimonialData.map((person, index) => {
        const { message, avatar, job, name } = person;
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center text-center">
              <FaQuoteLeft className="text-7xl text-accent mb-6" />
              <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                {message}
              </div>
              <Image
                src={avatar}
                width={64}
                height={64}
                alt="person"
                className="mb-4"
              />
              <div className="text-lg font-medium">{name} </div>
              <div className="text-secondary">{job}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
