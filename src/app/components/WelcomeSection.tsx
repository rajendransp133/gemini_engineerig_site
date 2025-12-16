import ImageSquare from "./ImageSquare";
import SubHeading from "./SubHeading";

const WelcomeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with decorative accents */}
          <ImageSquare
            src="/images/welcome-to-constructions.webp"
            alt="Construction planning with blueprints and house model"
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
              rightText="Gemini"
            />

            {/* Description paragraphs */}
            <div className="space-y-6" style={{ color: "#343f52" }}>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                obcaecati odit fuga, velit cum temporibus autem soluta mollitia
                saepe porro...
              </p>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                Excepturi accusamus delectus velit consequuntur! Eum quod modi
                velit aut molestias, cum animi voluptates eaque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
