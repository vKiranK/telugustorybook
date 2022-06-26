import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const C1P18 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi oka kukka nā?" meaning="this a dog (question_marker)" fullmeaning="Is this a dog?"/>
        <TGSentence display="kādu!" meaning="no" fullmeaning="No."/>
        <TGSentence display="idi oka piṭṭa nā?" meaning="this a dog (question_marker)" fullmeaning="Is this a bird?"/>
        <TGSentence display="kādu!" meaning="no" fullmeaning="No."/>
        <TGSentence display="mari idi ēmiṭi?" meaning="then this what" fullmeaning="Then what is this?"/>
        <TGSentence display="idi oka eluka." meaning="this a rat" fullmeaning="This is a rat."/>
			</div>
      <StaticImage
        src="../images/cuterat.jpg"
        alt="A cat"
        placeholder="blurred"
        layout="fixed"
        width={400}
      />
      <Navbar back="C1P18" front="C1P20" />
    </main>
  )
}

export default C1P18;
