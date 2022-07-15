import React, { createRef, useState, useEffect } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../../components/navbar"
import ShowEnglish from "../../components/showenglish"
import JSONSentence from "../../components/jsonsentence"
import Kadu from "../../components/kadu"
import Avunu from "../../components/avunu"

const HC2P3 = () => {
  return (
    <main>
			<div className="telugu">
        <JSONSentence sentid={10} content="historyone"/>
        <JSONSentence sentid={11} content="historyone"/>
        <JSONSentence sentid={12} content="historyone"/>
        <JSONSentence sentid={13} content="historyone"/>
        <JSONSentence sentid={14} content="historyone"/>
			</div>
      <Navbar prefix="history" back="HC2P2" front="HC2P4" />
    </main>
  )
}

export default HC2P3;
