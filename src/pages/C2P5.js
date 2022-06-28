import * as React from "react"
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import { StaticImage } from "gatsby-plugin-image"

const C2P5 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi kūḍa oka cinna kukka." meaning="this also a small dog" fullmeaning="This is also a small dog."/>
        <TGSentence display="idi oka pedda kukka kādu." meaning="this a big dog is-not" fullmeaning="This is not a big dog."/>
        <TGSentence display="idi oka maṃci kukka." meaning="this a nice dog" fullmeaning="This is a nice dog."/>
        <TGSentence display="idi oka maṃci kukka kada?" meaning="this a nice dog is-it-not-so_(i.e._indeed)" fullmeaning="This is a nice dog, right?"/>
			</div>

      <StaticImage
        src="../images/cupdog.png"
        alt="A cute dog in a cup"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />

      <Navbar back="C2P4" front="C2P6"/>
    </main>
  )
}

export default C2P5;
