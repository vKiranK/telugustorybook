import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const C2P3 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi ēmiṭi?" meaning="this what" fullmeaning="What is this?" />
        <TGSentence display="idi oka kukka." meaning="this a dog" fullmeaning="This is a dog."/>
				<TGSentence display="idi oka pedda kukka." meaning="this a big dog" fullmeaning="This is a big dog."/>
			</div>
      <StaticImage
        src="../images/dog.webp"
        alt="A dog"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="C2P2" front="C2P4"/>
    </main>
  )
}

export default C2P3;
