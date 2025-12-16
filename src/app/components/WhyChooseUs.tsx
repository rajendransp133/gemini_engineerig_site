import ImageSquare from "./ImageSquare";
import SubHeading from "./SubHeading";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Expert Craftsmanship",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dignissimos ipsa fuga assumenda, id amet possimus magni deleniti quam sequi explicabo.",
  },
  {
    title: "Timely Project Delivery",
    description:
      "Deleniti, laudantium sequi voluptas deserunt, iste repellat doloribus natus nemo quibusdam, ullam consequatur omnis et nisi tempore totam? Aliquid quaerat quis.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Libero hic asperiores fugit perspiciatis dignissimos itaque, placeat optio voluptates maxime nulla, magni aspernatur excepturi deserunt enim sapiente eveniet.",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Placeat optio voluptates maxime nulla, magni aspernatur excepturi deserunt enim sapiente eveniet.",
  },
];

const WelcomeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:pl-8">
            {/* Hat icon and title */}
            <div className="flex flex-col ">
              <SubHeading
                src="/images/civil_hat.webp"
                alt="Construction hat"
                width={48}
                height={48}
                leftText="Transforming Residential"
                rightText=""
              />
              <SubHeading
                src="/images/civil_hat.webp"
                alt="Construction hat"
                width={48}
                height={48}
                leftText="Construction in "
                rightText="Location"
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
            src="/images/transforming-residential-construction-in-gambias.webp"
            alt="Construction planning with blueprints and house model"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
