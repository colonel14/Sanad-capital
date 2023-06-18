import HomeHero from "@/container/Home/HomeHero";

import "@/styles/home.css";
import Invetments from "@/container/Home/Invetments";
import HomeFeatures from "@/container/Home/HomeFeatures";
import HomeHow from "@/container/Home/HomeHow";
import HomeSteps from "@/container/Home/HomeSteps";
import Certificates from "@/container/Home/Certificates";
import Faq from "@/container/Home/Faq";
import Risks from "@/container/Home/Risks";
import Partners from "@/container/Home/Partners";
export default function Home() {
  return (
    <div id="home">
      <HomeHero />
      <Invetments />
      <HomeFeatures />
      <HomeHow />
      <HomeSteps />
      <Certificates />
      <Faq />
      <Risks />
      <Partners />
    </div>
  );
}
