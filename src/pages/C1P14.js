import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const C1P14 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi oka pilli nā?" meaning="this a cat (question_marker)" fullmeaning="Is this a cat?"/>
				<TGSentence display="idi oka maṃci pilli nā?" meaning="this a nice dog (question_marker)" fullmeaning="Is this a nice dog?"/>
				<TGSentence display="kādu! idi oka pilli kādu!" meaning="no this a dog is-not" fullmeaning="No. This is not a dog."/>
        <TGSentence display="idi ēmiṭi?" meaning="this what" fullmeaning="What is this?"/>
			</div>
      <StaticImage
        src="../images/bird.png"
        alt="A bear"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="C1P12" front="C1P15" />
    </main>
  )
}

export default C1P14;
