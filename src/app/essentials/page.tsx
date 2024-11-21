import Image from "next/image"
import "./essentials.scss"


function Essentials() {
  return (
    <div className="essentials">
        <Image className="essentials__construction" src="/images/construction.jpg" alt="Under Construction" width={600} height={400} />
    </div>
  )
}

export default Essentials;