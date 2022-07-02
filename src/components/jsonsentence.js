import React from "react";
import TGSentence from "../components/tgsentence"
import JSONData from "../../content/sentences.json"
// needed to grab the sentence data
import "../styles/style.css"

function JSONSentence(props) {
	let sent = JSONData.content[props.sentid-1];
  // give the sentence based on the id given in the json, IGNORING zero indexing for the purposes of making the tgsentence api intuitive.
	console.log(sent);
  return (
  <div>
		<TGSentence display={sent.sentence} meaning="& &" fullmeaning={sent.meaning}/>
  </div>
  );
}
export default JSONSentence;
