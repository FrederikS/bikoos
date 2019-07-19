import React from 'react'
import { graphql } from 'gatsby'
import { Typography, Fab } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import MessageIcon from '@material-ui/icons/Message'
import Img from 'gatsby-image'
import RichTextContent from '../components/RichTextContent'
import SEO from '../components/SEO'
import MessageLink from '../components/MessageLink'

const styles = theme => ({
  iconLeft: {
    marginRight: theme.spacing(1),
  },
  fab: {
    position: 'fixed',
    left: '50%',
    bottom: theme.spacing(2),
    transform: 'translateX(-50%)',
  },
  hero: {
    marginLeft: -theme.spacing(3),
    marginRight: -theme.spacing(3),
    marginBottom: theme.spacing(3),
    maxHeight: 250,
  },
  article: {
    paddingBottom: theme.spacing(8),
  },
})

const DetailPage = ({ classes, data: { product } }) => {
  const ProductMessageLink = MessageLink(Fab)
  return (
    <article className={classes.article}>
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
