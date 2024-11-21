import construction from "/images/construction.jpg"
import Image from "next/image"

function Essentials() {
  return (
    <div>
        <Image src={construction} alt="Under Construction" width={600} height={400} />
    </div>
  )
}

export default Essentials;