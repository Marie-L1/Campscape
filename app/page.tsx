import Image from "next/image";
import Hero from "./components/Hero";
import Camp from "./components/Camp";
import Reviews from "./components/Reviews";
import CampList from "./components/CampList";
import GetApp from "./components/GetApp";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Reviews />
      <CampList />
      <GetApp />
    </>
  );
}
