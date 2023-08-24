"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
 
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import { cars } from "/constants";

export default function CarSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[385px] mx-auto sm:mx-0 py-[3rem]">
              <Image src={car.image} width={380} height={284} alt={car.name} className="h-[280.3px] object-none" />
              <div className="flex justify-between">
                <div className="">
                  <div className="text-[13px] text-secondary uppercase ">
                    {car.type}{" "}
                  </div>
                  <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                  <div className="mb-10 text-accent font-semibold uppercase">
                    {car.price} / day
                  </div>
                </div>
                <div className="flex gap-x-2 text-accent h-max">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                {car.info.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                      <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        alt={item.text}
                      />
                    </div>
                    <div className="text-[12px] uppercase">{item.text}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-accent btn-lg">See Details</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
