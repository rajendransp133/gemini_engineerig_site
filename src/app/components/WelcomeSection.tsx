import ImageSquare from "./ImageSquare";
import SubHeading from "./SubHeading";

const WelcomeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with decorative accents */}
          <ImageSquare
            src="/image1.jpeg"
            alt="RCC and PSC Pole Manufacturing Facility"
            width={600}
            height={500}
          />

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Hat icon and title */}
            <SubHeading
              src="/images/civil_hat.webp"
              alt="Construction hat"
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
                casting yard in Pudukkottai, Tamil Nadu.
              </p>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                Our state-of-the-art manufacturing facility produces durable,
                reliable, and cost-effective poles that meet the highest
                industry standards. We specialize in manufacturing{" "}
                <strong>RCC poles</strong> (9m with 150kg & 300kg load
                capacity), <strong>PSC poles</strong> (8m with 150kg capacity),
                and <strong>RCC base plates</strong> — all crafted to deliver
                exceptional strength and longevity. We use premium quality{" "}
                <strong>Tata steel</strong> in our manufacturing process,
                ensuring superior tensile strength and corrosion resistance.
              </p>

              <p className="text-base md:text-lg leading-relaxed opacity-90">
                As a proud supplier to{" "}
                <strong>TNEB (Tamil Nadu Electricity Board) yards</strong>, we
                serve power distribution companies, contractors, and rural
                electrification projects across the region. Our commitment to
                quality and timely delivery has made us a preferred partner for
                government and private infrastructure projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
