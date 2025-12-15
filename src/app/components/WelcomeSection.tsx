import Image from "next/image";

const WelcomeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with decorative accents */}
          <div className="relative">
            {/* Top-left decorative square */}
            <div
              className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 z-10"
              style={{ backgroundColor: "#eba10e" }}
            />

            {/* Main image container */}
            <div className="relative z-20">
              <Image
                src="/images/welcome-to-constructions.webp"
                alt="Construction planning with blueprints and house model"
                width={600}
                height={500}
                className="w-full h-auto object-cover shadow-lg"
              />

              {/* Left edge accent bar */}
              <div
                className="absolute left-0 top-8 bottom-8 w-2 md:w-3"
                style={{ backgroundColor: "#eba10e" }}
              />
            </div>

            {/* Bottom-right decorative square */}
            <div
              className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16"
              style={{ backgroundColor: "#eba10e" }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Hat icon and title */}
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/civil_hat.webp"
                alt="Construction hat"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                <span style={{ color: "#343f52" }}>Welcome to </span>
                <span style={{ color: "#eba10e" }} className="italic">
                  Gemini
                </span>
              </h2>
            </div>

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
