import React from "react"
import SEO from "../../components/seo"
import Banner from "../../components/Banner/Banner"
import Layout from "../../components/Layout"
import "./BeerPage.scss"
import normalizeImage from "../../helper/normalizeImage"

const BeerPage = props => {
  const { strapiBeers } = props.data
  const images = normalizeImage(strapiBeers.photo)
  strapiBeers.photo = images
  return (
    <Layout>
      <SEO title="Home" />
      <Banner></Banner>
      <div className="container">
        <div className="beer-page">
          <div className="columns">
            <div className="column col-6 col-sm-12">
              <h2 className="beer-page__title">{strapiBeers.name}</h2>
              <p>{strapiBeers.description}</p>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <b>Название</b>
                    </td>
                    <td>{strapiBeers.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Стиль</b>
                    </td>
                    <td>{strapiBeers.style}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Горечь (IBU)</b>
                    </td>
                    <td>{strapiBeers.IBU}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Плотность сусла</b>
                    </td>
                    <td>{strapiBeers.OG}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Алкоголь</b>
                    </td>
                    <td>{strapiBeers.ABV} °</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Цена</b>
                    </td>
                    <td>{strapiBeers.price} р.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column col-6 col-sm-12">
              <img
                src={strapiBeers.photo.fluid}
                className="img-responsive rounded p-centered"
                alt="Фото бутылки пива"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BeerPage

export const Beers = graphql`
  query Beer($id: String) {
    strapiBeers(id: { eq: $id }) {
      id
      name
      style
      ABV
      IBU
      OG
      description
      price
      photo {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
