import * as React from "react"
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import { StaticImage } from "gatsby-plugin-image"

// styles

const imgStyles = {
	float: "left",
}

// markup
const C1P9 = () => {
  return (
    <main>
			<div className="telugu">
				<TGSentence display="adi oka kukka." meaning="that a dog" fullmeaning="That (over there) is a dog." isAudio="1" url="c1p9"/>
				<TGSentence display="adi oka maṃci kukka." meaning="that a nice dog" fullmeaning="That (over there) is a nice dog."/>
			</div>

      <StaticImage
        src="../images/farawaydog.jpeg"
        alt="A dog that is far away from the camera"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />

      <Navbar back="C1P8" front="C1P9"/>
    </main>
  )
}

export default C1P9;
