import { campsites } from "../../data/campsites"
import Image from "next/image"

const CampList = () => {
  return (
    <div>
    {campsites.map((camp) => (
      <div key={camp.id}>
        <h2 className="">{camp.name}</h2>
        <p className="">{camp.location}</p>
        <p className="">{camp.elevation}</p>
        <Image src={`/images/${camp.scenicImage}`} width={400} height={400} className="camp-list__img" alt={camp.name} />
      </div>
    ))}
  </div>
  )
}

export default CampList