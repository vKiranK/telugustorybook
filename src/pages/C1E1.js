import * as React from "react"
import { Link } from "gatsby"
import TGSentence from "../components/tgsentence"
import TGExercise from "../components/tgexercise"
import DiacriticBar from "../components/diacriticbar"

const C1E1 = () => {
  return (
    <main>

			<div className="telugu">
        <TGExercise display="idi oka maṃci " meaning="this a nice" answer="kukka" />
        <TGExercise display="idi oka maṃci " meaning="this a nice" answer="kukka" />
        <TGExercise display="idi oka maṃci " meaning="this a nice" answer="kukka" />
			</div>
      <div>
        <DiacriticBar />
      </div>
		<Link to="/">Home</Link>
    </main>
  )
}

export default C1E1;
