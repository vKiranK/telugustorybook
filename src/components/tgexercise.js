import * as React from "react"
import Popup from 'reactjs-popup';
import transliterate from "./transliterate"

// markup
function TGExercise(props) {
	//var elemId = 'tgex';
	var elemId = ((Math.floor(Math.random() * 1000) + 1) * (Math.floor(Math.random() * 1000) + 1));
	console.log("elemid:", elemId);
  let engwords = props.meaning.split(' ').filter(w => w !== '');
  let meanings = props.display.split(' ').filter(w => w !== '');
	for (var k = 0; k < engwords.length; k++) { engwords[k] = engwords[k].replace(/_/g, ' '); }
	function checkAns(event) {
		//console.log(event.target.value === props.answer);
		if (event.target.value === props.answer) {
			// make the form readonly
			//var answerElem = document.getElementById("tgex");
			//answerElem.readOnly = true;
			//answerElem.style.color = "green"
			// "tgex" stands for telugu exercise
			console.log('correct answer given to exercise... text will now lock up');
		}
	};
	//<input type="text" onChange={checkAns} autoComplete="off" />
  return (
		<div>
		{engwords.map(function(engword, i){
				//return <ObjectRow obj={object} key={i} />;
				//return <p>{meanings[i]}</p>;
				return (
				<Popup trigger=
					{
					<ruby>
					<button className="showEng">{ meanings[i] }
					</button>
					<rp>(</rp><rt className="hiddenGloss" style={{display: "none"}}>
						{(engword.replace(/_/g, ' '))}
						</rt><rp>)</rp>
					</ruby>
					} 
					position="bottom center">{engwords[i]}</Popup>
				);
				//<Popup trigger={<button className="hiddenbutton">{engword[i]}</button>} position="right center">
				//</Popup>;
		})}
		{' '}
		<input type="text" id={elemId} onChange={
		function(event) {
			//console.log(event.target.value === props.answer);
			if (event.target.value === props.answer) {
				 //make the form readonly
				console.log("elemId", elemId);
				var answerElem = document.getElementById(elemId);
				answerElem.readOnly = true;
				answerElem.style.color = "green"
				// "tgex" stands for telugu exercise
				console.log('correct answer given to exercise... text will now lock up');
			}
		}
		} autoComplete="off" />
		{"."}
		
		</div>
	);
}

export default TGExercise;
