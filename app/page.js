import { getAllContent } from "@/lib/api";

import Intro from "@/containers/IntroSection";
import Info from "@/containers/InfoSection";
import Ethos from "@/containers/EthosSection";
import Contact from "@/containers/ContactSection";

export default async function Home() {
  const content = await getAllContent();
  const { introData, infoData, ethosData, contactData } = content;

  return (
    <main>
      <Intro data={introData} />
      <Info data={infoData} />
      {/* <Info data={infoData} />
      <Ethos data={ethosData} />
      <Contact data={contactData} /> */}
    </main>
  );
}
