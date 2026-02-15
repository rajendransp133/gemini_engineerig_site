import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import LogoIcon from "./LogoIcon";
import ShareButtons from "../components/ShareButtons";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Get Quote", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#e8eaed]">
      {/* Main Footer Content */}
      <div className="relative">
        {/* Background Image for Left Side */}
        <div
          className="absolute left-0 bottom-0 w-[400px] h-full bg-no-repeat opacity-20 bg-left-bottom bg-contain pointer-events-none hidden lg:block"
          style={{ backgroundImage: "url('/images/bg-3.svg') " }}
        />

        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info Section */}
            <div className="lg:pl-4 relative z-10 flex flex-col gap-4">
              {/* Logo */}
              <LogoIcon variant="footer" />

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Gemini Engineering Works is a trusted manufacturer of PSC & RCC
                electric poles in Tamilnadu since 1999. Buy quality poles for
                power distribution and electrification projects across Tamil
                Nadu.
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
                      className="text-gray-600 hover:text-[#eba10e] transition-colors duration-300 text-base no-underline roboto-font"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reach Us Section */}
            <div>
              <h3 className="text-[#1a1f2e] text-lg font-semibold mb-6 flex items-center gap-3 uppercase tracking-wider">
                Reach Us
                <span className="flex-1 h-[2px] bg-[#eba10e] max-w-[60px]"></span>
              </h3>
              <div className="space-y-4">
                {/* Address 1 */}
                <div className="flex items-start gap-3">
                  <IoLocationOutline className="w-5 h-5 text-[#eba10e] flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-sm roboto-font">
                    SFNO. 27/6F2 Ganesh Nagar, Sathiyamangalam, Kuluthur TK
                    Vellanur, Pudukkottai - 622501
                  </p>
                </div>

                {/* Address 2 */}
                <div className="flex items-start gap-3">
                  <IoLocationOutline className="w-5 h-5 text-[#eba10e] flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-sm roboto-font">
                    1157 housing unit, periya nagar, Pudukkottai - 622003
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-end gap-3">
                  <MdOutlineEmail className="w-5 h-5 text-[#eba10e] flex-shrink-0" />
                  <span className="text-gray-600 text-base roboto-font">
                    geminienggworks@gmail.com
                  </span>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-center gap-3 ">
                  <FiPhoneCall className="w-5 h-5 text-[#eba10e] flex-shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <div className="text-gray-600 hover:text-[#eba10e] transition-colors duration-300 text-base no-underline roboto-font">
                      +91 63744 48522
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Share */}

            {/* Location Link Section - Map kept in Contact section for performance */}
            <div>
              <h3 className="text-[#1a1f2e] text-lg font-semibold mb-6 flex items-center gap-3 uppercase tracking-wider">
                Our Location
                <span className="flex-1 h-[2px] bg-[#eba10e] max-w-[60px]"></span>
              </h3>
              <a
                href="https://maps.google.com/?q=10.4763535,78.7853814"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-[#eba10e] transition-colors text-sm roboto-font no-underline"
              >
                View on Google Maps →
              </a>
              <p className="text-gray-600 text-sm roboto-font mt-2">
                SFNO. 27/6F2 Ganesh Nagar, Sathiyamangalam, Pudukkottai - 622501
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-300 bg-[#e8eaed]">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <p className="text-center text-gray-600 text-sm roboto-font">
            © {new Date().getFullYear()} Gemini Engineering Works. All rights
            reserved. | PSC & RCC Pole Manufacturers, Pudukkottai, Tamilnadu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
