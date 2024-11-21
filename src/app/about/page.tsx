import Image from "next/image"
import "./about.scss"

function AboutPage() {
  return (
    <div className="about">
        <Image className="about__construction" src="/images/construction.jpg" alt="Under Construction" width={600} height={400} />
    </div>
  )
}

export default AboutPage;