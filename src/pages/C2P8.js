import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import Kadu from "../components/kadu"

const C2P8 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="ivi pillulu." meaning="these cats" fullmeaning="These are cats."/>
        <TGSentence display="ivi maṃci pillulu." meaning="these nice cats" fullmeaning="These are nice cats."/>
        <TGSentence display="ivi reṃḍu pillulu." meaning="these two cats" fullmeaning="These are two cats."/>
			</div>
      <StaticImage
        src="../images/twocats.png"
        alt="A group of cats"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="C2P7" front="C2P9" />
    </main>
  )
}

export default C2P8;
