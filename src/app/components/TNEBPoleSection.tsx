"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaCog, FaRulerCombined, FaTruck } from "react-icons/fa";

const features = [
  {
    icon: FaCog,
    title: "Precision Casting",
    description:
      "Ensuring uniform strength and structural integrity in every pole we manufacture.",
  },
  {
    icon: FaRulerCombined,
    title: "Standardized Designs",
    description:
      "Fully compliant with state utility requirements for height, load, and durability.",
  },
  {
    icon: FaTruck,
    title: "Bulk Supply",
    description:
      "Capable of meeting large-scale departmental tenders on tight deadlines.",
  },
];

const TNEBPoleSection = () => {
  return (
    <section
      className="relative py-12 md:py-24 overflow-hidden"
      aria-labelledby="tneb-heading"
    >
      {/* Background with diagonal pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#243044] to-[#1a2332]">
        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#eba10e]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#eba10e]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2
          id="tneb-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight"
        >
          TNEB Standard Pole Manufacturing
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-2xl roboto-font">
          We specialize in the high-volume production of electric poles designed
          strictly according to{" "}
          <span className="text-[#eba10e] font-semibold roboto-font">
            Tamil Nadu Electricity Board (TNEB)
          </span>{" "}
          specifications.
        </p>

        {/* Features and Visual Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Features List */}
          <div className="space-y-3 sm:space-y-5 order-2 lg:order-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 items-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed roboto-font line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Visual */}
          <div className="order-1 lg:order-2 relative">
            {/* Main visual card */}
            <div className="relative">
              {/* Decorative elements - hidden on small mobile, visible from sm up */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 border-l-4 border-t-4 border-[#eba10e]/40 rounded-tl-3xl" />
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-r-4 border-b-4 border-[#eba10e]/40 rounded-br-3xl" />

              {/* Visual card */}
              <div className="relative bg-gradient-to-br from-[#2a3a50] to-[#1f2d3f] rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
                {/* TNEB Logo */}
                <div className="relative flex justify-center">
                  <Image
                    src="/tneb.webp"
                    alt="Tamil Nadu Electricity Board (TNEB) logo - Official supplier certification"
                    width={380}
                    height={200}
                    className="rounded-xl object-contain w-full max-w-[380px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 md:mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 no-underline roboto-font"
          >
            Request a Quote
          </Link>
        </div>

        {/* Bottom highlight bar */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {[
            "100% Compliance with TNEB Norms",
            "ISI Grade Raw Materials",
            "High-Output Production Capacity",
            "Government Tenders",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-300 text-sm md:text-base roboto-font"
            >
              <FaCheckCircle className="text-[#eba10e] flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TNEBPoleSection;
