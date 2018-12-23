import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={24}>
      {products.map(product => (
        <Grid item xs={6} key={product.title}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductList
