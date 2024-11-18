import { CAMPSITE_ROUTES } from '../constants';
import Link from 'next/link';
import Image from 'next/image';
import hero from "/images/hero-campsite.jpg";
import { campsites } from '../data/campsites';

const CampsiteList = () => {
  return (
    <section className="campsite-list">
      <div className="campsite-list__hero">
        <h1>Discover Your Next Adventure</h1>
        <Image className="campsite-list__hero-img" width={600} height={400} src={hero} alt="hero" />
      </div>

      <h1 className="campsite-list__title">Campsites</h1>
      {CAMPSITE_ROUTES.map(({ href, key, label, location }) => (
          <div key={key} className="campsite-list__card">
              <Image 
                src={`/images/${campsites.find(camp => camp.id === key)?.scenicImage}`} 
                width={200} 
                height={200} 
                className="campsite-liste__card-img" 
                alt={label} 
              />
              <h2 className="campsite-list__card-title">{label}</h2>
              <h3 className="campsite-list__card-location">{location}</h3>
              <Link href={href}>
                <button className="campsite-list__card-btn">Explore</button>
              </Link>
          </div>
        ))}
    </section>
  );
};

export default CampsiteList;
