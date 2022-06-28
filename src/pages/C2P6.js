import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const C2P6 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi oka kukka nā?" meaning="this a dog (question_marker)" fullmeaning="Is this a dog?"/>
        <TGSentence display="avunu!" meaning="yes" fullmeaning="Yes."/>
        <TGSentence display="idi oka maṃci kukka nā?" meaning="this a nice dog (question_marker)" fullmeaning="Is this a nice dog?"/>
        <TGSentence display="kādu!" meaning="no" fullmeaning="No."/>
        <TGSentence display="idi oka cinna kukka nā?" meaning="this a small dog (question_marker)" fullmeaning="Is this a small dog?"/>
        <TGSentence display="kādu!" meaning="no" fullmeaning="No."/>
        <TGSentence display="mari idi ēmiṭi?" meaning="then this what" fullmeaning="Then what is this?"/>
        <TGSentence display="idi oka picci kukka." meaning="this a bad dog" fullmeaning="This is a bad dog."/>
			</div>
      <StaticImage
        src="../images/bad_dog.png"
        alt="An angry dog"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="C2P5" front="C2P7" />
    </main>
  )
}

export default C2P6;
