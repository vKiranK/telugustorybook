import * as React from "react"
import { navigate } from "gatsby"
import "../styles/style.css"
import { Link } from "gatsby"
import Footer from "../components/Footer"

const Settings = () => {
  /*
  function toggleTGScript() {
    let useTranslit = localStorage.getItem('useTranslit');
    console.log("Orig value: ", useTranslit);
    if (useTranslit === null) {
      localStorage.setItem('useTranslit', 'True');
      useTranslit = localStorage.getItem('useTranslit');
      console.log("Set value: ", useTranslit);
      return;
    }
    else if (useTranslit === "True") {
      localStorage.setItem('useTranslit', 'False');
      useTranslit = localStorage.getItem('useTranslit');
      console.log("Set value: ", useTranslit);
      return;
    }
    else if (useTranslit === "False") {
      localStorage.setItem('useTranslit', 'True');
      useTranslit = localStorage.getItem('useTranslit');
      console.log("Set value: ", useTranslit);
      return;
    }
  }*/
  // https://stackoverflow.com/questions/5024056/how-to-pass-parameters-on-onchange-of-html-select
  function setStorageScript(event) {
    var value = event.target.value;  
    localStorage.setItem('script', value);
    //console.log("Switching to " , event, "...");
    //console.log("Switching to " , value, "...");
  }

  function reverseNavigate() {
    if (typeof window !== 'undefined') {
      //navigate(-1);
      window.history.go(-1)
    }
  }

  return (
    <div>
      <main>
        <title>Settings</title>
        <h1>Settings</h1> 
        Use this menu to choose a custom script: { }
        <select className="normalText" onChange={setStorageScript}>
          <option>Choose an Option</option>
          <option value="telugu">Telugu</option>
          <option value="kolkata">English (IAST)</option>
          <option value="bengali">Bengali</option>
          <option value="devanagari">Devanagari</option>
          <option value="gurmukhi">Gurmukhi</option>
          <option value="gujarati">Gujarati</option>
          <option value="kannada">Kannada</option>
          <option value="malayalam">Malayalam</option>
          <option value="oriya">Oriya</option>
          <option value="tamil">Tamil</option>
        </select>
        <br />
        Warning: this feature is experimental, so selecting an option other than English or Telugu may result in ambiguity or other errors.
        <br />
        <br />
        <button onClick={() => reverseNavigate()} className="showEngButton">
          Go Back
        </button>
        <br />
        <Link to="/">Home</Link> 
      </main>
    </div>
  );
}

export default Settings;
