"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa6";

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
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
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
            <div className="lg:pl-4 relative z-10">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Gemini Engineering Works Logo"
                  width={45}
                  height={45}
                  className="object-contain"
                />
                <span className="text-2xl font-bold text-[#1a1f2e] tracking-tight">
                  Gemini
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed font-light">
                Gemini is a trusted residential construction company in
                Location, delivering high-quality, innovative, and reliable
                home-building solutions.
              </p>
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
                {/* Address */}
                <div className="flex items-start gap-3">
                  <IoLocationOutline className="w-5 h-5 text-[#eba10e] flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-base">
                    123 Main Street, Springfield, IL 62704 United States
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <MdOutlineEmail className="w-5 h-5 text-[#eba10e] flex-shrink-0" />
                  <a
                    href="mailto:buildify@gmail.com"
                    className="text-gray-600 hover:text-[#eba10e] transition-colors duration-300 text-base no-underline"
                  >
                    buildify@gmail.com
                  </a>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <FiPhoneCall className="w-5 h-5 text-[#eba10e] flex-shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+911234567890"
                      className="text-gray-600 hover:text-[#eba10e] transition-colors duration-300 text-base no-underline"
                    >
                      +91 12345 67890
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="text-gray-600 hover:text-[#eba10e] transition-colors duration-300 text-base no-underline"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div>
              <h3 className="text-[#1a1f2e] text-lg font-semibold mb-6 flex items-center gap-3 uppercase tracking-wider">
                Google Map
                <span className="flex-1 h-[2px] bg-[#eba10e] max-w-[60px]"></span>
              </h3>
              <div className="w-full h-[180px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112879178!2d-122.41941548468225!3d37.77492977975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
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
            © {new Date().getFullYear()} Gemini. All rights reserved. This site
            is protected by reCAPTCHA and Google.
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
