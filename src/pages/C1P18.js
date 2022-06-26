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
        <TGSentence display="idi oka piṭṭa nā?" meaning="this a bird (question_marker)" fullmeaning="Is this a bird?"/>
        <TGSentence display="kādu!" meaning="no" fullmeaning="No."/>
        <TGSentence display="mari idi ēmiṭi?" meaning="then this what" fullmeaning="Then what is this?"/>
        <TGSentence display="idi oka kukka." meaning="this a dog" fullmeaning="This is a dog."/>
			</div>
      <StaticImage
        src="../images/dog.webp"
        alt="A dog"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="C1P17" front="C1P19" />
    </main>
  )
}

export default C1P18;
