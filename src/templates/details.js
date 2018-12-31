import React from 'react'
import { graphql } from 'gatsby'
import { Typography, Fab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import AddToCartIcon from '@material-ui/icons/AddShoppingCart'
import classNames from 'classnames'
import RichTextConent from '../components/RichTextContent'

const styles = theme => ({
  iconLeft: {
    marginRight: theme.spacing.unit,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
})

const DetailPage = ({ classes, data: { product } }) => {
  return (
    <article>
      <HelmetDatoCms seo={product.seoMetaTags} />
      <Typography variant="h1">{product.title}</Typography>
      <RichTextConent
        htmlContent={product.detailsNode.childMarkdownRemark.html}
      />
      <Fab
        component="a"
        variant="extended"
        href="#"
        color="primary"
        className={classNames(classes.fab, 'Product', 'snipcart-add-item')}
        data-item-id={product.id}
        data-item-price={product.price}
        data-item-image={product.images[0].sizes.src}
        data-item-name={product.title}
        data-item-url="/"
      >
        <AddToCartIcon className={classes.iconLeft} />
        <Typography color="inherit">{product.price} €</Typography>
      </Fab>
    </article>
  )
}

export default withStyles(styles)(DetailPage)

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
