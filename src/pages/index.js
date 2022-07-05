import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/style.css"
import { Link } from "gatsby"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <main>
      <title>Telugu Storybooks</title>
			<h1>Telugu Storybooks</h1>
      <table className="storyOrg"> 
        <tbody>
          <tr>
            <td>
              <Link to="/KukkaIntro/">
          <StaticImage src="../images/dog.webp" alt="A dog" placeholder="blurred" layout="fixed" className="rounded hover" height={150} width={150} />
            </Link>
            </td>
            <td>
              <Link to="/KukkaIntro/">
                <h2 className="bigger">kukkala kathālu</h2>
              </Link>
              Simple stories about various animals, mostly dogs and cats. Includes occasional jokes. Ideal for beginners.
            </td>
          </tr>
          <tr>
            <td>
            <Link to="/404/">
            <StaticImage src="../images/gandhi_icon.jpg" alt="Gandhi" placeholder="blurred" layout="fixed" className="rounded hover" height={150} width={150} />
            </Link>
            </td> 
            <td>
              <Link to="/404/">
                <h2 className="bigger">bhāratadēśa caritra</h2>
              </Link>
              Stories about Indian history, historical figures, etc.
            </td>
          </tr>
          <tr>
            <td>
            <Link to="/BuduguIntro/">
            <StaticImage src="../images/budugu_icon.png" alt="Gandhi" placeholder="blurred" layout="fixed" className="rounded hover" height={150} width={150} />
            </Link>
            </td> 
            <td>
              <Link to="/BuduguIntro/">
                <h2 className="bigger">buḍugu</h2>
              </Link>
              A digitized version of the book <em>buḍugu</em> by Veṃkaṭaramaṇa Muḷḷapuḍi. Humorous, well-written stories suitable for beginner to intermediate-level learners. Includes cartoons by the artist Bāpu.
            </td>
          </tr>
          <tr>
            <td>
            <Link to="/VemanaIntro/">
        <StaticImage src="../images/vemana_icon.png" alt="The poet Vemana" placeholder="blurred" layout="fixed" className="rounded hover" height={150} width={150} />
            </Link>
            </td> 
            <td>
              <Link to="/VemanaIntro/">
                <h2 className="bigger">vēmana padyālu</h2>
              </Link>
              Telugu poetry written by the <em>kavi</em> Vemana. The poems are intermediate to advanced-level.
            </td>
          </tr>
          <tr>
            <td>
            <Link to="/Grammar/">
        <StaticImage src="../images/icon.png" alt="The Telugu letter 'te'" placeholder="blurred" layout="fixed" className="rounded hover" height={150} width={150} />
            </Link>
            </td> 
            <td>
              <Link to="/GrammarIntro/">
                <h2 className="bigger">vyākaraṇamu</h2>
              </Link>
              Observations on Telugu grammar (<em>vyākaraṇamu</em>), partially written in English. Useful for intermediate learners. 
            </td>
          </tr>
        </tbody>
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
      
      <Footer />
    </main>
  )
}

export default IndexPage;
