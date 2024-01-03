import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { Service } from "@/types";
import NotFound from "@/app/not-found";

const ServiceSingle = ({ params }: { params: { single: string } }) => {
  const services: Service[] = getSinglePage("services");
  const service = services.find((page) => page.slug === params.single);

  if (!service) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  const { frontmatter, content } = service;

  return (
    <>
      <SeoMeta
        title={frontmatter.title}
        meta_title={frontmatter.meta_title || frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image}
      />
      <section className="section pt-7">
        <div className="container">
          <div className="row justify-center">
            <article className="lg:col-10">
              {frontmatter.image && (
                <div className="mb-10">
                  <img
                    src={frontmatter.image}
                    alt={frontmatter.title}
                    className="w-full rounded"
                  />
                </div>
              )}
              <div className="content mb-10">
                <MDXContent content={content} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSingle;
