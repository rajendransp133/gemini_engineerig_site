"use client";

import { Carousel } from "flowbite-react";
import Button from "../ui/Button";
import Image from "next/image";

const Hero = () => {
  const slides = [
    {
      src: "/hero1.webp",
      alt: "Buy PSC poles in Tamil Nadu - PSC Pole casting yard at Gemini Engineering Works, Pudukkottai TN",
    },
    {
      src: "/hero2.webp",
      alt: "Buy RCC pole in Tamilnadu - Quality RCC and PSC electric pole manufacturing in TN",
    },
    {
      src: "/hero3.webp",
      alt: "Buy electric poles in Tamil Nadu - Electric pole production at Gemini Engineering Works TN - Buy RCC PSC poles & baseplate",
    },
  ];

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-82px)] overflow-hidden">
      {/* Carousel with cinematic zoom-out reveal */}
      <div className="animate-hero-bg h-full">
        <Carousel
          slideInterval={3000}
          leftControl=""
          rightControl=""
          className="h-full [&>div]:h-full [&>div]:overflow-hidden"
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
              {/* Cinematic gradient overlay — darker at bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/15" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Text overlay with staggered entrance animations */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-10 gap-2">
        {/* Decorative golden accent line */}
        <div className="animate-line-reveal animation-delay-400 w-14 h-[3px] bg-amber-500 rounded-full mb-5" />

        <h1 className="animate-fade-in-up animation-delay-600 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          PSC & RCC Electric Pole Manufacturers in Tamil Nadu
        </h1>

        <p className="animate-fade-in-up animation-delay-800 text-lg md:text-xl text-white/90 mb-8 drop-shadow-md max-w-3xl roboto-font tracking-wide">
          Planting the Seeds of Light
        </p>

        <Button
          className="animate-fade-in-up animation-delay-1000 pointer-events-auto cursor-pointer"
          onClick={scrollToProducts}
        >
          View Our Products
        </Button>
      </div>
    </div>
  );
};

export default Hero;
