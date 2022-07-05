import React from "react";
import TGSentence from "../components/bettertgsentence"
import JSONData from "../../content/sentences.json"
// needed to grab the sentence data
import "../styles/style.css"

function JSONSentence(props) {
	let sent = JSONData.content[props.sentid];
  // give the sentence based on the id given in the json, IGNORING zero indexing for the purposes of making the tgsentence api intuitive.
	console.log(sent);

  if (props.audioUrl) {
    return (
    <div>
      <TGSentence display={sent.sentence} fullmeaning={sent.meaning} isAudio="1" url="c1p1" />
    </div>
    );
  }
  else {
    return (
    <div>
      <TGSentence display={sent.sentence} fullmeaning={sent.meaning}/>
    </div>
    );
  }
}
export default JSONSentence;
