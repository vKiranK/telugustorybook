import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/style.css"
import { Link } from "gatsby"

const HistoryIntro = () => {
  return (
    <main>
      <title>Telugu Storybooks</title>
      <h1>bhāratadēśa caritra</h1>
      <h2 className="centered">Introduction</h2>
      <h3 style={{"fontSize": "default"}}>What is this story about?</h3>
      It discusses major Indian historical figures, covering basic grammatical features and important cultural context. Poets like Nannayya and Vēmana are introduced and discussed.
      <h3>Who wrote this?</h3>
      The stories are original content exclusive to this site, though they are often inspired by other resources. See the <Link to="/Credits/">credits page</Link>.
      <h3>Where can I start reading?</h3>
      See the section "List of Chapters" below.
      <h2 className="centered">List of Chapters</h2>

      <table className="storyOrg"> 
        <tbody>
          <tr>
            <td>
              <Link to="/history/HC1P1/">
          <StaticImage src="../../images/gandhi_icon.jpg" alt="Gandhi" placeholder="blurred" layout="fixed" className="rounded hover" height={125} width={125} />
            </Link>
            </td>
            <td>
              <Link to="/history/HC1P1/">
                <h2 className="bigger">Chapter One</h2>
              </Link>
              Introduces interrogatives like <em>evaru</em> through a discussion of well-known historical figures like Gandhi.
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/history/HC2P1/">
          <StaticImage src="../../images/dogeating.jpg" alt="A dog" placeholder="blurred" layout="fixed" className="rounded hover" height={125} width={125} />
            </Link>
            </td>
            <td>
              <Link to="/history/HC2P1/">
                <h2 className="bigger">Chapter Two</h2>
              </Link>
              Gives an overview of some of the most important Telugu poets while introducing relative participles (e.g. vrāsina).
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
    </main>
  )
}

export default HistoryIntro;
