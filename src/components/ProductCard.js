import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import MessageIcon from '@material-ui/icons/Message'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import MessageLink from './MessageLink'

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
  iconLeft: {
    marginRight: theme.spacing.unit,
  },
  buyButton: {
    marginLeft: 'auto',
  },
})

const ProductCard = props => {
  const { classes, product } = props
  const ProductMessageLink = MessageLink(Button)
  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={`/details/${product.slug}`}>
        <CardMedia
          className={classes.media}
          component={Img}
          fluid={product.images[0].fluid}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography component="p">{product.excerpt}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ProductMessageLink
          variant="outlined"
          product={product}
          size="small"
          color="primary"
          className={classes.buyButton}
        >
          <MessageIcon className={classes.iconLeft} />
          <Typography color="inherit">{product.price} €</Typography>
        </ProductMessageLink>
      </CardActions>
    </Card>
  )
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
  }).isRequired,
}

export default withStyles(styles)(ProductCard)
