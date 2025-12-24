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
                  SFNO. 27/6F2 Ganesh Nagar, Sathiyamangalam, Kuluthur TK
                  Vellanur, Pudukkottai - 622501
                </p>
              </div>

              {/* GSTIN */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center shadow-md flex-shrink-0">
                  <MdOutlineEmail className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Email</span>
                  <span className="text-gray-700 text-base font-medium">
                    geminienggworks@gmail.com
                  </span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center shadow-md flex-shrink-0">
                  <FiPhoneCall className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <div className="text-gray-600 text-base hover:text-[#eba10e] transition-colors">
                    +91 94432 11374
                  </div>
                  <div className="text-gray-600 hover:text-[#eba10e] transition-colors duration-300 text-base no-underline">
                    +91 75400 44061
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="w-full h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d78.7853814!3d10.4763535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa83888347f56d%3A0xe2b955cc24a956e9!2sGemini%20Engineering%20works!5e0!3m2!1sen!2sin!4v1703145600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gemini Engineering Works Location - Pudukkottai"
            />
          </div>
        </div>
      </div>

      {/* Animated JCB Truck */}
      <div className="relative mt-16 h-24 w-full">
        <div className="absolute bottom-0 left-0 animate-truck-move">
          <Image
            src="/images/vehicle-1.svg"
            alt="JCB Truck"
            width={150}
            height={58}
            className="object-contain -scale-x-100"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
