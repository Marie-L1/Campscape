import Image from "next/image";
import HomeHero from "./components/HomeHero/HomeHero";
import CampList from "./components/CampList/CampList";
import Newsletter from "./components/Newsletter/Newsletter";
import CampTips from "./components/CampTips/CampTips";

export default function Home() {
  return (
    <>
      <HomeHero />
      <CampList />
      <CampTips />
      <Newsletter />
    </>
  );
}
