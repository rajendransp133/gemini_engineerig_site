import { FaAngleRight } from "react-icons/fa";
import ImageSquare from "../ui/ImageSquare";
import SubHeading from "../ui/SubHeading";

const WelcomeSection = () => {
  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-labelledby="welcome-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with decorative accents */}
          <ImageSquare
            src="/home1.png"
            alt="Buy RCC pole and PSC pole in Tamil Nadu - Manufacturing facility at Gemini Engineering Works, Pudukkottai TN - Buy electric poles & baseplate Tamilnadu"
            width={500}
            height={1000}
          />

          {/* Right Side - Content */}
          <article className="lg:pl-8">
            {/* Hat icon and title */}
            <SubHeading
              id="welcome-heading"
              src="/images/civil_hat.webp"
              alt="Construction hat icon"
              width={48}
              height={48}
              leftText="Welcome to "
              rightText="Gemini Engineering Works"
              noWrap={true}
            />

            {/* Description */}
            <div className="space-y-5" style={{ color: "#343f52" }}>
              <p className="text-base md:text-lg leading-relaxed opacity-90 roboto-font">
                Founded in 1999 by <strong>AS. Manikandan</strong>, Gemini
                Engineering Works is a leading{" "}
                <strong>PSC &amp; RCC pole manufacturer in Tamil Nadu</strong>,
                based in Pudukkottai with over 25 years of experience. We are a
                trusted electric pole supplier across Tamilnadu, serving
                TNEB &amp; TANGEDCO projects in all districts.
              </p>

              {/* Product list */}
              <ul className="space-y-3 roboto-font text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <FaAngleRight
                    className="mt-1.5 shrink-0 text-amber-500"
                    size={18}
                  />
                  <span className="opacity-90">
                    <strong>Buy RCC Poles</strong> — 9&nbsp;m, 150&nbsp;kg working
                    load 
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAngleRight
                    className="mt-1.5 shrink-0 text-amber-500"
                    size={18}
                  />
                  <span className="opacity-90">
                    <strong>Buy PSC Poles</strong> — 8&nbsp;m, 200&nbsp;kg working
                    load
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAngleRight
                    className="mt-1.5 shrink-0 text-amber-500"
                    size={18}
                  />
                  <span className="opacity-90">
                    <strong>Buy PSC Poles</strong> — 9&nbsp;m, 300&nbsp;kg working
                    load
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAngleRight
                    className="mt-1.5 shrink-0 text-amber-500"
                    size={18}
                  />
                  <span className="opacity-90">
                    <strong>Buy Base Plates</strong> — RCC 450 × 450 × 75&nbsp;mm
                    for pole foundation
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
