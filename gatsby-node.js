/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allDatoCmsProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return new Promis.reject(result.errors)
    }
    result.data.allDatoCmsProduct.edges.map(({ node: product }) => {
      createPage({
        path: `details/${product.slug}`,
        component: path.resolve(`./src/templates/details.js`),
        context: {
          slug: product.slug,
        },
      })
    })
  })
}
