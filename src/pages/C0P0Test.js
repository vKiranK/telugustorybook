import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"
import JSONSentence from "../components/jsonsentence"

const C0P0Test = () => {
  return (
    <main>
			<div className="telugu">
        This is a testing page. It should be impossible for users to find this webpage solely by navigating through the links provided on the site.
        <TGSentence display="idi oka kukka." meaning="lol a dog" fullmeaning="This is a dog." isAudio="1" url="c1p1"/>
				<TGSentence display="idi oka maṃci kukka." meaning="this a nice dog" fullmeaning="This is a nice dog."/>
        <JSONSentence sentid={2} />
			</div>
      <StaticImage
        src="../images/dog.webp"
        alt="A dog"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
      <Navbar default="C1P2" />
    </main>
  )
}

export default C0P0Test;
