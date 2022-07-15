import { Link } from "gatsby"
import Popup from 'reactjs-popup';
import Sanscript from "./transliterate"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState, useEffect, useMemo} from "react";
import "../styles/rubyfixes.css"
import JSONLexicon from "../../content/definitions.json"

function TGSentence(props) {
	// browser isLoaded check
	// do not remove this or the entire app will crash during build time
	// component does not work with SSR (probably)
	const isBrowser = typeof window !== "undefined";
	let localScript = "telugu";
	if (isBrowser){
		localScript = localStorage.getItem('script');
		//console.log(localScript);
		if (!localScript) {
			localScript = "telugu"
		}
	}
	let sourceScript = 'kolkata'
	if (props.useTelugu) {
		sourceScript = 'telugu'
	}

	let bigDict = JSONLexicon;
	console.log(bigDict);
  let telugu = props.display.split(' ').filter(w => w !== '');

	// Audio stuff
	// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
	let tag = "c1p1"
	let isDef = 1;
	if (props.url == null) {
		tag = "c1p1"
		isDef = 0;
	}
	else {
		tag = props.url
	}
	const [audio] = useState(isDef && typeof Audio !== "undefined" && new Audio("https://vkirank.com/newstorybook/sounds/" + tag + ".mp3"));
  function playAudioWrapper() {
		if (!isDef) return;
    audio.play();
  }

	Sanscript(); // call the library once to prev. out of scope errors
  return (
			<div>
				{(props.isAudio === "1") &&
				<button onClick={playAudioWrapper}>
          <StaticImage className="audio"
          src="../images/speaker.png"
          alt="Press to hear audio"
          placeholder="blurred"
          layout="fixed"
          width={23}
          />
        </button> 
				}
				{telugu.map(function(word, i){
						let translation = Sanscript.t(word, sourceScript, 'kolkata');
						console.log("Pt1 ENGWORD, TRANSL:", word, bigDict[Sanscript.t(word, sourceScript, 'kolkata')]);
						if (bigDict[word.replaceAll(".", "")]) {
							translation = bigDict[Sanscript.t(word.replaceAll(".", ""), sourceScript, 'kolkata')];
						}
						return (
						<Popup key={"tgword_"+i} trigger=
							{
							<ruby style={{"rubyPosition": "under"}}>
							<button className="showEng">{ (Sanscript.t(word, sourceScript, localScript)).replace(/_/g, ' ').replaceAll("@", "")}
							</button>
							<rp>(</rp><rt className="hiddenGloss" style={{"display": "none"}}>
								{(translation.replace(/_/g, ' '))}
								</rt><rp>)</rp>
							</ruby>
							} 
							position="bottom center" class="telugupopup">{(translation.replace(/_/g, ' '))}</Popup>
						);
						//<Popup trigger={<button className="hiddenbutton">{engword[i]}</button>} position="right center">
						//</Popup>;
				})}
				<div className="fullTrans" style={{display: "none"}}> 
					{props.fullmeaning}
				</div>
			</div>
	);
}

export default TGSentence;
