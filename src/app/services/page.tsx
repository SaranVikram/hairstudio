import { getListPage } from "@/lib/contentParser";
import MDXContent from "@/helpers/MDXContent";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const Services = () => {
  const data: RegularPage = getListPage("services.md");
  const { frontmatter, content } = data;

  return (
    <>
      <SeoMeta
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        description={frontmatter.description}
        image={frontmatter.image}
      />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center md:col-10 lg:col-7">
              <h1>{frontmatter.title}</h1>
              <div className="content">
                <MDXContent content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
