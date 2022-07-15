import React, { createRef, useState, useEffect } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../../components/navbar"
import ShowEnglish from "../../components/showenglish"
import JSONSentence from "../../components/jsonsentence"
import Kadu from "../../components/kadu"
import Avunu from "../../components/avunu"

const HC2P4 = () => {
  return (
    <main>
			<div className="telugu">
        <JSONSentence sentid={15} content="historyone"/>
        <JSONSentence sentid={16} content="historyone"/>
        <JSONSentence sentid={17} content="historyone"/>
        <JSONSentence sentid={18} content="historyone"/>
        <JSONSentence sentid={19} content="historyone"/>
        <JSONSentence sentid={20} content="historyone"/>
        <Avunu />
			</div>
      <Navbar prefix="history" back="HC2P3" front="HC2P5" />
    </main>
  )
}

export default HC2P4;
