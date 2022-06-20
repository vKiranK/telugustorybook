import * as React from "react"

function ShowEnglish() {
	var glosses = document.getElementsByClassName("hiddenGloss");
	var fulltranses = document.getElementsByClassName("fullTrans");
	for (let g of glosses) {
		console.log(g.style);	
		if (g.style.display === "none") {
			g.style.display = "block";
		}
		else if (g.style.display === "block") {
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
