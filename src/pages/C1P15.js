import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const C1P15 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi oka pilli nā?" meaning="this a cat (question_marker)" fullmeaning="Is this a cat?"/>
				<TGSentence display="kādu!" meaning="no" fullmeaning="No!"/>
        <TGSentence display="idi oka kukka nā?" meaning="this a dog (question_marker)" fullmeaning="Is this a dog?"/>
				<TGSentence display="kādu!" meaning="no" fullmeaning="No!"/>
        <TGSentence display="mari idi ēmiṭi?" meaning="then this what" fullmeaning="Then what is this?"/>
			</div>
      <StaticImage
        src="../images/bird.png"
        alt="A bear"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="C1P14" front="C1P16" />
    </main>
  )
}

export default C1P15;
