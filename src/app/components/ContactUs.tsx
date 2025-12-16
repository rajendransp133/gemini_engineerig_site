"use client";

import Image from "next/image";
import SubHeading from "./SubHeading";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const ContactUs = () => {
  return (
    <section className="pt-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div>
            <SubHeading
              src="/images/civil_hat.webp"
              alt="Contact Us"
              width={48}
              height={48}
              leftText="Contact "
              rightText="Us"
            />

            <p className="text-lg text-gray-600 mb-8 font-light tracking-wide">
              We Are Just A Click Away
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center shadow-md flex-shrink-0">
                  <IoLocationOutline className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-600 text-base">
                  123 Main Street, Springfield, IL 62704 United States
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center shadow-md flex-shrink-0">
                  <MdOutlineEmail className="w-7 h-7 text-white" />
                </div>
                <a
                  href="mailto:buildify@gmail.com"
                  className="text-gray-600 text-base hover:text-[#eba10e] transition-colors"
                >
                  buildify@gmail.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center shadow-md flex-shrink-0">
                  <FiPhoneCall className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <a
                    href="tel:+911234567890"
                    className="text-gray-600 text-base hover:text-[#eba10e] transition-colors"
                  >
                    +91 12345 67890
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-600 text-base hover:text-[#eba10e] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="w-full h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
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

      {/* Animated JCB Truck */}
      <div className="relative mt-16 h-24 overflow-hidden">
        <div className="animate-truck-move absolute bottom-0">
          <Image
            src="/images/vehicle-2.svg"
            alt="JCB Truck"
            width={150}
            height={58}
            className="object-contain"
          />
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes truckMove {
          0% {
            transform: translateX(calc(100vw));
          }
          100% {
            transform: translateX(-150px);
          }
        }
        .animate-truck-move {
          animation: truckMove 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
