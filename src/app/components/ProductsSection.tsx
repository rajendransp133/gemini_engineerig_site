"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Product {
  title: string;
  subtitle: string;
  tagline: string;
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
    tagline: "Reliable Performance for Standard Applications",
    description:
      "The 9-metre RCC Square Section Pole with 150kg working load is ideal for standard electrical distribution and rural electrification projects. Manufactured with M25 grade concrete and 0.285m³ concrete volume per pole. Features tapered design with 12.5cm×12.5cm top and 22.5cm×22.5cm bottom dimensions. Each pole weighs approximately 700kg with 1.70m planting depth.",
    features: [
      {
        title: "Load Capacity",
        description:
          "150kg working load with 2.0 factor of safety (300kg ultimate load).",
      },
      {
        title: "Height",
        description:
          "9 metres providing optimal reach for distribution networks.",
      },
      {
        title: "Cost-Effective",
        description:
          "Economical solution for rural electrification and lighting projects.",
      },
    ],
    image: "/images/products/rcc-pole-150kg.webp",
  },
  {
    title: "9 Metre RCC Poles (300kg)",
    subtitle: "Heavy Duty",
    tagline: "Enhanced Strength for Demanding Applications",
    description:
      "The 9-metre RCC pole with 300kg working load is engineered for demanding applications requiring higher load-bearing capacity. These heavy-duty poles are essential for medium-tension power lines, areas with high wind loads, and installations supporting multiple cable runs.",
    features: [
      {
        title: "Working Load",
        description:
          "300kg capacity for heavy-duty electrical and telecom installations.",
      },
      {
        title: "Enhanced Durability",
        description:
          "Built to withstand higher stress and extreme weather conditions.",
      },
      {
        title: "Versatile Application",
        description:
          "Ideal for medium-tension lines and multi-cable installations.",
      },
    ],
    image: "/images/products/rcc-pole-300kg.webp",
  },
  {
    title: "PSC Poles (8m, 150kg)",
    subtitle: "Pre-Stressed Concrete",
    tagline: "Superior Strength-to-Weight Ratio",
    description:
      "Pre-Stressed Concrete (PSC) poles offer superior strength-to-weight ratio. Our 8-metre PSC poles with 150kg working load are perfect for rural electrification projects and agricultural applications. The pre-stressing technique provides enhanced load-bearing capacity while keeping the poles lightweight for easier handling and installation.",
    features: [
      {
        title: "Pre-Stressed Design",
        description:
          "Advanced manufacturing technique for extra strength and durability.",
      },
      {
        title: "Lightweight",
        description:
          "Easier to transport and install compared to traditional RCC poles.",
      },
      {
        title: "Cost-Effective",
        description:
          "Perfect balance of quality and affordability for rural projects.",
      },
    ],
    image: "/images/products/psc-pole.webp",
  },
  {
    title: "RCC Base Plates",
    subtitle: "450mm × 450mm × 75mm",
    tagline: "Stable Foundation for Every Pole",
    description:
      "High-quality RCC base plates designed to provide stable foundation support for electric poles. Manufactured with M15 grade concrete and reinforced with HTS wire 4mm thick @ 50mm c/c spacing. Each base plate weighs approximately 37.40kg with 0.0152m³ concrete volume, ensuring perfect compatibility with all our pole types.",
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
        description:
          "4mm thick HTS wire @ 50mm c/c with 2×9 Nos. + 2×4 Nos. additional at middle.",
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
      <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden pointer-events-auto animate-modal-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header with Gradient */}
          <div className="relative bg-gradient-to-r from-[#eba10e] to-[#f5c04a] p-6 pb-12">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200 cursor-pointer border-none"
              aria-label="Close modal"
            >
              <IoClose className="w-6 h-6 text-white" />
            </button>

            {/* Header Content */}
            <div className="pr-12">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-3">
                {product.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {product.title}
              </h2>
              <p className="text-white/90 text-sm">{product.tagline}</p>
            </div>
          </div>

          {/* Decorative Wave */}
          <div className="relative -mt-6">
            <svg
              viewBox="0 0 1440 120"
              className="w-full h-12 text-white"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              />
            </svg>
          </div>

          {/* Modal Body */}
          <div className="px-6 pb-6 pt-2">
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-600 leading-relaxed text-justify">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-bold text-[#343f52] mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-[#eba10e] rounded-full"></span>
                Key Features
              </h3>
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#eba10e] to-[#f5c04a] flex items-center justify-center">
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#343f52] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <a
                href="tel:+919443211374"
                className="block w-full py-3 px-6 bg-gradient-to-r from-[#eba10e] to-[#f5c04a] text-white text-center font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 no-underline"
              >
                Contact Us for Pricing
              </a>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => openModal(product)}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-2 bg-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#eba10e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium text-sm">
                    Click for Details
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">
                    {product.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mt-1  transition-colors duration-200">
                    {product.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                  {product.tagline}
                </p>

                {/* View More Button */}
                <div className="flex items-center text-[#eba10e] font-medium text-sm group-hover:gap-2 transition-all duration-200">
                  <span>View Details</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
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
