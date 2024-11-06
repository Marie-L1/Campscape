import { CAMPSITE_ROUTES } from '../../constants/index'; 
import { campsites } from '../../data/campsites';
import Image from 'next/image';
import Link from 'next/link';
import './CampList.scss';

const CampList = () => {
  return (
    <>
      <div className="camp-title">
        <h1 className="camp-title__title">Campsites</h1>
        <button>
        <Image className="camp-list__arrow-right" src="/images/arrow-right.svg" alt="arrow" width={50} height={50} />
        </button>
        <button>
        <Image className="camp-list__arrow-right" src="/images/arrow-left.svg" alt="arrow" width={50} height={50} />
        </button>
      </div>
      <div className="camp-list">

        {CAMPSITE_ROUTES.map(({ href, key, label }) => (
          <div key={key} className="camp-list__item">
            <Link href={href} className="camp-list__link">
              <Image 
                src={`/images/${campsites.find(camp => camp.id === key)?.scenicImage}`} 
                width={300} 
                height={300} 
                className="camp-list__img" 
                alt={label} 
              />
              <h2 className="camp-list__title">{label}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CampList;
