import { CAMPSITE_ROUTES } from '../constants';
import Link from 'next/link';
import Image from 'next/image';

const CampsiteList = () => {
  return (
    <>
      <h1 className="camp-title">Campsites</h1>
      <div className="camp-list">
        {CAMPSITE_ROUTES.map(({ href, key, label }) => (
          <div key={key} className="camp-list__item">
            <Link href={href} className="camp-list__link">
              <Image 
                src={`/images/${key}-thumbnail.jpg`} 
                alt={label} 
                width={300} 
                height={200} 
              />
              <h2 className="camp-list__title">{label}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CampsiteList;
