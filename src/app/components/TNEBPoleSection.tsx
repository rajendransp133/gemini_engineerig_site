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
    <section className="relative py-16 md:py-24 overflow-hidden">
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          TNEB Standard
          <span className="block text-[#eba10e]">Pole Manufacturing</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl">
          We specialize in the high-volume production of electric poles designed
          strictly according to{" "}
          <span className="text-[#eba10e] font-semibold">
            Tamil Nadu Electricity Board (TNEB)
          </span>{" "}
          specifications.
        </p>

        {/* Features and Visual Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Features List */}
          <div className="space-y-5 order-2 lg:order-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
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
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-[#eba10e]/40 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-[#eba10e]/40 rounded-br-3xl" />

              {/* Visual card */}
              <div className="relative bg-gradient-to-br from-[#2a3a50] to-[#1f2d3f] rounded-2xl p-8 border border-white/10">
                {/* TNEB Logo */}
                <div className="relative flex justify-center">
                  <Image
                    src="/tneb.jpg"
                    alt="Tamil Nadu Electricity Board"
                    width={380}
                    height={200}
                    className="rounded-xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 no-underline"
          >
            Request a Quote
          </Link>
        </div>

        {/* Bottom highlight bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            "Compliance with TNEB Norms",
            "ISI Grade Raw Materials",
            "High-Output Production Capacity",
            "Government Tenders",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-300 text-sm md:text-base"
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
