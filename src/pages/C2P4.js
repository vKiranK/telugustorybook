
import * as React from "react"
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import { StaticImage } from "gatsby-plugin-image"

const C2P4 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="adi oka pedda kukka kādu." meaning="that a big dog is-not" fullmeaning="That is not a big dog."/>
        <TGSentence display="adi oka cinna kukka." meaning="that a small dog" fullmeaning="That is not a big dog."/>
			</div>

      <StaticImage
        src="../images/farawaydog.jpeg"
        alt="A dog that is far away from the camera"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />

      <Navbar back="C2P3" front="C2P5"/>
    </main>
  )
}

export default C2P4;
