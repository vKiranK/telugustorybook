import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/style.css"
import { Link } from "gatsby"

const VemanaIntro = () => {
  return (
    <main>
      <title>Telugu Storybooks</title>
      <h1>Vēmana Padyālu</h1>
      <h2 style={{"font-size": "default"}}>1. Introduction</h2>
      <h3>Who is Vemana? Why should I read his poetry?</h3>
      Vemana was a Telugu poet born sometime in the 17th century, whose phraseology is "easy enough to be comprehended without difficulty by a foreigner" but complex enough to give learners a better understanding of Telugu idioms (<a href={"https://archive.org/details/in.ernet.dli.2015.367308/page/n5/mode/2up"}>source</a>). His wording is concise and an excellent resource for intermediate to advanced-level learners.
      <h3>I'm ready to start reading. Where do I go?</h3> 
      Click on any of the poems under the sections "Book One", "Book Two", or "Book Three."
      The organization of the books on this website differs from the source material, C. P. Brown's <em>The Verses of Vemana</em>. The structure has been modified to be more intuitive to beginners, with each book providing sentences with vocabulary and syntax of increasing difficulty.
      <h2>2. Book One (Religious)</h2>
      Click this <Link to="/VC1P1/">link</Link> to start reading. Warning: the number of verses is quite long.
      <h2>3. Book Two (Moral)</h2>
      Click this link to start reading. 
      <h2>4. Book Three (Satirical)</h2>
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
