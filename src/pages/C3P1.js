import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import Kadu from "../components/kadu"
import Avunu from "../components/avunu"

const C3P1 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi ēmiṭi?" meaning="this what" fullmeaning="What is this?"/>
        <TGSentence display="idi oka kukka." meaning="this a dog" fullmeaning="This is a dog."/>
        <TGSentence display="ī kukka ēmi cēsutuṃdi?" meaning="this dog what is-doing" fullmeaning="What is this dog doing?"/>
        <TGSentence display="ī kukka tiṃṭunṃdi." meaning="this dog is-eating" fullmeaning="This dog is eating."/>
			</div>
      <StaticImage
        src="../images/dogeating.jpg"
        alt="A dog eating food"
        placeholder="blurred"
        layout="fixed"
        width={448}
        height={330}
      />
      <Navbar back="C2P9" front="C3P2" />
    </main>
  )
}

export default C3P1;
