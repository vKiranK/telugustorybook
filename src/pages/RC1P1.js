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
        <JSONSentence sentid={0} content="rao"/>
        <JSONSentence sentid={1} content="rao"/>
        <JSONSentence sentid={2} content="rao"/>
        <JSONSentence sentid={3} content="rao"/>
        <JSONSentence sentid={4} content="rao"/>
			</div>
      <Navbar back="RaoIntro" front="RC1P2" />
    </main>
  )
}

export default RC1P1;
