import Image from "next/image";
import Button from "../Button/Button";

const CampHero = () => {
  return (
    <section className="hero">
      <div className="hero__map">

        {/* LEFT SIDE */}
        <div className="hero__map-left">
            <Image className="hero__map-img" src="/camp.svg" alt="camp" width={50} height={50}/>
        </div>
        <h1 className="hero__title">Example Campground</h1>
        <p className="hero__description"></p>
        
        <div className="hero__stars">
            {Array(5).fill(1).map((_, index) => (
                <Image 
                src="/star.svg"
                alt="star"
                key={index}
                width={24}
                height={24}
                className="hero__star-imgs" />
            ))}

            <p className="hero__reviews">
                198k 
                <span className="hero__reviews-span">Excellent Reviews</span>
            </p>
        </div>
        <div className="hero__btn-wrapper">
            <Button 
                type="button"
                title="Download App"
                variant="btn_green"
            />
            <Button 
                type="button"
                title="How we work?"
                icon="/play.svg"
                variant="btn_white_text"
            />
        </div>
      </div>

      <div className="camp-map">
        <div className="camp-map__container">
            <p className="camp-map__location">Location</p>
            <p className="camp-map__location-name">Example Location</p>

            <div className="camp-map__location-wrapper">
                <p className="camp-map__distance">Distance</p>
                <p className="camp-map__distance-num">173.28 mi</p>
            </div>
            <div className="camp-map__elevation-wrapper">
                <p className="camp-map__elevation">Elevation</p>
                <p className="camp-map__elevation-num">2.0240km</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CampHero;