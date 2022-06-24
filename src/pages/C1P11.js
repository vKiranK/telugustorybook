import * as React from "react"
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import { StaticImage } from "gatsby-plugin-image"

// markup
const C1P11 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="adi oka pilli nā?" meaning="that a cat (question_marker)" fullmeaning="Is that (over there) a cat?" />
        <TGSentence display="avunu, adi oka pilli." meaning="yes that a cat" fullmeaning="Is that (over there) a cat?" />
				<TGSentence display="adi oka maṃci pilli." meaning="that a nice cat" fullmeaning="That (over there) is a nice cat."/>
			</div>

      <StaticImage
        src="../images/farawaydog.jpeg"
        alt="A cat that is far away from the camera"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />

      <Navbar back="C1P9" front="C1P12"/>
    </main>
  )
}

export default C1P11;
