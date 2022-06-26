import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const C1P17 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi oka piṭṭa nā?" meaning="this a bird (question_marker)" fullmeaning="Is this a bird?"/>
        <TGSentence display="avunu!" meaning="yes" fullmeaning="Yes."/>
			</div>
      <StaticImage
        src="../images/bird.png"
        alt="A bear"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="C1P16" front="C1P18" />
    </main>
  )
}

export default C1P17;
