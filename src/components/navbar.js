import * as React from "react"
import { Link } from "gatsby"
import ShowEnglish from "../components/showenglish"
import ArrowNavigator from "../components/arrownavigator"

export default function Navbar(props) {
  let x = 0;
  let back = ("" + "/" + props.back)
  let front = ("" + "/" + props.front)
  const isBrowser = typeof window !== "undefined"

  // workaround to prevent navigation outside of inidiv pages
  let killFront = 0;
  let killBack = 0;

  console.log("initial:", killFront, killBack);
  console.log("KILLBACK: ", (props.killBack));
  if (props.killBack) {
    console.log('yee');
    killBack=1;
  }
  if (props.killFront ) {
    console.log('yee');
    killFront=1;
  }

  if (isBrowser) {
    if (x == 0) {
      x++;
      console.log(killFront, killBack);
      document.onkeydown = function(e) { ArrowNavigator(e, back, front, killBack, killFront); }
    }
  }
	return (
    <nav>
      <div>
        <button onClick={() => ShowEnglish()} className="showEngButton">English Translation</button>
        <br />
        <Link to={back} className="nav">Prev</Link>
        <Link to={front} className="nav">Next</Link>
				<Link to="/Settings/" className="nav">Settings</Link>
        <Link to="/" className="nav">Home</Link>
      </div>
    </nav>
	)
}
