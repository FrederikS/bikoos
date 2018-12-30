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
import Grid from '@material-ui/core/Grid'
import Img from 'gatsby-image'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
}

const ProductCard = props => {
  const { classes, product } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component={Img}
          sizes={product.images[0].sizes}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography component="p">{product.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography variant="subheadline">{product.price} €</Typography>
          </Grid>
          <Grid>
            <Button
              href="#"
              size="small"
              color="primary"
              className="Product snipcart-add-item"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-image={product.images[0].sizes.src}
              data-item-name={product.title}
              data-item-url="/"
            >
              Buy
            </Button>
          </Grid>
        </Grid>
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
