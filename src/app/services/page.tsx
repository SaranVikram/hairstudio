import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import MDXContent from "@/helpers/MDXContent";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import ServicesSection from "@/partials/ServicesSection";

const Services = () => {
  const data: RegularPage = getListPage("services/_index.md");
  const { frontmatter, content } = data;

  return (
    <>
      <SeoMeta
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        description={frontmatter.description}
        image={frontmatter.image}
      />
      <PageHeader title={"Services - Rock'z hair studio"} />
      <ServicesSection />
    </>
  );
};

export default Services;
