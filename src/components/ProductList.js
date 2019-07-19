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
  headline: {
    textAlign: 'center',
  },
})

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

const ProductList = ({ classes, products }) => {
  const evenItems = products.filter((_, index) => index % 2 === 0)
  const oddItems = products.filter((_, index) => index % 2 !== 0)

  return (
    <Grid
      container
      direction="column"
      spacing={4}
      justify="center"
      alignContent="center"
    >
      <Grid item className={classes.headline}>
        <h1>Alle Produkte</h1>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center" spacing={4}>
          <Grid item xs={12} sm={6}>
            <GridColumn even products={evenItems} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <GridColumn products={oddItems} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ProductList)
