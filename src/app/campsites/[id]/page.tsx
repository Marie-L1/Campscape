// for "/campsites/id" routes
"use client";
import { useParams } from "next/navigation";
import { campsites } from "@/app/data/campsites";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./campsite.module.scss";

const CampsiteById = () =>{
    const { id } = useParams();
    const campsite = campsites.find(camp => camp.id === id);

    if(!campsite){
        return <p>Campsite not found</p>
    }

    const [currentImage, setCurrentImage] = useState("campsiteImage");

    useEffect(() =>{
        const imageInterval = setInterval(() => {
            setCurrentImage(currentImage === "campsiteImage" ? "scenicImage" : "campsiteImage");
        }, 3000);
        return () => clearInterval(imageInterval);
    }, []);

    return(
        <section className="campsite">
            <div className="campsite__header">
                <h1 className="campsite__title">{campsite.name}</h1>
                <Image
                src={`/images/${campsite[currentImage]}`}
                alt={campsite.name}
                width={600} 
                height={400} />
            </div>
            <div className="campsite__details">
                <p>Location: {campsite.location}</p>
                <p>Elevation: {campsite.elevation}</p>
                <p>{campsite.description}</p>
            </div>
            <div className="campsite__reviews">
                <h2>Reviews</h2>
                {campsite.reviews.map(({name, comment, timestamp}, index) => (
                    <div key={index} className="campsite__reviews-item">
                        <h3 className="campsite__reviews-name">{name}:</h3>
                        <h3 className="campsite__reviews-timestamp">{timestamp}</h3>
                        <p className="campsite__reviews-comment">{comment}</p>
                    </div>
                ))} 
            </div>
        </section>
    )
}

export default CampsiteById;