"use client";

import { Carousel } from "flowbite-react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const slides = [
    {
      src: "/hero1.webp",
      alt: "PSC Pole Casting Yard at Gemini Engineering Works manufacturing facility in Pudukkottai",
    },
    {
      src: "/hero2.webp",
      alt: "Quality Pole Manufacturing process showing RCC and PSC electric poles",
    },
    {
      src: "/hero3.webp",
      alt: "Electric Pole Production line at Gemini Engineering Works, Tamil Nadu",
    },
  ];

  const router = useRouter();

  return (
    <div className="relative w-full h-[calc(100vh-82px)] overflow-hidden">
      <Carousel
        slideInterval={3000}
        leftControl=""
        rightControl=""
        className="h-full [&>div]:h-full [&>div]:overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </Carousel>

      {/* Text overlay - positioned above the carousel */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          PSC & RCC Electric Pole Manufacturers in Tamil Nadu
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md max-w-3xl">
          ​Planting the Seeds of Light
        </p>
        <Button
          className="pointer-events-auto cursor-pointer"
          onClick={() => router.push("#products")}
        >
          View Our Products
        </Button>
      </div>
    </div>
  );
};

export default Hero;
