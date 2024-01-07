import LocationCards from "@/partials/LocationCards";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa/index.js";
import ImageSectionCard from "@/partials/ImageSectionCard";
import ImageSectionCardRight from "@/partials/ImageSectionCardRight";
import ServicesSection from "@/partials/ServicesSection";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  const handleSubmit = (name: String, mobile: String) => {
    // Handle form submission logic here
    console.log(name, mobile);
  };

  return (
    <>
      <SeoMeta />
      <section className="relative section pt-14 pb-0 bg-gradient-to-b from-body to-secondary">
        <div className="container">
          <div className="row justify-center">
            <div className="relative mb-16 text-center lg:col-10 xl:col-9">
              <p className="custom-sheen mb-4 inline-block  py-2 px-4 border border-primary rounded-[70px] text-center text-sm font-semibold ">
                Professional Hair Fixers
              </p>
              <h1 className="mb-4  text-center font-semibold leading-[50px] md:leading-[70px] text-[39px] md:text-[56px]">
                Say Goodbye to{" "}
                <span className="text-primary">
                  Hair Loss, Hello to Full, Natural Hair
                </span>{" "}
                –Non Surgical Hair Replacement!
              </h1>
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <Link
                  className="bg-gradient-to-r from-primary to-third border rounded-[70px] py-3 px-8  btn btn-primary"
                  href="/contact"
                >
                  Contact Us
                </Link>
                <Link
                  className="bg-transparent border rounded-[70px] py-3 px-8  btn btn-primary text-primary"
                  href="/services"
                >
                  Check Services in Detail
                </Link>
              </div>
            </div>
            {banner.image && (
              <div className="col-12">
                <ImageFallback
                  src="/images/hero-section.png"
                  className="mx-auto"
                  width="800"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <LocationCards />
      <ImageSectionCard />
      <ImageSectionCardRight />
      <ServicesSection />
      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
