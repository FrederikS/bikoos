import React from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import RichTextConent from '../components/RichTextContent'

const DetailPage = ({ data: { product } }) => {
  return (
    <article>
      <HelmetDatoCms seo={product.seoMetaTags} />
      <Typography variant="h1">{product.title}</Typography>
      <RichTextConent
        htmlContent={product.detailsNode.childMarkdownRemark.html}
      />
    </article>
  )
}

export default DetailPage

export const pageQuery = graphql`
  query($slug: String!) {
    product: datoCmsProduct(slug: { eq: $slug }) {
      id
      title
      price
      images {
        sizes(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      detailsNode {
        childMarkdownRemark {
          html
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
