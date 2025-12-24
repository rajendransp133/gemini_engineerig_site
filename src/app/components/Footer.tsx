"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa6";
import LogoIcon from "./LogoIcon";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#e8eaed]">
      {/* Main Footer Content */}
      <div className="relative">
        {/* Background Image for Left Side */}
        <div
          className="absolute left-0 bottom-0 w-[400px] h-full bg-no-repeat bg-left-bottom bg-contain pointer-events-none hidden lg:block"
          style={{ backgroundImage: "url('/images/bg-3.svg')" }}
        />

        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info Section */}
            <div className="lg:pl-4 relative z-10 flex flex-col gap-4">
              {/* Logo */}
              <LogoIcon />

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Gemini Engineering Works is a trusted manufacturer of PSC & RCC
                electric poles since 1999. We deliver high-quality, durable
                poles for power distribution and electrification projects.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">GSTIN:</span> 33AFQPM3686K1ZT
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-[#1a1f2e] text-lg font-semibold mb-6 flex items-center gap-3 uppercase tracking-wider">
                Quick Links
                <span className="flex-1 h-[2px] bg-[#eba10e] max-w-[60px]"></span>
              </h3>
              <ul className="space-y-3 list-none p-0 m-0">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#eba10e] transition-colors duration-300 text-base no-underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="text-[#1a1f2e] text-lg font-semibold mb-6 flex items-center gap-3 uppercase tracking-wider">
                Contact Us
                <span className="flex-1 h-[2px] bg-[#eba10e] max-w-[60px]"></span>
              </h3>
              <div className="space-y-4">
                {/* Address 1 */}
                <div className="flex items-start gap-3">
                  <IoLocationOutline className="w-5 h-5 text-[#eba10e] flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-sm">
                    SFNO. 27/6F2 Ganesh Nagar, Sathiyamangalam, Kuluthur TK
                    Vellanur, Pudukkottai - 622501
                  </p>
                </div>

                {/* Address 2 */}
                <div className="flex items-start gap-3">
                  <IoLocationOutline className="w-5 h-5 text-[#eba10e] flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-sm">
                    1157 housing unit, periya nagar, Pudukkottai - 622003
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-end gap-3">
                  <MdOutlineEmail className="w-5 h-5 text-[#eba10e] flex-shrink-0" />
                  <span className="text-gray-600 text-base">
                    geminienggworks@gmail.com
                  </span>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-center gap-3 ">
                  <FiPhoneCall className="w-5 h-5 text-[#eba10e] flex-shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <div className="text-gray-600 hover:text-[#eba10e] transition-colors duration-300 text-base no-underline">
                      +91 94432 11374
                    </div>
                    <div className="text-gray-600 hover:text-[#eba10e] transition-colors duration-300 text-base no-underline">
                      +91 75400 44061
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div>
              <h3 className="text-[#1a1f2e] text-lg font-semibold mb-6 flex items-center gap-3 uppercase tracking-wider">
                Our Location
                <span className="flex-1 h-[2px] bg-[#eba10e] max-w-[60px]"></span>
              </h3>
              <div className="w-full h-[180px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d78.7853814!3d10.4763535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa83888347f56d%3A0xe2b955cc24a956e9!2sGemini%20Engineering%20works!5e0!3m2!1sen!2sin!4v1703145600000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gemini Engineering Works - Pudukkottai"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-300 bg-[#e8eaed]">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Gemini Engineering Works. All rights
            reserved. | PSC & RCC Pole Casting Yard, Pudukkottai
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#eba10e] text-white flex items-center justify-center shadow-lg cursor-pointer border-none transition-all duration-300 hover:bg-[#d4910d] hover:scale-110 z-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
