import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import JSONSentence from "../components/jsonsentence"

const RC1P1 = () => {
  return (
    <main>
			<div className="telugu">
        <JSONSentence sentid={5} />
        <JSONSentence sentid={6} />
        <JSONSentence sentid={7} />
        <JSONSentence sentid={8} />
        <JSONSentence sentid={9} />
			</div>
      <Navbar back="RaoIntro" front="RC1P2" />
    </main>
  )
}

export default RC1P1;
