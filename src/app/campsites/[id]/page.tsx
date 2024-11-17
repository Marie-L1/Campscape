// for "/campsites/id" routes
"use client";
import { useParams } from "next/navigation";
import { campsites } from "@/app/data/campsites";
import Image from "next/image";

const CampsiteById = () =>{
    const { id } = useParams();
    const campsite = campsites.find(camp => camp.id === id);

    if(!campsite){
        return <p>Campsite not found</p>
    }

    return(
        <section className="campsite">
            <h1 className="campsite__title">{campsite.name}</h1>
            <Image src={`/images/${campsite.scenicImage}`} alt={campsite.name} width={600} height={400} />
            <p>Location: {campsite.location}</p>
            <p>{campsite.description}</p>
        </section>
    )
}

export default CampsiteById;