import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      imageUrl: "/images/hair-replacement.png",
      type: "hair replacement",
      description:
        "Every journey begins with a personalized consultation. Our experts assess your hair type, scalp condition, and style preferences. We discuss your desired look and provide recommendations to achieve the best outcome.",
      link: "hair-replacement",
    },
    {
      id: 2,
      imageUrl: "/images/hair-transplant.png",
      type: "hair transplant",
      description:
        "Our specialists evaluate your hair loss pattern, discuss your goals, and determine your eligibility for the procedure. We ensure you have a clear understanding of the process and expected outcomes.",
      link: "hair-transplant",
    },
    {
      id: 3,
      imageUrl: "/images/hair-extension.png",
      type: "hair extension",
      description:
        "Our stylists assess your natural hair and discuss your desired length, volume, and style. We help you choose from a variety of extension types, such as clip-ins, tape-ins, weaves, or keratin-bonded extensions, ensuring they perfectly match your hair color and texture.",
      link: "hair-extension",
    },
    {
      id: 4,
      imageUrl: "/images/hair-fibers.png",
      type: "hair fibers",
      description:
        "The process begins with a thorough consultation to understand your specific needs. Our experts then carefully select hair fibers that perfectly match your natural hair color, ensuring a seamless and undetectable blend.",
      link: "hair-fibers",
    },
    {
      id: 5,
      imageUrl: "/images/hair-wigs.png",
      type: "hair wigs",
      description:
        "We take the time to understand your preferences, lifestyle, and specific needs. Whether it's for fashion, convenience, or hair loss solutions, we ensure that your wig choice complements your individuality and style.",
      link: "hair-wigs",
    },
    {
      id: 6,
      imageUrl: "/images/chemotherapy-wigs.png",
      type: "chemotherapy wigs",
      description:
        "Our process begins with a private and empathetic consultation. We create a supportive space where you can comfortably discuss your needs and preferences. Understanding the sensitivity of the situation, our experts handle every interaction with care and discretion.",
      link: "chemotherapy-wigs",
    },
  ];

  // Function to truncate the description
  const truncateDescription = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "... ";
    }
    return text;
  };

  return (
    <section className="relative section pt-14 pb-0">
      <div className="container">
        <div className="row justify-center">
          <h2 className="mb-4 lg:mb-6 text-primary text-center">
            Our Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="overflow-hidden transition-all duration-150 ease-out bg-white border rounded-lg hover:shadow-xl hover:shadow-gray-200"
              >
                <div className="relative cursor-zoom-in">
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={service.imageUrl}
                      alt="service Photo"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="relative ">
                  <div className="px-5 py-5 flex flex-col space-y-2">
                    <h3 className="font-semibold uppercase">{service.type}</h3>
                    <p className="text-text">
                      {truncateDescription(service.description, 20)}
                    </p>
                    <Link
                      className="bg-gradient-to-r from-primary to-third py-4 px-6 text-xl tracking-normal text-center text-white "
                      href={`/services/${service.link}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
