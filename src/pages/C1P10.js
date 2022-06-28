import * as React from "react"
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import { StaticImage } from "gatsby-plugin-image"

// markup
const C1P9 = () => {
  return (
    <main>
			<div className="telugu">
				<TGSentence display="idi oka kukka." meaning="this a dog" fullmeaning="This is a dog." />
        <TGSentence display="idi oka maṃci kukka nā?" meaning="this a nice dog (question_marker)" fullmeaning="Is this a nice dog?"/>
        <TGSentence display="idi oka maṃci kukka kādu." meaning="this a nice dog is_not" fullmeaning="This is not a nice dog."/>
			</div>

      <StaticImage
        src="../images/bad_dog.png"
        alt="An angry dog"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />

      <Navbar back="C1P8" front="C1P9"/>
    </main>
  )
}

export default C1P9;
