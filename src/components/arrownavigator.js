import * as React from "react"
import { navigate } from "gatsby"

function ArrowNavigator(e, back, front, killBack, killFront) {
	let ge = e || window.event;
	console.log("event: ", e);
	console.log("kb and kf:", killBack, killFront)
	if (killBack) {
		navigate(back);
		return;
	}
	else if (e.keyCode == '37' && !killBack) { // left arrow and h (vim-like bindings)
		console.log("moving backward...");
		navigate(back);
	}
	else if (e.keyCode == '39' && !killFront) { // right arrow l
		console.log("moving forward...");
		navigate(front);
	}
}
export default ArrowNavigator;
