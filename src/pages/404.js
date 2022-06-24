import * as React from "react"
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Error 404</h1>
      <p>
      The page you are looking for either does not exist or has not been created yet.
      <br />
      <Link to="/">Home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage
