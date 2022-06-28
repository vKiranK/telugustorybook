import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const C2P7 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="ivi kukkalu." meaning="these dogs" fullmeaning="These are dogs."/>
        <TGSentence display="ivi maṃci kukkalu." meaning="these nice dogs" fullmeaning="These are nice dogs."/>
        <TGSentence display="ivi maṃci kukkalu kada?" meaning="these nice dogs is-it-not-so" fullmeaning="These are nice dogs, right?"/>
        <TGSentence display="avunu!" meaning="yes" fullmeaning="Yes."/>
			</div>
      <StaticImage
        src="../images/close_dogs.png"
        alt="A group of dogs"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={300}
      />
      <Navbar back="C2P6" front="C2P8" />
    </main>
  )
}

export default C2P7;
