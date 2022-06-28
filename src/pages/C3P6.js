import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import Kadu from "../components/kadu"
import Avunu from "../components/avunu"

const C3P6 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="ī pilli ēmi cēsutuṃdi?" meaning="this cat what is-doing" fullmeaning="What is that cat doing?"/>
        <TGSentence display="ī pilli tavvutuṃdā?" meaning="this cat is-digging_+_question_marker" fullmeaning="Is that cat digging?"/>
        <TGSentence display="lēdu!" meaning="it-is-not" fullmeaning="No! (lit. it is not)"/>
        <TGSentence display="mari ēmi cēsutuṃdi?" meaning="then what it-is-doing" fullmeaning="Then what is it doing?"/>
        <TGSentence display="ī pilli arustuṃdi." meaning="that cat is-screaming" fullmeaning="That cat is screaming."/>
			</div>
      <StaticImage
        src="../images/angrycat.jpg"
        alt="A cat"
        placeholder="blurred"
        layout="fixed"
        width={400}
      />
      <Navbar back="C3P4" front="C3P6" />
    </main>
  )
}

export default C3P6;
