import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import ProductCard from './ProductCard'

const styles = theme => ({
  list: {
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }
})

const ProductList = ({ classes, products }) => {
  return (
    <Grid className={classes.list} container spacing={16}>
      {products.map(product => (
        <Grid item xs={12} sm={6} key={product.title}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default withStyles(styles)(ProductList)
