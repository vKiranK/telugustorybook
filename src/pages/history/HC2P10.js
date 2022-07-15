import React, { createRef, useState, useEffect } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../../components/navbar"
import ShowEnglish from "../../components/showenglish"
import JSONSentence from "../../components/jsonsentence"
import Kadu from "../../components/kadu"
import Avunu from "../../components/avunu"

const HC2P10 = () => {
  return (
    <main>
			<div className="telugu">
        <JSONSentence sentid={40} content="historyone"/>
        <JSONSentence sentid={41} content="historyone"/>
        <JSONSentence sentid={42} content="historyone"/>
        <JSONSentence sentid={43} content="historyone"/>
        <JSONSentence sentid={44} content="historyone"/>
			</div>
      <Navbar prefix="history" back="HC2P8" front="HC2P10" />
    </main>
  )
}

export default HC2P10;
