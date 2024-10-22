import Image from "next/image";
import CampHero from "../components/CampHero/CampHero";
import Reviews from "../components/Reviews/Reviews";
import CampList from "../components/CampList/CampList";
import Newsletter from "../components/Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <CampHero />
      <Reviews />
      <CampList />
      <Newsletter />
    </>
  );
}
