import * as React from "react"
import { navigate } from "gatsby"

function ArrowNavigator(e, back, front) {
	let ge = e || window.event;
	if (e.keyCode == '37') { // left arrow and h (vim-like bindings)
		console.log("moving backward...");
		navigate(back);
	}
	else if (e.keyCode == '39') { // right arrow l
		console.log("moving forward...");
		navigate(front);
	}
}
export default ArrowNavigator;
