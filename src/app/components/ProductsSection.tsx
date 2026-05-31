"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    redirectImage: "/Government_e_Marketplace_Logo.jpg",
    redirectLink:
      "https://mkp.gem.gov.in/reinforced-concrete-poles-overhead-power-telecommunication-lines-785/reinforced-concrete-poles/p-5116877-77720843346-cat.html#variant_id=5116877-77720843346",
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
    redirectImage: "/Government_e_Marketplace_Logo.jpg",
    redirectLink:
      "https://mkp.gem.gov.in/reinforced-concrete-poles-overhead-power-telecommunication-lines-785/reinforced-concrete-poles/p-5116877-77720843346-cat.html#variant_id=5116877-77720843346",
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
  productIndex,
  isOpen,
  onClose,
}: {
  product: Product | null;
  productIndex: number;
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
      <div className="fixed inset-0 z-[1001] flex items-center justify-center p-3 sm:p-6 pointer-events-none">
        <div
          className="relative bg-white rounded-2xl w-full max-w-xl max-h-[92vh] sm:max-h-[88vh] overflow-hidden pointer-events-auto animate-modal-in flex flex-col border border-gray-100 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header — matches card design */}
          <div className="relative bg-[#343f52] px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 overflow-hidden flex-shrink-0">
            {/* Faded background number */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-9xl font-black text-white/[0.06] select-none leading-none pointer-events-none">
              {String(productIndex + 1).padStart(2, "0")}
            </span>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer border-none z-10"
              aria-label="Close modal"
            >
              <IoClose className="w-5 h-5 text-white" />
            </button>

            {/* Amber accent bar */}
            <div className="w-10 h-1 bg-[#eba10e] rounded-full mb-4" />

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug pr-12 relative z-10">
              {product.title}
            </h2>
          </div>

          {/* Scrollable Body */}
          <div className="px-6 sm:px-8 py-6 sm:py-7 flex-1 overflow-y-auto space-y-6">
            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify roboto-font">
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-3.5">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#eba10e] mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed roboto-font">
                    <span className="font-semibold text-gray-800">
                      {feature.title}:{" "}
                    </span>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* GeM redirect */}
            {product.redirectImage && (
              <div className="rounded-xl p-4 sm:p-5 border border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      Available on Government e-Marketplace
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">
                      Check pricing & place orders via GeM portal
                    </p>
                    <button
                      onClick={() =>
                        window.open(product.redirectLink, "_blank")
                      }
                      className="cursor-pointer inline-flex items-center gap-2 text-xs font-semibold text-[#343f52] hover:text-[#eba10e] transition-colors"
                    >
                      <span>View on GeM Portal</span>
                      <svg
                        className="w-3.5 h-3.5"
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
                      alt="Government e-Marketplace"
                      width={130}
                      height={70}
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

            {/* Get Quote CTA */}
            {!product.redirectImage && (
              <div className="pt-1">
                <div className="h-px bg-gradient-to-r from-gray-200 via-amber-200 to-gray-200 mb-5" />
                <Link href="/contact" className="block no-underline">
                  <Button className="w-full cursor-pointer">Get Quote</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Bottom accent line */}
          <div className="h-1 bg-gradient-to-r from-[#eba10e] to-[#f5c04a] flex-shrink-0" />
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(16px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-in {
          animation: modalIn 0.25s ease-out forwards;
        }
      `}</style>
    </>
  );
};

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product, index: number) => {
    setSelectedProduct(product);
    setSelectedIndex(index);
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
      className="py-8 md:py-12 bg-gray-50"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => openModal(product, index)}
              className="relative bg-white rounded-2xl overflow-hidden cursor-pointer group  transition-all duration-300 flex flex-col border border-gray-100"
            >
              {/* Card Header */}
              <div className="relative bg-[#343f52] px-5 pt-5 pb-5 overflow-hidden">
                {/* Faded background number */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-8xl font-black text-white/[0.07] select-none leading-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* Amber accent bar */}
                <div className="w-8 h-1 bg-[#eba10e] rounded-full mb-3" />
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug relative z-10 pr-12">
                  {product.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
                {/* Features */}
                <div className="space-y-2.5 flex-1 mb-4">
                  {product.features.slice(0, 2).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#eba10e] mt-1.5 flex-shrink-0" />
                      <p className="text-gray-600 text-xs leading-relaxed roboto-font line-clamp-2">
                        <span className="font-semibold text-gray-800">
                          {feature.title}:{" "}
                        </span>
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#343f52]  ">
                    View Details
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#eba10e] group-hover:bg-[#eba10e]  flex items-center justify-center transition-all duration-300">
                    <svg
                      className="w-3.5 h-3.5 text-[#eba10e] group-hover:text-white  transition-colors duration-300"
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

              {/* Bottom accent — always visible, grows on hover */}
              <div className="h-1 bg-gradient-to-r from-[#eba10e] to-[#f5c04a] transform scale-x-0  transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Specifications Note */}
        <div className="hidden md:block mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
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
        productIndex={selectedIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProductsSection;
