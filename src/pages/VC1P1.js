import React, { createRef, useState, useEffect } from "react";
import Navbar from "../components/navbar2"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TGSentence from "../components/tgsentence"
import ShowEnglish from "../components/showenglish"

const VC1P1 = () => {
  return (
    <main id="monkey">
      <div className="telugu poetry">
        <TGSentence display="gaṃgi-gōvu pālu gaṃṭeḍai##'##_nanu jālu;" meaning="Venerable-cow milk spoonful enough" fullmeaning="A single spoonful of milk from a good cow is enough." specificmeaning="; ; spoonful_(accusative_case) ;"/>
        <TGSentence display="kaḍave##'##_ḍai_na nē##'##_mi kharamu pālu;" meaning="large-pot what donkey milk" fullmeaning="Of what use is a pailful of donkey's milk?" />
        <TGSentence display="bhakti galugu kūḍu paṭṭeḍai_nanu jālu;" meaning="devotion imbibed-with food handful enough" fullmeaning="A single handful of food given with faith is enough." specificmeaning="; ; ; handful_(accusative_case) ;" />
        <TGSentence display="viśvadābhirāma vinuravēma!" meaning="Viśvada-and-Abhi-Rama listen" fullmeaning="Abhi Rama and Viśvada, listen!" />
			</div>
      <Navbar back="" front="C1P2" home="VemanaIntro"/>
    </main>
  )
}

export default VC1P1;
