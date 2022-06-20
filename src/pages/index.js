import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/style.css"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <main>
      <title>Telugu Storybooks</title>
			<h1>Hello world</h1>
      <table className="storyOrg"> 
        <tr>
          <td>
      <StaticImage src="../images/dog.webp" alt="A dog" placeholder="blurred" layout="fixed" className="rounded" height={150} width={150} />
          </td>
          <td>
            <h2>kukkalu</h2>
            Humorous, simple stories about dogs and cats. Ideal for beginners.
          </td>
        </tr>
        <tr>
          <td>
      <StaticImage src="../images/gandhi_icon.jpg" alt="Gandhi" placeholder="blurred" layout="fixed" className="rounded" height={150} width={150} />
          </td> 
          <td>
            <h2>bhāratadēśa caritra</h2>
            Stories about Indian history, historical figures, etc.
          </td>
        </tr>
        <tr>
          <td>
      <StaticImage src="../images/vemana_icon.png" alt="The poet Vemana" placeholder="blurred" layout="fixed" className="rounded" height={150} width={150} />
          </td> 
          <td>
            <h2>vēmana padyālu</h2>
            Telugu poetry written by the <em>kavi</em> Vemana. The poems are intermediate to advanced level.
          </td>
        </tr>
      </table>
			<p>
				<Link to="/C1P1/">Chapter 1</Link>
			</p>
			<p>
				<Link to="/C1E1/">Exercise 1</Link>
			</p>
			<p>
				<Link to="/Settings/">Settings</Link>
			</p>
    </main>
  )
}

export default IndexPage
