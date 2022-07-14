import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "../../styles/style.css"

const VemanaIntro = () => {
  return (
    <main>
      <title>Telugu Storybooks</title>
      <h1>Vēmana Padyālu</h1>
      <h2 style={{"font-size": "default"}}>Introduction</h2>
      <h3>Who is Vemana? Why should I read his poetry?</h3>
      Vemana was a Telugu poet born sometime in the 17th century, whose phraseology is "easy enough to be comprehended without difficulty by a foreigner" but complex enough to give learners a better understanding of Telugu idioms (<a href={"https://archive.org/details/in.ernet.dli.2015.367308/page/n5/mode/2up"}>source</a>). His wording is concise and an excellent resource for intermediate to advanced-level learners.
      <h3>Have you modified the original text?</h3> 
      No. This website contains the original verses. However, some word boundaries have been adjusted. Spaces have been added to split up long words (e.g. <em>kharamupālu</em> has been changed to <em>kharamu pālu</em>), making the text easier to translate.
      <h3>I'm ready to start reading. Where do I go?</h3> 
      See the links below.
      <h2>Book I (Religious)</h2>
      Click this <Link to="/vemana/VC1P1/">link</Link> to start reading.
      <h2>Book II (Moral)</h2>
      Click this <Link to="/vemana/VC2P1/">link</Link> to start reading.
      <h2>Book III (Satirical)</h2>
      Click this link to start reading. 
      <footer align="center" style={{"margin-top": "2em"}}>
        <nav>
          <div>
            <Link to="/" className="nav" style={{"margin": "0.15em"}}>Home</Link>
            <Link to={"/About/"} className="nav" style={{"margin": "0.15em"}}>About</Link>
            <Link to={"/Contact/"} className="nav" style={{"margin": "0.15em"}}>Contact</Link>
          </div>
        </nav>
      </footer>
      {/*
      <footer>విశ్వధాభిరామ వినురవేమ​!</footer>
      */}
    </main>
  )
}

export default VemanaIntro;
