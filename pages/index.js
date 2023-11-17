import { getPage } from "../utils/contentful-client";
import Layout from "@/Components/Layout";
import IntroSection from "@/Components/IntroSection";
import AboutSection from "@/Components/AboutSection";
import TeamSection from "@/Components/TeamSection";
import ProjectsSection from "@/Components/ProjectsSection";
import NewsSection from "@/Components/NewsSection";
import CTASection from "@/Components/CTASection";

export default function Home({ homePageContent }) {
  const { bios, news, projects } = homePageContent.fields;

  return (
    <Layout>
      <IntroSection />
      <AboutSection />
      <ProjectsSection section={projects} />
      <TeamSection bios={bios} />
      <NewsSection section={news} />
      <CTASection />
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
