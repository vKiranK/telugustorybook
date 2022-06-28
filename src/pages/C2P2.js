import * as React from "react"
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import { StaticImage } from "gatsby-plugin-image"

// markup
const C2P2 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi ēmiṭi?" meaning="this what" fullmeaning="What is this?" />
				<TGSentence display="idi oka pilli." meaning="this a pilli" fullmeaning="This is a cat." />
				<TGSentence display="idi oka maṃci pilli." meaning="this a nice cat" fullmeaning="This is a nice cat."/>
			</div>

      <StaticImage
        src="../images/cat.png"
        alt="A cat"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={474}
      />

      <Navbar back="C2P1" front="C2P3"/>
    </main>
  )
}

export default C2P2;
