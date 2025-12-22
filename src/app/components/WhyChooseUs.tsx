import ImageSquare from "./ImageSquare";
import SubHeading from "./SubHeading";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Premium Quality Materials",
    description:
      "We use high-grade cement, sand, aggregates, and steel reinforcement to manufacture poles that exceed IS 1678:1998 standards. Our concrete mix ensures maximum compressive strength while steel rods provide superior tensile strength.",
  },
  {
    title: "25+ Years of Experience",
    description:
      "Since 1999, Gemini Engineering Works has been a trusted name in pole manufacturing. Our expertise and experience ensure consistent quality and reliability in every pole we produce.",
  },
  {
    title: "Durable & Long-Lasting",
    description:
      "Our RCC and PSC poles are corrosion-free, termite-resistant, and require minimal maintenance. With a lifespan of 40-50 years, they offer excellent value for power distribution and electrification projects.",
  },
  {
    title: "Competitive Pricing & Timely Delivery",
    description:
      "We offer cost-effective solutions without compromising on quality. Our efficient manufacturing process ensures timely delivery for all orders, supporting your project timelines.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background SVG */}
      <div
        className="absolute -top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          backgroundImage: "url('/images/bg-1.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "contain",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:pl-8">
            {/* Hat icon and title */}
            <div className="flex flex-col ">
              <SubHeading
                src="/images/civil_hat.webp"
                alt="Construction hat"
                width={48}
                height={48}
                leftText="Why Choose"
                rightText=""
              />
              <SubHeading
                leftText="Gemini "
                rightText="Engineering Works?"
                icon={false}
              />
            </div>

            {/* Description paragraphs */}
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <FaCheckCircle className="text-amber-500 text-lg flex-shrink-0" />
                    <h3 className="font-bold text-gray-800 text-lg">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ImageSquare
            src="/images4.webp"
            alt="RCC and PSC Pole Manufacturing"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
