"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import SubHeading from "../ui/SubHeading";

const OurMissionVisionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const cards = [
    {
      icon: "/images/commitment-1.svg",
      title: "Our Mission",
      description:
        "To be the leading manufacturer of high-quality PSC and RCC electric poles in Tamil Nadu, supporting India's power infrastructure with durable, reliable, and cost-effective products that meet the highest industry standards.",
    },
    {
      icon: "/images/vision-1.svg",
      title: "Our Vision",
      description:
        "To become the definitive benchmark for utility engineering in India, where the name 'Gemini' is synonymous with unbreakable quality and public safety",
    },
    {
      icon: "/images/value-1.svg",
      title: "Our Values",
      description:
        "At Gemini Engineering Works, we prioritize quality, durability, and customer satisfaction. Our values drive us to manufacture with precision, deliver on time, and build lasting relationships with every client we serve.",
    },
  ];

  // Reset timer when user manually changes slide
  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex(index);
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }, 2000);
    },
    [cards.length]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      goToSlide((activeIndex + 1) % cards.length);
    } else if (diff < -threshold) {
      goToSlide((activeIndex - 1 + cards.length) % cards.length);
    }
  }, [activeIndex, cards.length, goToSlide]);

  // Auto-play: advance every 2 seconds, loop back to first
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [cards.length]);

  return (
    <section className="py-20 px-4" aria-labelledby="mission-vision-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <SubHeading
            src="/images/civil_hat.webp"
            alt="Construction hat icon representing mission and vision"
            width={50}
            height={50}
            leftText="Our"
            rightText="Mission & Vision"
            noWrap={false}
          />
          <p className="text-[#343f52] text-lg opacity-80 roboto-font">
            Powering Infrastructure Since 1999
          </p>
        </header>

        {/* Desktop: Cards Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 border border-[#f0f0f0] duration-300 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#343f52] mb-4">
                {card.title}
              </h3>
              <p className="text-[#343f52] opacity-75 leading-relaxed text-justify roboto-font">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-gray-50 rounded-lg p-8 border border-[#f0f0f0] duration-300 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-lg flex items-center justify-center">
                      <Image
                        src={card.icon}
                        alt={`${card.title} icon`}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#343f52] mb-4">
                      {card.title}
                    </h3>
                    <p className="text-[#343f52] opacity-75 leading-relaxed text-justify roboto-font">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "w-8 bg-[#343f52]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionVisionSection;
