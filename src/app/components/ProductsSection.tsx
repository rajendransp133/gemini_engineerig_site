"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

interface Product {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  image: string;
}

const products: Product[] = [
  {
    title: "9 Metre RCC Poles (150kg)",
    subtitle: "Standard Duty",
    description:
      "The 9-metre RCC Square  Pole with 150kg working load is ideal for standard electrical distribution  projects. Manufactured with M25 grade concrete and 0.285m³ concrete volume per pole. Features  design with 12.5cm×12.5cm top and 22.5cm×22.5cm bottom dimensions. Each pole weighs approximately 700kg with 1.70m planting depth.",
    features: [
      {
        title: "Load Capacity",
        description:
          "150kg working load with 2.0 factor of safety (300kg ultimate load).",
      },
      {
        title: "Height",
        description: "9 metres ",
      },
      {
        title: "Cost-Effective",
        description:
          "Economical solution for electrification and lighting projects.",
      },
    ],
    image: "/images/products/rcc-pole-150kg.webp",
  },
  {
    title: "9.0 Metre PSC Pole (300kg WL)",
    subtitle: "REC Standard Design",
    description:
      "The 9.0 metre PSC pole is designed for a working load of 300 kg with a factor of safety of 2.0. Manufactured with M40 grade concrete and reinforced with 16 Nos. of 4mm HTS wires (all tensioned). Each pole requires 0.243m³ of concrete and approximately 117.86kg of cement. The pole weighs approximately 607kg with section dimensions of 18.5cm × 10.0cm at the top and 35.5cm × 10.0cm at the bottom, with a uniform thickness of 10.0cm throughout.",
    features: [
      {
        title: "Dimensions & Weight",
        description:
          "9.00m length. Top: 18.5cm × 10.0cm, Bottom: 35.5cm × 10.0cm. Weight: 607kg (approx).",
      },
      {
        title: "Load Capacity",
        description:
          "300kg working load with 2.0 factor of safety. Ultimate tensile strength: 175Kg/mm².",
      },
      {
        title: "Specifications",
        description:
          "M40 concrete (0.243m³ per pole). 16 Nos. of 4mm HTS wires (tensioned). 20mm clear cover.",
      },
    ],
    image: "/images/products/psc-pole-9m-300kg.webp",
  },

  {
    title: "8.00m PSC Pole (200kg WL)",
    subtitle: "Pre-Stressed Concrete",
    description:
      "The 8.00m PSC pole is designed for a working load of 200kg with a factor of safety of 2.5. Manufactured with M42 grade concrete and reinforced with 14 Nos. of 4mm HTS wires (12 tensioned, 2 untensioned). Each pole requires 0.156m³ of concrete and approximately 75.951kg of cement. The pole weighs approximately 378kg with section dimensions of 14.5cm × 9cm at the top and 29.0cm × 9cm at the bottom, with a uniform thickness of 9.0cm throughout.",
    features: [
      {
        title: "Dimensions & Weight",
        description:
          "8.00m length. Top: 14.5cm × 9cm, Bottom: 29.0cm × 9cm. Thickness: 9.0cm. Weight: 378kg (approx).",
      },
      {
        title: "Load Capacity",
        description:
          "200kg working load with 2.5 factor of safety. Ultimate tensile strength: 175Kg/mm².",
      },
      {
        title: "Specifications",
        description:
          "M42 concrete (0.156m³ per pole). 14 Nos. of 4mm HTS wires (12 tensioned, 2 untensioned). Cement: 75.951kg per pole.",
      },
    ],
    image: "/images/products/psc-pole.webp",
  },
  {
    title: "RCC Base Plates",
    subtitle: "450mm × 450mm × 75mm",
    description:
      "High-quality RCC base plates designed to provide stable foundation support for electric poles. Manufactured with M15 grade concrete and reinforced with HTS wire 4mm thick . Each base plate weighs approximately 37.40kg with 0.0152m³ concrete volume, ensuring perfect compatibility with all our pole types.",
    features: [
      {
        title: "Premium Specifications",
        description:
          "Size: 450mm × 450mm, Thickness: 75mm, Weight: 37.40kg (approx)",
      },
      {
        title: "M15 Concrete Mix",
        description:
          "High-strength concrete with 25mm clear cover to reinforcement for durability.",
      },
      {
        title: "HTS Wire Reinforcement",
        description: "4mm thick HTS wire @ 50mm c/c ",
      },
    ],
    image: "/images/products/base-plate.webp",
  },
];

// Product Modal Component
const ProductModal = ({
  product,
  isOpen,
  onClose,
}: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !product) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[1001] flex items-center justify-center p-3 sm:p-4 md:p-6 pointer-events-none">
        <div
          className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto pointer-events-auto animate-modal-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header with Gradient */}
          <div className="relative bg-gradient-to-r from-[#eba10e] to-[#f5c04a] p-4 sm:p-6 pb-10 sm:pb-12">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200 cursor-pointer border-none z-10"
              aria-label="Close modal"
            >
              <IoClose className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Header Content */}
            <div className="pr-10 sm:pr-12">
              <span className="inline-block px-2.5 py-1 sm:px-3 bg-white/20 rounded-full text-white text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                {product.subtitle}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5 sm:mb-2 leading-tight">
                {product.title}
              </h2>
            </div>
          </div>

          {/* Decorative Wave */}
          <div className="relative -mt-5 sm:-mt-6">
            <svg
              viewBox="0 0 1440 120"
              className="w-full h-10 sm:h-12 text-white"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              />
            </svg>
          </div>

          {/* Modal Body */}
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 sm:pt-2">
            {/* Description */}
            <div className="mb-4 sm:mb-6">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#343f52] mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-6 sm:w-8 h-1 bg-[#eba10e] rounded-full"></span>
                Key Features
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-amber-50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center">
                        <FaCheckCircle className="text-white text-xs sm:text-sm" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[#343f52] mb-0.5 sm:mb-1 text-sm sm:text-base">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
              <Link
                href="/contact"
                className="block w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-[#eba10e] to-[#f5c04a] text-white text-center text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 no-underline"
              >
                Contact Us for Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-in {
          animation: modalIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/images/civil_hat.webp"
              alt="Products"
              width={50}
              height={50}
              className="object-contain"
            />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#343f52]">Our </span>
              <span className="text-[#eba10e]">Products</span>
            </h2>
          </div>
          <p className="text-[#343f52] text-lg opacity-80 max-w-2xl mx-auto">
            High-quality PSC & RCC electric poles manufactured to meet Indian
            Standard specifications
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => openModal(product)}
              className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border-l-4 border-[#eba10e] overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50/0 to-amber-50/0 group-hover:from-amber-50/30 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

              {/* Product Content */}
              <div className="relative p-8">
                {/* Subtitle Badge */}
                <span className="inline-block text-xs font-semibold text-amber-600 uppercase tracking-wider mb-3">
                  {product.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {product.title}
                </h3>

                {/* Tagline */}

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-[#eba10e] to-transparent mb-6" />

                {/* View Details Link */}
                <div className="flex items-center gap-2 text-[#eba10e] font-medium text-sm">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specifications Note */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            <strong>Quality Assured:</strong> All our poles are manufactured as
            per{" "}
            <span className="font-semibold text-amber-700">IS 1678:1998</span>{" "}
            standards and undergo rigorous load testing, bending tests, and
            crack resistance tests before dispatch.
          </p>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProductsSection;
