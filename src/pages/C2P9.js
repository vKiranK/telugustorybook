import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import Kadu from "../components/kadu"

const C2P9 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="avi kukkalu." meaning="those dogs" fullmeaning="Those are dogs."/>
        <TGSentence display="avi maṃci kukkalu." meaning="those nice dogs" fullmeaning="Those are nice dogs."/>
        <TGSentence display="avi reṃḍu kukkalu nā?" meaning="those two dogs (question_marker)" fullmeaning="Are those two dogs?"/>
        <Kadu />
        <TGSentence display="avi muḍu kukkalu nā?" meaning="those three dogs (question_marker)" fullmeaning="Are those three dogs?"/>
        <TGSentence display="avunu! avi muḍu kukkalu." meaning="yes those three dogs" fullmeaning="Yes, those are three dogs."/>
			</div>
      <StaticImage
        src="../images/dogs.png"
        alt="A group of cats"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={300}
      />
      <Navbar back="C2P8" front="C2P10" />
    </main>
  )
}

export default C2P9;
