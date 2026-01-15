import ImageSquare from "./ImageSquare";
import SubHeading from "./SubHeading";

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
            alt="RCC and PSC Pole Manufacturing Facility at Gemini Engineering Works in Pudukkottai, Tamil Nadu"
            width={500}
            height={1000}
          />

          {/* Right Side - Content */}
          <article className="lg:pl-8">
            {/* Hat icon and title */}
            <SubHeading
              src="/images/civil_hat.webp"
              alt="Construction hat icon"
              width={48}
              height={48}
              leftText="Welcome to "
              rightText="Gemini Engineering Works"
            />

            {/* Description paragraphs */}
            <div className="space-y-6" style={{ color: "#343f52" }}>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                Founded in 1999 by <strong>AS. Manikandan</strong>, Gemini
                Engineering Works has been a trusted name in the manufacturing
                of high-quality electric poles. With over 25 years of
                experience, we have established ourselves as a leading pole
                manufacturing company in Pudukkottai, Tamil Nadu.
              </p>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                Our state-of-the-art manufacturing facility produces durable,
                reliable, and cost-effective poles that meet the highest
                industry standards. We specialize in manufacturing{" "}
                <strong>RCC poles</strong> (9m with 150kg working load
                capacity), <strong>PSC poles</strong> (8m with 200kg working
                load capacity and 9m with 300kg working load capacity), and{" "}
                <strong>RCC base plates (450mm × 450mm × 75mm)</strong> — all
                crafted to deliver exceptional strength and longevity.
              </p>

              <p className="text-base md:text-lg leading-relaxed opacity-90">
                As a proud supplier to{" "}
                <strong>TNEB (Tamil Nadu Electricity Board) yards</strong>, we
                serve power distribution companies and contractors across
                regions. Our commitment to quality and timely delivery has made
                us a preferred partner for government and private infrastructure
                projects.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
