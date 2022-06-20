import * as React from "react"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"

// markup
const C1P4 = () => {
  return (
    <main>
			<div className="telugu">
				<TGSentence display="idi oka pilli nā?" meaning="this a cat (question_marker)" fullmeaning="Is this a cat?" isAudio="1" url="c1p4" />
				<TGSentence display="avunu! idi oka pilli." meaning="yes this a cat" fullmeaning="Yes, this is a cat."/>
			</div>

      <StaticImage
        src="../images/cat.png"
        alt="A cat"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={474}
      />

      <Navbar back="C1P3" front="C1P5"/>
    </main>
  )
}

export default C1P4;
