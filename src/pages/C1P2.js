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
const C1P2 = () => {
  return (
    <main>
			<div className="telugu">
				<TGSentence display="idi oka kukka nā?" meaning="this a dog (question_marker)" fullmeaning="Is this a dog?" isAudio="1" url="c1p2"/>
				<TGSentence display="avunu! idi oka kukka." meaning="yes this a dog." fullmeaning="Yes, this is a dog."/>
			</div>

      <StaticImage
        src="../images/dog.webp"
        alt="A dog"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />

      <Navbar back="C1P1" front="C1P3"/>
    </main>
  )
}

export default C1P2;
