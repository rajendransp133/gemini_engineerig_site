import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Job Opening Button */}
      <a
        href="/jobopening"
        className="flex items-center justify-center gap-2 bg-[#343f52] hover:bg-[#2a3342] text-white font-bold px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
        aria-label="View job opening - Site Engineer"
      >
        <HiOutlineBriefcase className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
        <span className="hidden md:inline-block text-sm md:text-base whitespace-nowrap font-semibold">
          We&apos;re Hiring!
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916374448522"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
        aria-label="Contact us via WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
        <span className="hidden md:inline-block text-sm md:text-base whitespace-nowrap font-semibold">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
