import JSONData from "../../content/sentences.json"
import React from "react";
import "../styles/style.css"
import TGSentence from "../components/tgsentence"
import JSONSentence from "../components/jsonsentence"

function JSONbuildtime(props) {
  return (
  <div>
    {JSONData.content.map((data, index) => {
      return (<li key={`content_item_${index}`}>

        {data.id}
				<TGSentence display={data.sentence} meaning="& &" fullmeaning={data.meaning}/>
        </li>);
      })}
  
    JSON sentence:
    <JSONSentence sentid={2} />
  </div>
  );

}
export default JSONbuildtime;
