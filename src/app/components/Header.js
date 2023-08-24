"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

import SearchMobile from "./SearchMobile";

import { BiMenuAltRight, BiX } from "react-icons/bi";
import { navLinks } from "../../../constants";
import { SearchContext } from "../context/search";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px) ",
  });

  useEffect(() => {
    const handleScroll = () => {
      // header
      if (window.scrollY > 40) {
        setHeader(true); // Change this to true if you want to set the header to true when scrolling down
      } else {
        setHeader(false);
      }

      // Search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add an empty dependency array here
  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 `}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image
              src="/assets/icons/logo.svg"
              width={194}
              height={64}
              alt="logo"
            />
          </Link>
          {/* nav menu  */}
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* Nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case `}
        >
          {navLinks.map((links) => (
            <Link
              className="cursor-pointer"
              to={links.href}
              activeClass="active"
              smooth={desktopMode}
              spy={true}
              onClick={() => setNav(false)}
            >
              {links.label}
            </Link>
          ))}
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto "
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See All cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
