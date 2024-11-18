// for "/campsites/id" routes
"use client";
import { useParams } from "next/navigation";
import { campsites } from "@/app/data/campsites";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./campsite.scss";

const CampsiteById = () =>{
    const { id } = useParams();
    const campsite = campsites.find(camp => camp.id === id);


    if(!campsite){
        return <p>Campsite not found</p>
    }

    const [currentImage, setCurrentImage] = useState("campsiteImage");

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImage(prev =>
                prev === "campsiteImage" ? "scenicImage" : "campsiteImage"
            );
        }, 3000);
        return () => clearInterval(imageInterval);
    }, []);

    return(
        <section className="campsite">
            <div className="campsite__header">
                <h1 className="campsite__title">{campsite.name}</h1>
                <Image
                className="campsite__img"
                src={`/images/${campsite[currentImage]}`}
                alt={campsite.name}
                width={600} 
                height={400} />
            </div>
            <div className="campsite__details">
                <p className="campsite__location">Location: {campsite.location}</p>
                <p className="campsite__elevation">Elevation: {campsite.elevation}</p>
            </div>
                <p className="campsite__description">{campsite.description}</p>
            <div className="campsite__reviews">
                <h2 className="campsite__reviews-title">Reviews</h2>
                {campsite.reviews.map(({name, comment, timestamp}, index) => (
                    <div key={index} className="campsite__reviews-item">
                        <div className="campsite__name-wrapper">
                            <h3 className="campsite__reviews-name">{name}</h3>
                            <h3 className="campsite__reviews-timestamp">{timestamp}</h3>
                        </div>
                        <p className="campsite__reviews-comment">{comment}</p>
                    </div>
                ))} 
            </div>
        </section>
    )
}

export default CampsiteById;