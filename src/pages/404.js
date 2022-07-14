import * as React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

import "../styles/style.css"

// markup
const NotFoundPage = () => {
  function reverseNavigate() {
    if (typeof window !== 'undefined') {
      //navigate(-1);
      window.history.go(-1)
    }
  }
  return (
    <main>
      <title>Not found</title>
      <h1>Error 404</h1>
      <p>
      The page you are looking for either does not exist or has not been created yet.
      <br />
      <button onClick={() => reverseNavigate()} className="showEngButton">
        Go Back
      </button>
      <br />
      <Link to="/">Home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage
