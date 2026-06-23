import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../ui/Button";
import ImageSquare from "../ui/ImageSquare";
import SubHeading from "../ui/SubHeading";

const features = [
  {
    title: "Precision Casting",
    description:
      "Uniform strength and structural integrity in every pole, achieved through controlled concrete mixing and vibration compaction.",
  },
  {
    title: "Standardized Designs",
    description:
      "Fully compliant with state utility requirements for height, load capacity, and long-term durability.",
  },
  {
    title: "Bulk Supply Ready",
    description:
      "Capable of meeting large-scale departmental tenders on tight deadlines without compromising quality.",
  },
  {
    title: "ISI Grade Raw Materials",
    description:
      "We source only certified cement, steel, and aggregates to ensure every pole meets government norms.",
  },
];

const highlights = [
  "100% TNEB Norm Compliance",
  "ISI Grade Raw Materials",
  "High-Output Production",
  "Government Tender Experience",
];

const TNEBPoleSection = () => {
  return (
    <section
      className="py-16 md:py-24 bg-[#f7f8fa]"
      aria-labelledby="tneb-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <ImageSquare
            src="/tneb.webp"
            alt="Tamil Nadu Electricity Board (TNEB) logo"
            width={480}
            height={260}
          />

          {/* Right: Content */}
          <div>
            <SubHeading
              icon={false}
              leftText="TNEB Standard"
              rightText="Pole Manufacturing"
              id="tneb-heading"
            />

            <p className="text-gray-600 text-base leading-relaxed roboto-font mb-8">
              We specialize in the high-volume production of electric poles
              designed strictly according to{" "}
              <span className="font-semibold text-[#343f52]">
                Tamil Nadu Electricity Board (TNEB)
              </span>{" "}
              specifications — trusted by government departments across the
              region.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <FaCheckCircle className="text-[#343f52] text-lg flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#343f52] text-base roboto-font">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed roboto-font">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="no-underline inline-block">
              <Button className="font-semibold px-8 py-3 cursor-pointer roboto-font">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom highlights */}
        <div className="mt-14 pt-10 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-[#343f52] text-sm roboto-font"
            >
              <FaCheckCircle className="text-[#343f52] flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TNEBPoleSection;
