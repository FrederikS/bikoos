import React from 'react'
import { graphql } from 'gatsby'
import ProductList from '../components/ProductList'

const IndexPage = ({ data }) => {
  return (
    <ProductList
      products={data.allContentfulProduct.edges.map(e => ({
        ...e.node,
        excerpt: e.node.excerpt.excerpt,
      }))}
    />
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
          title
          slug
          excerpt {
            excerpt
          }
          price
          images: image {
            fluid(maxWidth: 345, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
