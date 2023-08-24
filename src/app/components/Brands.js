"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

const brands = [
  {
    label: "ford",
  },
  {
    label: "audi",
  },
  {
    label: "bmw",
  },
  {
    label: "mazda",
  },
  {
    label: "skoda",
  },
  {
    label: "vw",
  },
];

export default function Brands() {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center ">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          {brands.map((brand, index) => (
            <div key={index}>
              <Image
                src={`/assets/icons/brands/${brand.label}.svg`}
                width={85}
                height={32}
                alt={brand.label}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
