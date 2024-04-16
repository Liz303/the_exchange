import { getAllContent } from "@/lib/api";

import Intro from "@/containers/IntroSection";
import Info from "@/containers/InfoSection";
import Ethos from "@/containers/EthosSection";
import Contact from "@/containers/ContactSection";
import Loader from "@/components/Loader";

export default async function Home() {
  const content = await getAllContent();
  const { introData, infoData, ethosData, contactData } = content;

  const ethosWSeason = {
    ...ethosData,
    season: introData?.season,
  };

  return (
    <Loader>
      <main>
        <Intro data={introData} />
        <Info data={infoData} />
        <Ethos data={ethosWSeason} />
        <Contact data={contactData} />
      </main>
    </Loader>
  );
}
