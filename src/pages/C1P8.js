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
				<TGSentence display="idi oka eluka nā?" meaning="this a rat (question_marker)" fullmeaning="Is this a rat?" isAudio="1" url="c1p8"/>
        <TGSentence display="avunu! idi oka eluka." meaning="yes this a rat" fullmeaning="Yes, this is a rat."/>
			</div>

      <StaticImage
        src="../images/cuterat.jpg"
        alt="A cat"
        placeholder="blurred"
        layout="fixed"
        width={400}
      />

      <Navbar back="C1P7" front="C1P9"/>
    </main>
  )
}

export default C1P6;
