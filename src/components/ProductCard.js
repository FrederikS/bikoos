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
import AddToCartIcon from '@material-ui/icons/AddShoppingCart'
import Img from 'gatsby-image'
import classNames from 'classnames'
import { Link } from 'gatsby'

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
  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={`/details/${product.slug}`}>
        <CardMedia
          className={classes.media}
          component={Img}
          sizes={product.images[0].sizes}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography component="p">{product.excerpt}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          href="#"
          size="small"
          color="primary"
          className={classNames(
            classes.buyButton,
            'Product',
            'snipcart-add-item'
          )}
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-image={product.images[0].sizes.src}
          data-item-name={product.title}
          data-item-url="/"
        >
          <AddToCartIcon className={classes.iconLeft} />
          <Typography color="inherit">{product.price} €</Typography>
        </Button>
      </CardActions>
    </Card>
  )
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
  }).isRequired,
}

export default withStyles(styles)(ProductCard)
