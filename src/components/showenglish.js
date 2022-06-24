import * as React from "react"
//import { isFirefox } from 'react-device-detect';

function ShowEnglish() {
	var glosses = document.getElementsByClassName("hiddenGloss");
	var fulltranses = document.getElementsByClassName("fullTrans");
	let x = "block"
	var isFirefox = typeof InstallTrigger !== 'undefined';
	if (isFirefox) {
		// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
		console.log("firefox");
		x = "ruby-text"
	}
	for (let g of glosses) {
		if (g.style.display === "none") {
			g.style.display = x;
		}
		else if (g.style.display === x) {
			g.style.display = "none";
		}
	}

	for (let g of fulltranses) {
		console.log(g.style);	
		if (g.style.display === "none") {
			g.style.display = "block";
		}
		else if (g.style.display === "block") {
			g.style.display = "none";
		}
	}
}
export default ShowEnglish;
