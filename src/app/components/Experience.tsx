import Image from "next/image";

const stats = [
  {
    number: "25+",
    label: "Years of Experience",
    bgColor: "#e8c872",
  },
  {
    number: "3L+",
    label: "Poles Manufactured",
    bgColor: "#f6d799",
  },
];

const Experience = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#eef1f5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-30">
          {/* Left Side - Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-28 h-24 md:w-32 md:h-28 flex items-center justify-center rounded-lg shadow-sm"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <span
                    className="text-4xl md:text-5xl font-bold"
                    style={{ color: "#5a6a7a" }}
                  >
                    {stat.number}
                  </span>
                </div>
                <p
                  className="mt-3 text-sm md:text-base font-medium tracking-wider"
                  style={{ color: "#5a6a7a" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Image with Icon Overlay */}
          <div className="relative flex-shrink-0">
            {/* Icon overlay - positioned to overlap left edge */}
            <div
              className="absolute -left-8 md:-left-12 bottom-8 md:bottom-20 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center z-10"
              style={{ backgroundColor: "#eba10e" }}
            >
              <Image
                src="/images/design-1.svg"
                alt="Construction crane icon"
                width={70}
                height={80}
                className="w-14 h-16 md:w-[70px] md:h-[80px]"
              />
            </div>

            {/* Main Image */}
            <div className="relative w-72 h-56 md:w-96 md:h-72 overflow-hidden">
              <Image
                src="/image5.jpg"
                alt="Construction site with cranes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
