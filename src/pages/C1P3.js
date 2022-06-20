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
const C1P3 = () => {
  return (
    <main>
			<div className="telugu">
				<TGSentence display="idi oka pilli." meaning="this a pilli" fullmeaning="This is a cat." isAudio="1" url="c1p3"/>
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

      <Navbar back="C1P2" front="C1P4"/>
    </main>
  )
}

export default C1P3;
