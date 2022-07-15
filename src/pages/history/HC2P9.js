import React, { createRef, useState, useEffect } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "../../components/navbar"
import ShowEnglish from "../../components/showenglish"
import JSONSentence from "../../components/jsonsentence"
import Kadu from "../../components/kadu"
import Avunu from "../../components/avunu"

const HC2P9 = () => {
  return (
    <main>
			<div className="telugu">
        <JSONSentence sentid={35} content="historyone"/>
        <JSONSentence sentid={36} content="historyone"/>
        <JSONSentence sentid={37} content="historyone"/>
        <JSONSentence sentid={38} content="historyone"/>
        <JSONSentence sentid={39} content="historyone"/>
			</div>
      <Navbar prefix="history" back="HC2P8" front="HC2P10" />
    </main>
  )
}

export default HC2P9;
