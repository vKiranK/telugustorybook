import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/style.css"
import { Link } from "gatsby"

const RaoIntro = () => {
  return (
    <main>
      <title>Telugu Storybooks</title>
      <h1>kollāyi gaṭṭitē nēmi</h1>
      <h2 className="centered">Introduction</h2>
      <h3 style={{"fontSize": "default"}}>What is this book about?</h3>
      The text revolves around a story about Indian independence and freedom fighters,
      It is an excellent resource for those looking to increase their vocabulary and improve their comprehension of literary Telugu.
      <h3>Where can I start reading?</h3>
      See the section "List of Chapters" below.
      <h3>Who wrote this?</h3>
      The book was written by Veṃkaṭaramaṇa Muḷḷapuḍi, an author of great renown. The cartoons were made by his colleague and long-time friend Bāpu. 
      The two would later go on to make many successful movies.
      <h2 className="centered">List of Chapters</h2>

      <table className="storyOrg"> 
        <tbody>
          <tr>
            <td>
              <Link to="/C1P1/">
          <StaticImage src="../images/budugu_icon.png" alt="A picture of Budugu's head" placeholder="blurred" layout="fixed" className="rounded hover" height={125} width={125} />
            </Link>
            </td>
            <td>
              <Link to="/C1P1/">
                <h2 className="bigger">ī bomma nēnu</h2>
              </Link>
              An introduction to the main character, buḍugu, and his constant fighting with private tutors.
            </td>
          </tr>
        </tbody>
      </table>

      <footer align="center" style={{"marginTop": "2em"}}>
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

export default RaoIntro;
