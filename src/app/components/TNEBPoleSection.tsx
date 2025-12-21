"use client";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              TNEB Standard
              <span className="block text-[#eba10e]">Pole Manufacturing</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We specialize in the high-volume production of electric poles
              designed strictly according to{" "}
              <span className="text-[#eba10e] font-semibold">
                Tamil Nadu Electricity Board (TNEB)
              </span>{" "}
              specifications.
            </p>

            {/* Features List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#eba10e]/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center shadow-lg shadow-[#eba10e]/20 group-hover:scale-110 transition-transform duration-300">
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

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#eba10e] to-[#f5c04a] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#eba10e]/30 hover:scale-105 transition-all duration-300 no-underline"
              >
                <span>Request a Quote</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
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
                {/* Electric pole illustration */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    {/* Pole structure */}
                    <svg
                      className="w-48 h-64"
                      viewBox="0 0 120 180"
                      fill="none"
                    >
                      {/* Main pole */}
                      <path
                        d="M54 180 L50 20 L70 20 L66 180 Z"
                        fill="url(#poleGradient)"
                        stroke="#eba10e"
                        strokeWidth="1.5"
                      />
                      {/* Cross arm */}
                      <rect
                        x="15"
                        y="30"
                        width="90"
                        height="6"
                        rx="2"
                        fill="#4a5568"
                        stroke="#eba10e"
                        strokeWidth="1"
                      />
                      {/* Insulators */}
                      <circle cx="25" cy="33" r="6" fill="#eba10e" />
                      <circle cx="60" cy="33" r="6" fill="#eba10e" />
                      <circle cx="95" cy="33" r="6" fill="#eba10e" />
                      {/* Wires */}
                      <path
                        d="M25 33 Q 0 50, 25 33"
                        stroke="#eba10e"
                        strokeWidth="1"
                        opacity="0.5"
                      />
                      <path
                        d="M95 33 Q 120 50, 95 33"
                        stroke="#eba10e"
                        strokeWidth="1"
                        opacity="0.5"
                      />
                      {/* TNEB Label */}
                      <rect
                        x="48"
                        y="60"
                        width="24"
                        height="14"
                        rx="2"
                        fill="#eba10e"
                      />
                      <text
                        x="60"
                        y="70"
                        textAnchor="middle"
                        fill="white"
                        fontSize="6"
                        fontWeight="bold"
                      >
                        TNEB
                      </text>
                      <defs>
                        <linearGradient
                          id="poleGradient"
                          x1="60"
                          y1="20"
                          x2="60"
                          y2="180"
                        >
                          <stop offset="0%" stopColor="#718096" />
                          <stop offset="100%" stopColor="#4a5568" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Glowing effect */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#eba10e]/20 rounded-full blur-2xl" />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-[#eba10e] mb-1">
                      TNEB
                    </div>
                    <div className="text-gray-400 text-sm">Certified</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-[#eba10e] mb-1">
                      IS:1678
                    </div>
                    <div className="text-gray-400 text-sm">Standards</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-[#eba10e] mb-1">
                      Bulk
                    </div>
                    <div className="text-gray-400 text-sm">Production</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-[#eba10e] mb-1">
                      100%
                    </div>
                    <div className="text-gray-400 text-sm">Quality Tested</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom highlight bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            "100% Compliance with TNEB Norms",
            "ISI Grade Raw Materials",
            "High-Output Production Capacity",
            "On-Time Delivery",
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
