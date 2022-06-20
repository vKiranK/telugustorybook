import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const VC1P1 = () => {
  return (
    <main>
      <div className="telugu poetry">
        <TGSentence display="gaṃgi-gōvu pālu gaṃṭeḍai##'##_nanu jālu;" meaning="Venerable-cow milk spoonful enough" fullmeaning="A single spoonful of milk from a good cow is enough." />
        <TGSentence display="kaḍave##'##_ḍai_na nē##'##_mi kharamu pālu;" meaning="large-pot what donkey milk" fullmeaning="Of what use is a pailful of donkey's milk?" />
        <TGSentence display="bhakti galugu kūḍu paṭṭeḍai_nanu jālu;" meaning="devotion imbibed-with food handful enough" fullmeaning="A single handful of food given with faith is enough." />
        <TGSentence display="viśvadābhirāma vinuravēma!" meaning="Viśvada-and-Abhi-Rama listen" fullmeaning="Abhi Rama and Viśvada, listen!" />
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

export default VC1P1;
