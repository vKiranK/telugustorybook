import * as React from "react"
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import { StaticImage } from "gatsby-plugin-image"

// markup
const C1P21 = () => {
  return (
    <main>
			<div className="telugu">
				<TGSentence display="adi ēmiṭi?" meaning="that what" fullmeaning="What is that (over there)?"/>
        <TGSentence display="adi oka pilli nā?" meaning="that a cat (question_marker)" fullmeaning="Is that (over there) a cat?" />
        <TGSentence display="avunu, adi oka pilli." meaning="yes that a cat" fullmeaning="Yes, that (over there) is a cat." />
			</div>

      <StaticImage
        src="../images/distantpilli.png"
        alt="A cat that is far away from the camera"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />

      <Navbar back="C1P20" front="C2P1" customfront="(Ch. 2)"/>
    </main>
  )
}

export default C1P21;
