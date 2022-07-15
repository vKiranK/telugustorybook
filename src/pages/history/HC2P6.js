import React, { createRef, useState, useEffect } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../../components/navbar"
import ShowEnglish from "../../components/showenglish"
import JSONSentence from "../../components/jsonsentence"
import Kadu from "../../components/kadu"
import Avunu from "../../components/avunu"

const HC2P6 = () => {
  return (
    <main>
			<div className="telugu">
        <JSONSentence sentid={27} content="historyone"/>
        <JSONSentence sentid={28} content="historyone"/>
        <JSONSentence sentid={29} content="historyone"/>
        <JSONSentence sentid={30} content="historyone"/>
        <Avunu />
			</div>
      <Navbar prefix="history" back="HC2P5" front="HC2P7" />
    </main>
  )
}

export default HC2P6;
