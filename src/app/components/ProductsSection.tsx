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
  redirectImage?: string;
  redirectLink?: string;
}

const products: Product[] = [
  {
    title: "9m RCC Pole ",
    description:
      "Buy 9-metre RCC pole (Reinforced Cement Concrete Pole) in TamilNadu with 150kg working load. Ideal for standard electrical distribution projects in TN. Manufactured with M25 grade concrete and 0.285m³ concrete volume per pole. Features design with 12.5cm×12.5cm top and 22.5cm×22.5cm bottom dimensions. Each pole weighs approximately 700kg with 1.70m planting depth. Buy RCC poles in Tamilnadu from Gemini Engineering Works, Pudukkottai.",
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
    redirectImage: "/Government_e_Marketplace_Logo.png",
    redirectLink:
      "https://mkp.gem.gov.in/reinforced-concrete-poles-overhead-power-telecommunication-lines-785/reinforced-concrete-poles/p-5116877-77720843346-cat.html#variant_id=5116877-77720843346",
  },
  {
    title: "9m PSC Pole (300kg) ",
    description:
      "Buy 9m PSC pole (Pre-stressed Concrete Pole) in Tamil Nadu with 300kg working load and factor of safety 2.0. Manufactured with M40 grade concrete and reinforced with 16 Nos. of 4mm HTS wires (all tensioned). Each pole requires 0.243m³ of concrete and approximately 117.86kg of cement. Weighs approximately 607kg with section dimensions of 18.5cm × 10.0cm at top and 35.5cm × 10.0cm at bottom. Buy PSC pole in Tamilnadu from Gemini Engineering Works.",
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
    title: "8m PSC Pole (200kg) ",
    description:
      "Buy 8m PSC pole (Pre-stressed Concrete Pole) in Tamil Nadu with 200kg working load and factor of safety 2.5. Manufactured with M42 grade concrete and reinforced with 14 Nos. of 4mm HTS wires (12 tensioned, 2 untensioned). Each pole requires 0.156m³ of concrete and approximately 75.951kg of cement. Weighs approximately 378kg with section dimensions of 14.5cm × 9cm at top and 29.0cm × 9cm at bottom. Buy PSC poles in Tamilnadu from Gemini Engineering Works.",
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
    title: "Base Plate ",
    description:
      "Buy base plate (RCC baseplate) in Tamil Nadu for electric pole foundation support. High-quality baseplates manufactured with M15 grade concrete and reinforced with HTS wire 4mm thick. Each base plate weighs approximately 37.40kg with 0.0152m³ concrete volume. Buy baseplates in Tamilnadu for PSC and RCC pole installation from Gemini Engineering Works, Pudukkottai.",
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
    redirectImage: "/Government_e_Marketplace_Logo.png",
    redirectLink:
      "https://mkp.gem.gov.in/rcc-base-plate-tn-generation-distribution-corporation/na/p-5116877-74352046336-cat.html#variant_id=5116877-74352046336",
  },
  {
    title: "Hollow Block — 4inch & 6inch",
    description:
      "Buy hollow blocks (4inch and 6inch sizes). High-quality concrete hollow blocks manufactured for construction projects.  ",
    features: [
      {
        title: "Available Sizes",
        description:
          "4inch and 6inch hollow blocks for various construction needs.",
      },

      {
        title: "Quality",
        description:
          "Manufactured with quality concrete for strength and durability.",
      },
    ],
    image: "/images/products/hollow-block.webp",
  },
  {
    title: "Fencing Post ",
    description:
      "Pre-stressed concrete fencing posts manufactured with high tensile strength(HTS) wire for durability and longevity. Ideal for boundary fencing, agricultural fencing, and compound walls",
    features: [
      {
        title: "Curing Peroid",
        description: "28 days curing peroid",
      },
      {
        title: "Applications",
        description:
          "Ideal for boundary fencing, agricultural fencing, and compound walls.",
      },
      {
        title: "Cement Grade",
        description: "OPC-53  grade cement",
      },
    ],
    image: "/images/products/fencing-post-hts.webp",
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
          className="relative bg-white rounded-2xl  max-w-lg w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden pointer-events-auto animate-modal-in flex flex-col"
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

            {product.redirectImage && (
              <div className="mb-5  rounded-lg p-4 border border-blue-200  ">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      Available on Government e-Marketplace
                    </h3>
                    <p className="text-xs text-gray-600 mb-2">Check pricing</p>
                    <button
                      onClick={() =>
                        window.open(product.redirectLink, "_blank")
                      }
                      className="cursor-pointer inline-flex items-center gap-2 text-xs font-medium text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      <span>View on GeM Portal</span>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={product.redirectImage}
                      alt={product.title}
                      width={150}
                      height={80}
                      className="cursor-pointer hover:scale-105 transition-transform object-contain"
                      onClick={() =>
                        window.open(product.redirectLink, "_blank")
                      }
                      title="Buy from Government e-Marketplace"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Divider - matching card style */}

            {!product.redirectImage && (
              <>
                <div className="h-px bg-gradient-to-r from-gray-200 via-amber-200 to-gray-200 mb-4" />

                <div className="mb-5">
                  <Link href="/contact" className="block no-underline">
                    <Button className="w-full cursor-pointer">Get Quote</Button>
                  </Link>
                </div>
              </>
            )}
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
              alt="Buy RCC pole PSC pole electric poles baseplate in Tamil Nadu TN - Products"
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
            High-quality PSC & RCC electric poles manufactured in Tamilnadu to
            meet Indian Standard specifications — available for purchase across
            Tamil Nadu
          </p>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => openModal(product)}
              className="relative bg-white rounded-2xl   transition-all duration-400 cursor-pointer group overflow-hidden hover:-translate-y-1.5 flex flex-col"
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
                  <span className="text-[#343f52] font-semibold text-sm group-hover:text-amber-600 transition-colors">
                    View Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-amber-50 group-hover:bg-[#eba10e] flex items-center justify-center transition-all duration-300">
                    <svg
                      className="w-3.5 h-3.5 text-[#eba10e] group-hover:text-white  transition-all duration-300"
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
        <div className="hidden md:block mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            <strong>Quality Assured:</strong> Buy RCC poles, PSC poles &amp;
            baseplates manufactured as per{" "}
            <span className="font-semibold text-amber-700">IS 1678:1998</span>{" "}
            standards. All electric poles undergo rigorous load testing, bending
            tests &amp; crack resistance tests before dispatch. TNEB &amp;
            TANGEDCO approved supplier in Tamilnadu.
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
