"use client"
import { useState } from 'react';
import { CAMPSITE_ROUTES } from '../constants';
import Link from 'next/link';
import Image from 'next/image';
import { campsites } from '../data/campsites';
import './campsitesList.scss';
import LocationFilter from '../components/LocationFilter/LocationFilter';

interface Campsite {
  id: number;
  name: string;
  region: string;
  terrain: string;
  location: string;
  scenicImage: string;
}

const CampsiteList = () => {
  const [filteredCampsites, setFilteredCampsites] = useState<Campsite[]>(campsites);

  return (
    <section className="campsite-list">
      <div className="campsite-list__hero">
        <h1 className="campsite-list__hero-title">Discover Your Next Adventure</h1>
      </div>

      {/* Pass setFilteredCampsites to LocationFilter */}
      <LocationFilter setFilteredCampsites={setFilteredCampsites} campsites={campsites} />

      <div className="campsite-list__cards-wrapper">
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
