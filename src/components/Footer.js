import * as React from "react"
import { Link } from "gatsby"
import ShowEnglish from "../components/showenglish"

export default function Footer() {
	return (
    <footer align="center" style={{"marginTop": "2em"}}>
      <nav>
        <div>
          <Link to="/" className="nav" style={{"margin": "0.15em"}}>Home</Link>
          <Link to={"/About/"} className="nav" style={{"margin": "0.15em"}}>About</Link>
          <Link to={"/Contact/"} className="nav" style={{"margin": "0.15em"}}>Contact</Link>
        </div>
      </nav>
    </footer>
	)
}
