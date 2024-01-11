import { getPage } from "../utils/contentful-client";
import Layout from "@/Components/Layout";

export default function Home({ homePageContent }) {
 

  return (
    <Layout>
     Home Page
    </Layout>
  );
}

export const getStaticProps = async () => {
  const homePageContent = (await getPage("1zzDtekFYNJyDVYsSI2Wfh")) ?? [];
  return {
    props: {
      homePageContent,
    },
    revalidate: 300,
  };
};
