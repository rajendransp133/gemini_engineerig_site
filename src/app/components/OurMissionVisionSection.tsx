import Image from "next/image";

const OurMissionVisionSection = () => {
  const cards = [
    {
      icon: "/images/commitment-1.svg",
      title: "Our Mission",
      description:
        "To be the leading residential construction company in Location, renowned for transforming dreams into reality through innovative designs, quality craftsmanship, and exceptional customer service.",
    },
    {
      icon: "/images/vision-1.svg",
      title: "Our Vision",
      description:
        "To deliver high-quality residential construction solutions by combining expertise, precision, and customer collaboration. We aim to create lasting homes that reflect our clients' unique visions and needs.",
    },
    {
      icon: "/images/value-1.svg",
      title: "Our Values",
      description:
        "At Gemini, we prioritize integrity, quality, and customer satisfaction. Our values drive us to build with passion, innovate with purpose, and deliver excellence in every project.",
    },
  ];

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/images/civil_hat.webp"
              alt="Construction Hat"
              width={50}
              height={50}
              className="object-contain"
            />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#343f52]">Our </span>
              <span className="text-[#eba10e]">Mission & Vision</span>
            </h2>
          </div>
          <p className="text-[#343f52] text-lg opacity-80">
            What makes us the best choice
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-[#f0f0f0]  duration-300 text-center"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 mx-auto mb-6 bg-[#fef9eb] rounded-lg flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#343f52] mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#343f52] opacity-75 leading-relaxed text-justify">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMissionVisionSection;
