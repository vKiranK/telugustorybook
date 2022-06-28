import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import Kadu from "../components/kadu"
import Avunu from "../components/avunu"

const C3P4 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="ā kukka ēmi cēsutuṃdi?" meaning="this dog what is-doing" fullmeaning="What is that dog doing?"/>
        <TGSentence display="ā kukka tavvutuṃdi." meaning="this dog is-digging" fullmeaning="That dog is digging."/>
        <TGSentence display="eṃduku tavvutuṃdi?" meaning="why is-digging" fullmeaning="Why is (it) digging?"/>
        <TGSentence display="evariki teliyadu." meaning="to-anyone it-is-not-known" fullmeaning="Nobody knows (lit. to anyone it is not known)."/>
			</div>
      <StaticImage
        src="../images/dogeating.jpg"
        alt="A dog eating food"
        placeholder="blurred"
        layout="fixed"
        width={448}
        height={330}
      />
      <Navbar back="C3P3" front="C3P5" />
    </main>
  )
}

export default C3P4;
