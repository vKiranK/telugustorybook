import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import Kadu from "../components/kadu"
import Avunu from "../components/avunu"

const C3P3 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="idi oka pilli." meaning="this a cat" fullmeaning="This is a cat."/>
        <TGSentence display="ī pilli ēmi cēsutuṃdi?" meaning="this cat what is-doing" fullmeaning="What is this cat doing?"/>
        <TGSentence display="ī pilli tiṃṭunṃdi." meaning="this cat is-eating" fullmeaning="This cat is eating."/>
        <TGSentence display="idi oka maṃci pilli nā?" meaning="this a nice cat (question_marker)" fullmeaning="Is this a nice cat?"/>
        <Avunu />
			</div>
      <StaticImage
        src="../images/dogeating.jpg"
        alt="A dog eating food"
        placeholder="blurred"
        layout="fixed"
        width={448}
        height={330}
      />
      <Navbar back="C3P2" front="C3P4" />
    </main>
  )
}

export default C3P3;
