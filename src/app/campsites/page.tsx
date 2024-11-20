import { CAMPSITE_ROUTES } from '../constants';
import Link from 'next/link';
import Image from 'next/image';
import { campsites } from '../data/campsites';
import './campsitesList.scss';

const CampsiteList = () => {
  return (
    <section className="campsite-list">
      <div className="campsite-list__hero">
        <h1 className="campsite-list__hero-title">Discover Your Next Adventure</h1>
      </div>

      <div className="campsite-list__cards-wrapper">
      {CAMPSITE_ROUTES.map(({ href, key, label }) => (
          <div key={key} className="campsite-list__card">
              <Image 
                src={`/images/${campsites.find(camp => camp.id === key)?.scenicImage}`} 
                width={200} 
                height={200} 
                className="campsite-list__card-img" 
                alt={label} 
              />
              <h2 className="campsite-list__card-title">{label}</h2>
              <h3 className="campsite-list__card-location">{campsites?.find(camp => camp.id === key)?.location}</h3>
              <Link href={href}>
                <button className="campsite-list__card-btn">Explore</button>
              </Link>
          </div>
        ))}
        </div>
    </section>
  );
};

export default CampsiteList;
