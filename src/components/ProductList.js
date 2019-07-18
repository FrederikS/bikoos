import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import ProductCard from './ProductCard'

const styles = theme => ({
  col: {
    [theme.breakpoints.only('xs')]: {
      alignContent: 'center',
    },
  },
})

const ProductList = ({ products }) => {
  const evenItems = products.filter((_, index) => index % 2 === 0)
  const oddItems = products.filter((_, index) => index % 2 !== 0)

  const GridColumn = withStyles(styles)(({ classes, products, even }) => (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="stretch"
      alignContent={even ? 'flex-end' : 'flex-start'}
      spacing={4}
      className={classes.col}
    >
      {products.map(product => (
        <Grid item key={product.title}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  ))

  return (
    <Grid container direction="row" justify="center" spacing={4}>
      <Grid item xs={12} sm={6}>
        <GridColumn even products={evenItems} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <GridColumn products={oddItems} />
      </Grid>
    </Grid>
  )
}

export default ProductList
