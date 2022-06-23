import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const IC1P1 = () => {
  return (
    <main>
			<div className="telugu">
        <TGSentence display="īyana gandhi." meaning="he gandhi" fullmeaning="He is Gandhi." isAudio="1" url="c1p1"/>
			</div>
      <StaticImage
        src="../images/dog.webp"
        alt="A dog"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar back="" front="C1P2"/>
    </main>
  )
}

export default IC1P1;
