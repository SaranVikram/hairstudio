import ContactForm from "@/components/ContactForm";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa/index.js";

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
      <section className="relative section pt-14">
        <div className="container">
          <div className="row justify-center">
            <div className="mb-16 text-center lg:col-10 xl:col-9">
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
      <section className="section pt-14">
        <div className="container">
          <div className="row justify-between">
            <div className="md:col-8 lg:col-6 md:flex-grow ">
              <h2 className="">Studio for Hair Restoration and Replacement</h2>
              <h5>
                Top-Rated Center for Non-Invasive Hair Restoration Solutions
              </h5>
              <p className="my-4">
                Welcome to Rock'z Hair Studio, a trailblazer in the realm of
                non-surgical hair restoration and solutions in Telangana, Andhra
                Pradesh, and Karnataka. With over ten years of expertise and a
                flourishing clientele of more than 10,000, we are renowned for
                our commitment to transparency and affordability.
              </p>
              <p>
                At Rock'z Hair Studio, we understand that hair restoration is
                not just about aesthetics, but about boosting confidence and
                ensuring comfort and long-lasting results. This understanding
                guides our approach, where seasoned dermatologists and talented
                stylists collaborate to offer personalized solutions tailored to
                each client's unique needs.
              </p>
            </div>
            <div className=" mb:md-0 mb-6 md:col-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <Link
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
