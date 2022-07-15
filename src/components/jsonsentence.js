import React from "react";
import TGSentence from "../components/bettertgsentence"
import Sanscript from "../components/transliterate"
import JSONData from "../../content/sentences.json"
// needed to grab the sentence data
import "../styles/style.css"

function JSONSentence(props) {
  let sent = {"":""};
  let useTelugu = 0;
  if (props.content == "rao") {
    sent = JSONData.rao[props.sentid];
    console.log(JSONData.rao);
  }
  else if (props.content == "vemana_religious") {
    sent = JSONData.vemanaReligious[props.sentid];
  }
  else if (props.content == "vemana_moral") {
    sent = JSONData.vemanaMoral[props.sentid];
  }
  else if (props.content == "historyone") {
    sent = JSONData.historyOne[props.sentid];
    if (sent.hasOwnProperty('useTelugu')) {
      /*
      console.log("using telugu-script data...");
      Sanscript();
      sent.sentence = Sanscript.t(sent.sentence, "telugu", "kolkata");
      console.log(sent.sentence);
      */
      useTelugu = 1;
    }
  }
  else if (props.content == "generic") {
    sent = JSONData.generic[props.sentid];
  }

  if (props.audioUrl) {
    return (
    <div className="telugu poetry">
      <TGSentence display={sent.sentence} fullmeaning={sent.meaning} isAudio="1" url="c1p1" useTelugu={useTelugu}/>
    </div>
    );
  }
  else {
    return (
    <div className="telugu poetry">
      <TGSentence className="poetry"display={sent.sentence} fullmeaning={sent.meaning} useTelugu={useTelugu}/>
    </div>
    );
  }
}
export default JSONSentence;
