"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoIcon from "./LogoIcon";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-out bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)] ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo Section */}
          <LogoIcon />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-2 lg:gap-3 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative px-5 py-2.5 rounded-lg text-[15px] font-medium tracking-wide transition-all duration-300 no-underline group text-[#343f52] hover:text-[#1a1f2e] hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                    <span className="absolute bottom-1.5 left-5 right-5 h-0.5 rounded-full transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 bg-amber-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden border-none cursor-pointer p-3 rounded-xl transition-all duration-300 bg-gray-100 text-[#343f52] hover:bg-gray-200"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1001] transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-[min(320px,85vw)] h-screen bg-white z-[1002] transition-transform duration-500 ease-out flex flex-col shadow-[4px_0_40px_rgba(0,0,0,0.1)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="px-5 py-5 flex items-center justify-between">
          <div onClick={() => setIsOpen(false)}>
            <LogoIcon />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="bg-transparent border border-gray-300 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100"
          >
            <FaXmark className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-5 overflow-y-auto flex flex-col gap-3">
          <ul className="list-none m-0 p-0 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 0.08 + 0.1}s` : "0s",
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#343f52] no-underline text-base font-medium py-4 transition-colors duration-300 hover:text-amber-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer - Contact Info */}
        <div
          className={`p-5 transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isOpen ? "0.5s" : "0s" }}
        >
          <div className="flex flex-col gap-3 ">
            {/* Owner */}
            <div className="flex items-center gap-3 text-gray-600">
              <MdOutlineEmail className="w-5 h-5 text-amber-500" />
              <span className="text-sm">Prop: AS. Manikandan</span>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-3">
              <FiPhoneCall className="w-5 h-5 text-amber-500 mt-0.5" />
              <div className="flex flex-col gap-1">
                {/* <div className="text-sm text-gray-600 no-underline transition-colors duration-300 hover:text-amber-600">
                  +91 94432 11374
                </div> */}
                <div className="text-sm text-gray-600 no-underline transition-colors duration-300 hover:text-amber-600">
                  +91 63744 48522
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
