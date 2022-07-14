import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Navbar from "../../components/navbar"
import ShowEnglish from "../../components/showenglish"
import JSONSentence from "../../components/jsonsentence"

const VC1P1 = () => {
  return (
    <main id="monkey">
      <div className="telugu poetry">
        <JSONSentence sentid={1} content="vemana_religious"/>
        <JSONSentence sentid={2} content="vemana_religious"/>
        <JSONSentence sentid={3} content="vemana_religious"/>
        <JSONSentence sentid={0} content="vemana_religious"/>
			</div>
      <Navbar prefix="vemana" back="VemanaIntro" front="VC1P2" />
    </main>
  )
}

export default VC1P1;
