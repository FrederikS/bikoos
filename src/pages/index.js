import React from 'react'
import { graphql } from 'gatsby'
import ProductList from '../components/ProductList'

const IndexPage = ({ data }) => {
  return (
    <ProductList products={data.allDatoCmsProduct.edges.map(e => e.node)} />
  )
}

export default IndexPage

export const query = graphql`
  query {
    allDatoCmsProduct {
      edges {
        node {
          id
          title
          excerpt
          slug
          price
          images {
            sizes(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
