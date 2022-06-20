import { Link } from "gatsby"
import Popup from 'reactjs-popup';
import Sanscript from "./transliterate"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState, useEffect, useMemo} from "react";
import "../styles/rubyfixes.css"

// markup
function TGSentence(props) {
	let tag = "c1p1"
	let isDef = 1;
	if (typeof props.url === undefined) {
		tag = "c1p1"
		isDef = 0;
	}
	else {
		tag = props.url
	}
	const [audio] = useState(typeof Audio !== "undefined" && new Audio("https://vkirank.com/newstorybook/sounds/" + props.url + ".mp3"));
  function playAudioWrapper() {
		if (!isDef) return;
    audio.play();
  }
	// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
	Sanscript();
  let engwords = props.meaning.split(' ').filter(w => w !== '');
	let specificEngwords = 1;
	for (var k = 0; k < engwords.length; k++) { 
		specific_engwords[k] = engwords[k];
	}
	if (props.specificmeaning === undefined) {
		let specific_engwords = props.specificmeaning.split(' ').filter(w => w !== '');
	}
  let meanings = props.display.split(' ').filter(w => w !== '');
	//console.log("SS schemes2:", Sanscript.t);
	//console.log(Sanscript.t("idi", 'kolkata', 'telugu'));
	//console.log("SS schemes1:", Sanscript.schemes);
	//console.log("SS schemes:", Sanscript());
	//console.log(transliterate.hi());
	//console.log(transliterate.t("idi", 'kolkata', 'telugu'));
	for (var k = 0; k < engwords.length; k++) { engwords[k] = engwords[k].replace(/_/g, ' '); }
	// allows you to use underscores as spaces
	
	let showTranslit = 0;
	let useTranslitStorage = "False";	
	const isBrowser = typeof window !== "undefined"

	if (isBrowser){
		useTranslitStorage = localStorage.getItem('useTranslit');
	}

	if (useTranslitStorage == "True") {
		showTranslit = 1;
	}
	else if (useTranslitStorage = "False") {
		showTranslit = 0;
	}
	if (showTranslit == 0) {
		for (var k = 0; k < meanings.length; k++) { meanings[k] = Sanscript.t(meanings[k], 'kolkata', 'telugu'); }
		//for (var k = 0; k < meanings.length; k++) { console.log("TRANS", meanings[k], Sanscript.t(meanings[k], 'kolkata', 'telugu')); }
	}
	//engwords.forEach((x, i) => console.log("aa", x));

	meanings.forEach(function(meaning, i) {
		//console.log(meaning, i);
	});

	for (var k = 0; k < engwords.length; k++) { 
		engwords[k] = engwords[k].replace(/_/g, ' '); 
		if( (!(props.specificmeaning === undefined))  && specific_engwords[k] == ';') {
			specific_engwords[k] = engwords[k];
		}
	}

  return (
			<div>
				{(props.isAudio === "1") &&
				<button onClick={playAudioWrapper}>
          <StaticImage
          className="audio"
          src="../images/speaker.png"
          alt="Press to hear audio"
          placeholder="blurred"
          layout="fixed"
          width={23}
          />
        </button> 
				}
				{engwords.map(function(engword, i){
						//return <ObjectRow obj={object} key={i} />;
						//return <p>{meanings[i]}</p>;
						return (
						<Popup trigger=
							{
							<ruby style={{"ruby-position": "under"}}>
							<button className="showEng">{ meanings[i].replace(/_/g, ' ')}
							</button>
							<rp>(</rp><rt className="hiddenGloss" style={{"display": "none"}}>
								{(engword.replace(/_/g, ' '))}
								</rt><rp>)</rp>
							</ruby>
							} 
							position="bottom center">{specific_engwords[i]}</Popup>
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