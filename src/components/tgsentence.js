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

	var bigDict = {
		// stores database of a bunch of telugu words
		"idi": "this",
		"adi": "that",
		"kukka": "dog",
		"pilli": "cat",
		"piṭṭa": "bird",
		"nā": "(question_marker)",
		"kādu": "is-not",
		"maṃci": "nice",
		"oka": "a",
		"reṃḍu": "two",
		"muḍu": "three",
		"nālugu": "four",
		"aidu": "five",
		"āru": "six",
		"ēḍu": "seven",
		"enimidi": "eight",
		"tommidi": "nine",
		"padi": "ten",
		"ēmi": "what",
		"cēsutuṃdi": "is-doing",
		"cēsutuṃdā": "is-doing+(question_marker)"
	};

	if (props.url == null) {
		tag = "c1p1"
		isDef = 0;
	}
	else {
		tag = props.url
	}

	const [audio] = useState(typeof Audio !== "undefined" && new Audio("https://vkirank.com/newstorybook/sounds/" + tag + ".mp3"));
  function playAudioWrapper() {
		if (!isDef) return;
    audio.play();
  }
	// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js

	// call the library once to prev. out of scope errors
	Sanscript();
  let engwords = props.meaning.split(' ').filter(w => w !== '');
  let meanings = props.display.split(' ').filter(w => w !== '');

	for (var k = 0; k < engwords.length; k++) { engwords[k] = engwords[k].replace(/_/g, ' '); }
	// allows you to use underscores as spaces
	
	const isBrowser = typeof window !== "undefined";
	let localScript = "telugu";
	if (isBrowser){
		localScript = localStorage.getItem('script');
		console.log(localScript);
		if (!localScript) {
			localScript = "telugu"
		}
	}


	meanings.forEach(function(meaning, i) {
		//console.log(meaning, i);
	});

	let specificEngwords = [];
	for (var k = 0; k < engwords.length; k++) { specificEngwords[k] = engwords[k]; }
	if (props.specificmeaning !== undefined) {
		specificEngwords = props.specificmeaning.split(' ').filter(w => w !== '');
	}

	for (var k = 0; k < engwords.length; k++) { 
		engwords[k] = engwords[k].replace(/_/g, ' '); 
		console.log("engwords", engwords[k]);
		if (engwords[k] == "lol" || engwords[k] == "&") {

			console.log(bigDict);
			console.log(meanings[k]);
			engwords[k] = bigDict[meanings[k]];
		}
		if( (!(props.specificmeaning === undefined))  && specificEngwords[k] == ';') {
			specificEngwords[k] = engwords[k];
			specificEngwords[k] = specificEngwords[k].replace(/_/g, ' '); 
		}
		else if (props.specificmeaning === undefined) {
			specificEngwords[k] = engwords[k];
		}
		specificEngwords[k] = specificEngwords[k].replace(/_/g, ' '); 
		console.log("speceng:", specificEngwords[k]);
	}


	for (var k = 0; k < meanings.length; k++) { meanings[k] = Sanscript.t(meanings[k], 'kolkata', localScript); }

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
						console.log("ENGWORD , I:", engword, i);
						//return <ObjectRow obj={object} key={i} />;
						//return <p>{meanings[i]}</p>;
						return (
						<Popup key={i} trigger=
							{
							<ruby style={{"rubyPosition": "under"}}>
							<button className="showEng">{ meanings[i].replace(/_/g, ' ')}
							</button>
							<rp>(</rp><rt className="hiddenGloss" style={{"display": "none"}}>
								{(engword.replace(/_/g, ' '))}
								</rt><rp>)</rp>
							</ruby>
							} 
							position="bottom center" class="telugupopup">{specificEngwords[i]}</Popup>
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
