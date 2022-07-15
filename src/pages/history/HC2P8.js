import React, { createRef, useState, useEffect } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../../components/navbar"
import ShowEnglish from "../../components/showenglish"
import JSONSentence from "../../components/jsonsentence"
import Kadu from "../../components/kadu"
import Avunu from "../../components/avunu"

const HC2P8 = () => {
  return (
    <main>
			<div className="telugu">
        <JSONSentence sentid={31} content="historyone"/>
        <JSONSentence sentid={32} content="historyone"/>
        <JSONSentence sentid={33} content="historyone"/>
        <JSONSentence sentid={34} content="historyone"/>
			</div>
      <Navbar prefix="history" back="HC2P6" front="HC2P8" />
    </main>
  )
}

export default HC2P8;
