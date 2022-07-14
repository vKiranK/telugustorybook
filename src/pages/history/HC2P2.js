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
        <JSONSentence sentid={11} content="historyone"/>
        <JSONSentence sentid={12} content="historyone"/>
        <JSONSentence sentid={13} content="historyone"/>
        <Avunu />
			</div>
      <Navbar prefix="history" back="HC2P1" front="HC2P3" />
    </main>
  )
}

export default HC2P1;
