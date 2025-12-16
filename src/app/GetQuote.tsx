import Button from "./components/Button";

const GetQuote = () => {
  return (
    <section className="relative w-full">
      {/* Yellow top border */}
      <div className="h-2 bg-amber-500 w-full" />

      {/* Main content with background image */}
      <div
        className="relative w-full py-16 md:py-20"
        style={{
          backgroundImage: "url('/images/breadcrumbs-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Text content */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 italic">
                Let&apos;s Build Your Dream Home
              </h2>
              <p className="text-gray-200 text-sm sm:text-base max-w-2xl">
                Partner with Buildify for reliable, high-quality residential
                construction in Location. Contact us today to get started!
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Button className="whitespace-nowrap">Get Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
