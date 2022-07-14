import React, { createRef, useState, useEffect } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../../components/navbar"
import ShowEnglish from "../../components/showenglish"
import JSONSentence from "../../components/jsonsentence"
import Kadu from "../../components/kadu"
import Avunu from "../../components/avunu"

const HC2P1 = () => {
  return (
    <main>
			<div className="telugu">
        <JSONSentence sentid={0} content="historyone"/>
        <JSONSentence sentid={1} content="historyone"/>
        <JSONSentence sentid={2} content="historyone"/>
        <JSONSentence sentid={3} content="historyone"/>
        <JSONSentence sentid={4} content="historyone"/>
        <JSONSentence sentid={5} content="historyone"/>
        <Avunu />
			</div>
      <Navbar prefix="history" back="HistoryIntro" front="HC2P2" />
    </main>
  )
}

export default HC2P1;
