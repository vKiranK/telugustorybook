import * as React from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import ShowEnglish from "../components/showenglish"
import ArrowNavigator from "../components/arrownavigator"
import useEventListener from '@use-it/event-listener'

export default function Navbar(props) {
  let x = 0;
  let back = ("" + "/" + props.back)
  let front = ("" + "/" + props.front)
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    //document.onkeydown = function(e) { ArrowNavigator(e, back, front, killBack, killFront); }
  }
  const BACK_KEYS = ['37', 'ArrowLeft'];
  const FRONT_KEYS = ['39', 'ArrowRight'];

  function handler({ key }) {
    console.log(key);
    if (BACK_KEYS.includes(String(key))) {
      console.log('hello');
		  navigate(back);
    }
    else if (FRONT_KEYS.includes(String(key))) {
      console.log('hello');
		  navigate(front);
    }
  }

  useEventListener('keydown', handler);
  
  let PrevText = "Prev";
  let NextText = "Next";
  if (props.customprev) {
    PrevText += (" " + props.customprev);
  }
  if (props.customfront) {
    NextText += (" " + props.customfront);
  }
	return (
    <nav>
      <div>
        <button onClick={() => ShowEnglish()} className="showEngButton">English Translation</button>
        <br />
        <Link to={back} className="nav">{PrevText}</Link>
        <Link to={front} className="nav">{NextText}</Link>
				<Link to="/Settings/" className="nav">Settings</Link>
        <Link to="/" className="nav">Home</Link>
      </div>
    </nav>
	)
}
