import React from "react"

function DiacriticBar(props) {
	function insertLetter(l) {
		const isBrowser = typeof window !== "undefined"
		if (isBrowser) {
			var answerElem = document.activeElement;
			console.log(answerElem);
			answerElem.value += l;
		}
		// otherwise, the diacritic inserters will just do nothing
	}

	function handleEvent(event) {
		if (event.type === "mousedown") {
			event.preventDefault();
		}
	}


	return (
		<div>
			<button class="diacriticinserter" onMouseDown={handleEvent} onClick={() => insertLetter("ā")}>ā</button>
			<button class="diacriticinserter"onMouseDown={handleEvent} onClick={() => insertLetter("ī")}>ī</button>
			<button class="diacriticinserter" onMouseDown={handleEvent} onClick={() => insertLetter("ū")}>ū</button>
			<button class="diacriticinserter" onMouseDown={handleEvent} onClick={() => insertLetter("ē")}>ē</button>
			<button class="diacriticinserter" onMouseDown={handleEvent} onClick={() => insertLetter("ō")}>ō</button>
			<button class="diacriticinserter" onMouseDown={handleEvent} onClick={() => insertLetter("ṭ")}>ṭ</button>
			<button class="diacriticinserter" onMouseDown={handleEvent} onClick={() => insertLetter("ḍ")}>ḍ</button>
			<button class="diacriticinserter" onMouseDown={handleEvent} onClick={() => insertLetter("ṇ")}>ṇ</button>
			<button class="diacriticinserter" onMouseDown={handleEvent} onClick={() => insertLetter("ṃ")}>ṃ</button>
			<button class="diacriticinserter" onMouseDown={handleEvent} onClick={() => insertLetter("ḷ")}>ḷ</button>
			<button class="diacriticinserter" onMouseDown={handleEvent} onClick={() => insertLetter("ṣ")}>ṣ</button>
		</div>	
	);
}

export default DiacriticBar;
