import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const C2P1 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi ēmiṭi?" meaning="this what" fullmeaning="What is this?" />
        <TGSentence display="idi oka kukka." meaning="this a dog" fullmeaning="This is a dog."/>
				<TGSentence display="idi oka maṃci kukka." meaning="this a nice dog" fullmeaning="This is a nice dog."/>
			</div>
      <StaticImage
        src="../images/dog.webp"
        alt="A dog"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="C1P21" front="C2P2" customprev="(Ch. 1)"/>
    </main>
  )
}

export default C2P1;
