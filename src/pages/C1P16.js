import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const C1P16 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi oka piṭṭa." meaning="this a bird" fullmeaning="This is a bird."/>
			</div>
      <StaticImage
        src="../images/bird.png"
        alt="A bear"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="C1P15" front="C1P17" />
    </main>
  )
}

export default C1P16;
