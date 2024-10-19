"use client";

import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-600 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container pt-4 pb-4 mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Ismail</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 lg:gap-16">
          <li className="menuLink">
            <a
              href="#hero"
              className="text-white text-lg hover:text-yellow-300 transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li className="menuLink">
            <a
              href="#about"
              className="text-white text-lg hover:text-yellow-300 transition-all duration-300"
            >
              About
            </a>
          </li>
          <li className="menuLink">
            <a
              href="#projects"
              className="text-white text-lg hover:text-yellow-300 transition-all duration-300"
            >
              Projects
            </a>
          </li>
          <li className="menuLink">
            <a
              href="#skill"
              className="text-white text-lg hover:text-yellow-300 transition-all duration-300"
            >
              Skill
            </a>
          </li>
          <li className="menuLink">
            <a
              href="#contact"
              className="text-white text-lg hover:text-yellow-300 transition-all duration-300"
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <IoMenu
          className="md:hidden cursor-pointer text-white"
          size={30}
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 items-center mt-4 pb-4 md:hidden bg-blue-600">
          {["Home", "About", "Projects", "Skill", "Contact Me"].map((item) => (
            <li key={item} className="menuLink">
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-white text-lg hover:text-yellow-300 transition-all duration-300"
                onClick={toggleMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
