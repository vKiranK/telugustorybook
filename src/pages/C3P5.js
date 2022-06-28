import * as React from "react"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar"

// markup
const C3P5 = () => {
  return (
    <main>
			<div className="telugu">
				<TGSentence display="idi oka pilli." meaning="this a cat" fullmeaning="This is a cat." isAudio="1" url="c1p7"/>
        <TGSentence display="idi oka maṃci pilli kādu." meaning="this a good cat is-not" fullmeaning="This is not a good cat."/>
			</div>

      <StaticImage
        src="../images/angrycat.jpg"
        alt="A cat"
        placeholder="blurred"
        layout="fixed"
        width={400}
      />

      <Navbar back="C3P4" front="C3P6"/>
    </main>
  )
}

export default C3P5;
