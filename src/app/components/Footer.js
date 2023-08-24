"use client";

import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import Copyright from "./Copyright";
import { fadeIn } from "/variants";
import { footerLinks1, workingHours } from "../../../constants";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            <Link to={"home"} smooth={true} className="cursor-pointer">
              <Image
                src={"/logos/vector/default-monochrome.svg"}
                width={200}
                height={200}
                alt="logo"
              />
            </Link>
            <div className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              laborum totam velit quos ab. Architecto.
            </div>
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">+(233) 204 453 342</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">info@eliteauto.com</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                {footerLinks1.map((link, index) => (
                  <li key={index}>{link.label}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              {workingHours.map((hours, index) => (
                <div key={index} className="flex gap-x-2">
                  <div className="text-secondary">{hours.day} : </div>
                  <div className="font-semibold">{hours.time}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">NewsLetter</h3>
            <div className="flex flex-col gap-y-4">
              <div className="mb-9 text-secondary">
                EliteAuto - Elevate Your Drive. Discover a world of luxury and
                performance with our exceptional selection of premium vehicles.
                Your journey to excellence starts with EliteAuto.
              </div>
              <form action="" className="flex gap-x-2 h-14">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"
                />
                <button className="btn btn-sm btn-accent w-24" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}
