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
        <Image src={`/images/${camp.image}`} alt={camp.name} />
      </div>
    ))}
  </div>
  )
}

export default CampList