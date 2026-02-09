"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Button from "../ui/Button";

interface Product {
  title: string;
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
    title: "9 Metre PSC Pole (300kg WL)",
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
    title: "8m PSC Pole (200kg WL)",
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
          className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden pointer-events-auto animate-modal-in flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Card-style Dark Header */}
          <div className="relative bg-[#343f52] px-5 sm:px-6 pt-5 sm:pt-6 pb-8 sm:pb-10">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer border-none z-10"
              aria-label="Close modal"
            >
              <IoClose className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Title */}
            <div className="pr-10 sm:pr-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {product.title}
              </h2>
            </div>
          </div>

          {/* Wave separator - matching card style */}
          <div className="relative -mt-4">
            <svg
              viewBox="0 0 400 30"
              className="w-full h-5 text-white"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M0,20 C100,0 300,30 400,10 L400,30 L0,30 Z"
              />
            </svg>
          </div>

          {/* Card Body */}
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 flex-1 overflow-y-auto">
            {/* Description */}
            <div className="mb-5">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify roboto-font">
                {product.description}
              </p>
            </div>

            {/* Key Features - styled like card features */}
            <div className="space-y-3 mb-5">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center">
                      <FaArrowRight className="text-black text-[10px]" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed roboto-font">
                    <span className="font-semibold text-gray-800">
                      {feature.title}:
                    </span>{" "}
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider - matching card style */}
            <div className="h-px bg-gradient-to-r from-gray-200 via-amber-200 to-gray-200 mb-4" />

            {/* CTA */}
            <Link href="/contact" className="block no-underline">
              <Button className="w-full cursor-pointer">
                Contact Us for Pricing
              </Button>
            </Link>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#eba10e] to-[#f5c04a]" />
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
    <section
      className="py-16 md:py-24 bg-gray-50"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/images/civil_hat.webp"
              alt="Products icon - Electric pole manufacturing"
              width={50}
              height={50}
              className="object-contain"
            />
            <h2
              id="products-heading"
              className="text-3xl md:text-4xl font-bold"
            >
              <span className="text-[#343f52]">Our </span>
              <span className="text-[#eba10e]">Products</span>
            </h2>
          </div>
          <p className="text-[#343f52] text-lg opacity-80 max-w-3xl mx-auto roboto-font">
            High-quality PSC & RCC electric poles manufactured to meet Indian
            Standard specifications
          </p>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => openModal(product)}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 cursor-pointer group overflow-hidden hover:-translate-y-1.5 flex flex-col"
            >
              {/* Top Header */}
              <div className="relative bg-[#343f52] px-5 pt-5 pb-8">
                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-snug">
                  {product.title}
                </h3>
              </div>

              {/* Wave separator */}
              <div className="relative -mt-4">
                <svg
                  viewBox="0 0 400 30"
                  className="w-full h-5 text-white"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="currentColor"
                    d="M0,20 C100,0 300,30 400,10 L400,30 L0,30 Z"
                  />
                </svg>
              </div>

              {/* Card Body */}
              <div className="px-5 pb-5 pt-0 flex flex-col justify-between flex-1">
                {/* Key specs preview */}
                <div className="space-y-2.5 mb-5">
                  {product.features.slice(0, 2).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full  flex items-center justify-center">
                          <FaArrowRight className="text-black text-[10px]" />
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 roboto-font">
                        <span className="font-semibold text-gray-800">
                          {feature.title}:
                        </span>{" "}
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-gray-200 via-amber-200 to-gray-200 mb-4" />

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-[#eba10e] font-semibold text-sm group-hover:text-amber-600 transition-colors">
                    View Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-amber-50 group-hover:bg-[#eba10e] flex items-center justify-center transition-all duration-300">
                    <svg
                      className="w-3.5 h-3.5 text-[#eba10e] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#eba10e] to-[#f5c04a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
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
