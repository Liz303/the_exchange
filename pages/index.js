import { getPage } from "../utils/contentful-client";
import Layout from "@/Components/Layout";
import BiosSection from "@/Components/BiosSection";
import ProjectsSection from "@/Components/ProjectsSection";
import NewsSection from "@/Components/NewsSection";

export default function Home({ homePageContent }) {
  const { bios, news, projects } = homePageContent.fields;

  return (
    <Layout>
      <BiosSection section={bios} />
      <ProjectsSection section={projects} />
      <NewsSection section={news} />
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
