"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { campsites, Campsite } from "@/app/data/campsites";  // Ensure Campsite type is imported
import "./campsitesList.scss";
import LocationFilter from "../components/LocationFilter/LocationFilter";

const CampsiteList = () => {
  // Initialize filteredCampsites with the full campsites list initially
  const [filteredCampsites, setFilteredCampsites] = useState<Campsite[]>(campsites);

  return (
    <section className="campsite-list">
      <div className="campsite-list__hero">
        <h1 className="campsite-list__hero-title">Discover Your Next Adventure</h1>
      </div>

      {/* Pass setFilteredCampsites and campsites to the LocationFilter */}
      <LocationFilter setFilteredCampsites={setFilteredCampsites} campsites={campsites} />

      <div className="campsite-list__cards-wrapper">
        {/* Render the filtered campsites */}
        {filteredCampsites.map((camp) => (
          <div key={camp.id} className="campsite-list__card">
            <Image
              src={`/images/${camp.scenicImage}`}
              width={200}
              height={200}
              className="campsite-list__card-img"
              alt={camp.name}
            />
            <h2 className="campsite-list__card-title">{camp.name}</h2>
            <h3 className="campsite-list__card-location">{camp.location}</h3>
            <Link href={`/campsites/${camp.id}`}>
              <button className="campsite-list__card-btn">Explore</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampsiteList;
