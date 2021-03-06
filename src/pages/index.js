import React from "react"

import SEO from "../components/seo"
import Banner from "../components/Banner/Banner"
import Layout from "../components/Layout"
import BeerList from "../components/BeerList"
import normalizeBeers from "../helper/normalizeBeers"

const IndexPage = props => {
  const { data } = props
  const beers = normalizeBeers(data.allStrapiBeers)
  return (
    <Layout>
      <SEO title="Главная" />
      <Banner></Banner>
      <BeerList beers={beers}></BeerList>
    </Layout>
  )
}

export default IndexPage

export const Beers = graphql`
  {
    allStrapiBeers {
      edges {
        node {
          id
          name
          style
          ABV
          IBU
          OG
          description
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
    }
  }
`
