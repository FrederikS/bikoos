import React from 'react'
import { graphql } from 'gatsby'
import { Typography, Fab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MessageIcon from '@material-ui/icons/Message'
import Img from 'gatsby-image'
import RichTextContent from '../components/RichTextContent'
import SEO from '../components/SEO'
import MessageLink from '../components/MessageLink'

const styles = theme => ({
  iconLeft: {
    marginRight: theme.spacing.unit,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 3,
  },
  hero: {
    marginTop: -theme.spacing.unit * 3,
    marginLeft: -theme.spacing.unit * 3,
    marginRight: -theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    maxHeight: 250,
  },
})

const DetailPage = ({ classes, data: { product } }) => {
  const ProductMessageLink = MessageLink(Fab)
  return (
    <article>
      <SEO metadata={product.seoMetadata} />
      <Img className={classes.hero} fluid={product.images[0].fluid} />
      <Typography variant="h3">{product.title}</Typography>
      <RichTextContent
        htmlContent={product.detailedDescription.childMarkdownRemark.html}
      />
      <ProductMessageLink
        component="a"
        variant="extended"
        product={product}
        color="primary"
        className={classes.fab}
      >
        <MessageIcon className={classes.iconLeft} />
        <Typography color="inherit">{product.price} €</Typography>
      </ProductMessageLink>
    </article>
  )
}

export default withStyles(styles)(DetailPage)

export const pageQuery = graphql`
  query($slug: String!) {
    product: contentfulProduct(slug: { eq: $slug }) {
      id
      title
      price
      images: image {
        fluid(maxWidth: 850, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      detailedDescription {
        childMarkdownRemark {
          html
        }
      }
      seoMetadata {
        title
        description
        image {
          resize(width: 600, height: 600) {
            src
          }
        }
      }
    }
  }
`
