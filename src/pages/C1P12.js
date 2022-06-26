import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const C1P12 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi oka kukka nā?" meaning="this a dog (question_marker)" fullmeaning="Is this a dog?"/>
				<TGSentence display="idi oka maṃci kukka nā?" meaning="this a nice dog (question_marker)" fullmeaning="Is this a nice dog?"/>
				<TGSentence display="idi oka kukka kādu." meaning="this a dog is-not" fullmeaning="This is not a dog."/>
			</div>
      <StaticImage
        src="../images/bird.png"
        alt="A bear"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="C1P11" front="C1P14" />
    </main>
  )
}

export default C1P12;
