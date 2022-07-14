import React, { createRef, useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Navbar from "../../components/navbar"
import ShowEnglish from "../../components/showenglish"
import JSONSentence from "../../components/jsonsentence"

const VC2P2 = () => {
  return (
    <main id="monkey">
      <div className="telugu poetry">
        <JSONSentence sentid={3} content="vemana_moral"/>
        <JSONSentence sentid={4} content="vemana_moral"/>
        <JSONSentence sentid={5} content="vemana_moral"/>
        <JSONSentence sentid={0} content="vemana_religious"/>
			</div>
      <Navbar prefix="vemana" back="VC2P1" front="VC2P3" />
    </main>
  )
}

export default VC2P2;
