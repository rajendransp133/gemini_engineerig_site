"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/916374448522"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-5 py-4 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Contact us via WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0" />
      <span className="hidden md:inline-block text-base md:text-lg whitespace-nowrap font-semibold">
        WhatsApp Us
      </span>
    </a>
  );
};

export default WhatsAppButton;

