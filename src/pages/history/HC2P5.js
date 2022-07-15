import React, { createRef, useState, useEffect } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../../components/navbar"
import ShowEnglish from "../../components/showenglish"
import JSONSentence from "../../components/jsonsentence"
import Kadu from "../../components/kadu"
import Avunu from "../../components/avunu"

const HC2P5 = () => {
  return (
    <main>
			<div className="telugu">
        <JSONSentence sentid={21} content="historyone"/>
        <JSONSentence sentid={22} content="historyone"/>
        <JSONSentence sentid={23} content="historyone"/>
        <JSONSentence sentid={24} content="historyone"/>
        <JSONSentence sentid={25} content="historyone"/>
        <Kadu />
        <JSONSentence sentid={26} content="historyone"/>
        <Avunu />
			</div>
      <Navbar prefix="history" back="HC2P4" front="HC2P6" />
    </main>
  )
}

export default HC2P5;
