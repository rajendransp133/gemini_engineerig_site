import Link from "next/link";

const GetQuote = () => {
  return (
    <section
      className="relative w-full"
      aria-label="Get Quote for Electric Poles"
    >
      {/* Yellow top border */}
      <div className="h-2 bg-amber-500 w-full" aria-hidden="true" />

      {/* Main content with background image */}
      <div className="relative w-full py-16 md:py-20 overflow-hidden">
        {/* Rotated background image */}
        <div
          className="absolute inset-0 bg-[url('/stack3.webp')] bg-no-repeat bg-cover bg-center"
          style={{ transformOrigin: "center" }}
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Text content */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 italic">
                Need Quality Electric Poles?
              </h2>
              <p className="text-gray-200 text-sm  max-w-2xl roboto-font">
                Partner with Gemini Engineering Works — leading RCC & PSC pole
                manufacturer in Tamilnadu. Contact us for competitive pricing
                and timely delivery across Tamil Nadu!
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 shadow-lg whitespace-nowrap inline-block"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
