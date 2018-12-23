import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

const IndexPage = ({data}) => {
  return (
    <Layout>
      <ProductList products={data.allDatoCmsProduct.edges.map(e => e.node)} />
    </Layout>
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
          description
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
