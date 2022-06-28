import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import Kadu from "../components/kadu"
import Avunu from "../components/avunu"

const C2P10 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="avi kukkalu." meaning="those dogs" fullmeaning="Those are dogs."/>
        <TGSentence display="avi enni kukkalu?" meaning="those how-many dogs" fullmeaning="How many dogs are those?"/>
        <TGSentence display="avi muḍu kukkalu." meaning="those three dogs" fullmeaning="Those are three dogs."/>
			</div>
      <StaticImage
        src="../images/dogs.png"
        alt="A group of cats"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={300}
      />
      <Navbar back="C2P9" front="C2P11" />
    </main>
  )
}

export default C2P10;
