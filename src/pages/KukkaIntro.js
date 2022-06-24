import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/style.css"
import { Link } from "gatsby"

const KukkaIntro = () => {
  return (
    <main>
      <title>Telugu Storybooks</title>
      <h1>kukkala kathālu</h1>
      <h2 className="centered">Introduction</h2>
      <h3 style={{"fontSize": "default"}}>What is this story about?</h3>
      This story contains simple sentences about dogs and cats designed for beginners. (<em>kukkala kathālu</em> means "dog stories".) The stories on this site, though often simple, are not necessarily meant for just children. They are designed to be read by anyone, and contain idiomatic but simple Telugu phraseology along with occasional jokes.
      <h3>Who wrote this?</h3>
      The stories are original content exclusive to this site, though they are often inspired by other resources. See the <Link to="/Credits/">credits page</Link>.
      <h3>Where can I start reading?</h3>
      See the section "List of Chapters" below.
      <h2 className="centered">List of Chapters</h2>

      <table className="storyOrg"> 
        <tbody>
          <tr>
            <td>
              <Link to="/C1P1/">
          <StaticImage src="../images/dog.webp" alt="A dog" placeholder="blurred" layout="fixed" className="rounded hover" height={125} width={125} />
            </Link>
            </td>
            <td>
              <Link to="/C1P1/">
                <h2 className="bigger">Chapter One</h2>
              </Link>
              Introduces pronouns like <em>idi</em> and the formation of yes/no questions.
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/C2P1/">
          <StaticImage src="../images/dogeating.jpg" alt="A dog" placeholder="blurred" layout="fixed" className="rounded hover" height={125} width={125} />
            </Link>
            </td>
            <td>
              <Link to="/C2P1/">
                <h2 className="bigger">Chapter Two</h2>
              </Link>
              Gives the conjugation of a few verbs, descriptions of location, an introduction to the verb lē-, etc.
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

export default KukkaIntro;
