import Intro from "@/containers/IntroSection";
import Info from "@/containers/InfoSection";
import Contact from "@/containers/ContactSection";
import FooteraMarquee from "@/components/Marquee";
import OrderButton from "@/components/OrderButton";

export default async function Home() {

  return (
    <main>
      <Intro />  
      <Info />
      <Contact />
      <FooteraMarquee />
      <OrderButton />
    </main>
  );
}
