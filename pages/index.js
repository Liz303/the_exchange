import { getPage } from "../utils/contentful-client";
import { renderPageSections } from "/utils/renderPageSections";
import Layout from "@/Components/Layout";

export default function Home({ homePageContent }) {
  const { pageSections } = homePageContent.fields;
  return (
    <Layout
      pageTitle={"City Leisure Group"}
      metaDescription={"Page metadata placeholder"}
      siteUrl={"url placeholder"}
      id="home-page"
    >
      {pageSections && pageSections.length > 0
        ? renderPageSections(pageSections)
        : ""}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const homePageContent = (await getPage("6m8s94qwScCrgmV6OGvoQQ")) ?? [];
  return {
    props: {
      homePageContent,
    },
    revalidate: 300,
  };
};
