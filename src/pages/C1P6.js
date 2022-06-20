import * as React from "react"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"

// markup
const C1P6 = () => {
  // Left/right-arrow navigation
  return (
    <main>
			<div className="telugu">
				<TGSentence display="idi oka pilli nā?" meaning="this a cat (question_marker)" fullmeaning="Is this a cat?" isAudio="1" url="c1p6"/>
        <TGSentence display="idi oka pilli kādu." meaning="this a cat is-not" fullmeaning="This is not a cat."/>
        <TGSentence display="idi oka eluka." meaning="this a rat" fullmeaning="This is a rat."/>
			</div>

      <StaticImage
        src="../images/cuterat.jpg"
        alt="A cat"
        placeholder="blurred"
        layout="fixed"
        width={400}
      />

      <Navbar back="C1P5" front="C1P7"/>
    </main>
  )
}

export default C1P6;
