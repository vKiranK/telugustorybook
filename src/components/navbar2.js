import * as React from "react"
import { Link } from "gatsby"
import ShowEnglish from "../components/showenglish"
import ArrowNavigator from "../components/arrownavigator"

export default function Navbar(props) {
  let back = ("" + "/" + props.back)
  let front = ("" + "/" + props.front)
  let home = ("" + "/" + props.home)
  const isBrowser = typeof window !== "undefined"
  if (isBrowser) {
    // currently disabled functionality due to bugs
    document.onkeydown = function(e) { ArrowNavigator(e, back, front); }
  }
	return (
    <nav>
      <div>
        <button onClick={ShowEnglish} className="showEngButton">English Translation</button>
        <br />
        <Link to={back} className="nav">Prev</Link>
        <Link to={front} className="nav">Next</Link>
        <Link to={home} className="nav">Home</Link>
      </div>
    </nav>
	)
}
