"use client";

import { Carousel } from "flowbite-react";
import Button from "./Button";

const Hero = () => {
  const slides = [
    { src: "/images/hero/1.webp", alt: "Slide 1" },
    { src: "/images/hero/2.webp", alt: "Slide 2" },
    { src: "/images/hero/3.webp", alt: "Slide 3" },
    { src: "/images/hero/4.webp", alt: "Slide 4" },
  ];

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
          Residential Construction Company in Location
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md">
          We Don&apos;t Just Build Homes, We Shape Your Future.
        </p>
        <Button className="pointer-events-auto">Know More</Button>
      </div>
    </div>
  );
};

export default Hero;
