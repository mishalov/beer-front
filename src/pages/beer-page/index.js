import React from "react"
import { Link } from "gatsby"

import SEO from "../../components/seo"
import Banner from "../../components/Banner/Banner"
import Layout from "../../components/Layout"
import BeerList from "../../components/BeerList"
import normalizeBeers from "../../helper/normalizeBeers"
import "./BeerPage.scss"

const mockup = {
  id: 1,
  name: "Атомная прачечная",
  style: "ИНДИЙСКИЙ ПЭЙЛ ЭЛЬ",
  IBU: 101,
  description:
    "В аромате богатство красок американского хмеля с оттенками тропических фруктов, цитрусов и хвои. Во вкусе эта тема раскрывается слоями сложной богатой сухой горечи, где все тона собраны в сбалансированный букет, играющий своими гранями, но не выпячивая ни одну из них. Это буйство  переходит из тонких материй в горечь и обратно от глотка к глотку.",
  ABV: 7,
  OG: 16,
  price: 200,
  created_at: "2019-10-15T10:04:53.005Z",
  updated_at: "2019-10-15T10:04:53.005Z",
  photo: {
    fixed:
      "/static/04d93b67bc881f23c5f0d572eda21e6a/eacd7/156f4af860f777ce08f9bd3e8b86bc6c.png",
    fluid:
      "/static/04d93b67bc881f23c5f0d572eda21e6a/4d505/156f4af860f777ce08f9bd3e8b86bc6c.png",
  },
}

const BeerPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner></Banner>
      <div className="container">
        <div className="beer-page">
          <div className="columns">
            <div className="column col-6">
              <img
                src={mockup.photo.fluid}
                className="img-responsive rounded p-centered"
              />
            </div>
            <div className="column col-6">
              <h2 className="beer-page__title">{mockup.name}</h2>
              <p>{mockup.description}</p>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Название</td>
                    <td>{mockup.name}</td>
                  </tr>
                  <tr>
                    <td>Стиль</td>
                    <td>{mockup.style}</td>
                  </tr>
                  <tr>
                    <td>Горечь (IBU)</td>
                    <td>{mockup.IBU}</td>
                  </tr>
                  <tr>
                    <td>Плотность сусла</td>
                    <td>{mockup.OG}</td>
                  </tr>
                  <tr>
                    <td>Алкоголь</td>
                    <td>{mockup.ABV}</td>
                  </tr>
                  <tr>
                    <td>Цена</td>
                    <td>{mockup.price} р.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BeerPage

// export const Beers = graphql`
//   {
//     allStrapiBeers {
//       edges {
//         node {
//           id
//           name
//           style
//           ABV
//           IBU
//           OG
//           description
//           photo {
//             childImageSharp {
//               fixed(width: 200, height: 125) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
