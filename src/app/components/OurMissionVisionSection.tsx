import Image from "next/image";
import SubHeading from "../ui/SubHeading";

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

const OurMissionVisionSection = () => {
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

        {/* Single responsive grid - no duplicate content in DOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default OurMissionVisionSection;
