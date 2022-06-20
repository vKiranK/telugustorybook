import * as React from "react"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"

// markup
const C1P5 = () => {
  return (
    <main>
			<div className="telugu">
				<TGSentence display="idi oka kukka nā?" meaning="this a dog (question_marker)" fullmeaning="Is this a dog?" isAudio="1" url="c1p5" />
        <TGSentence display="idi oka kukka kādu." meaning="this a dog is-not" fullmeaning="This is not a dog."/>
			</div>

      <StaticImage
        src="../images/cuterat.jpg"
        alt="A cat"
        placeholder="blurred"
        layout="fixed"
        width={400}
      />

      <Navbar back="C1P4" front="C1P6"/>
    </main>
  )
}

export default C1P5;
