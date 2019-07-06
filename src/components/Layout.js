import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import AppBar from './AppBar'
import SEO from './SEO'

const styles = () => ({
  root: {
    flexGrow: 1,
    padding: '80px 20px',
    maxWidth: '800px',
  },
})

const LayoutWithBasicSeo = props => (
  <StaticQuery
    query={globalSeoQuery}
    render={data => (
      <Layout {...props} data={data}>
        {props.children}
      </Layout>
    )}
  />
)

const Layout = ({ classes, children, data, seo }) => {
  return (
    <AppBar>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <SEO metadata={data.contentfulPage.seoMetadata} />
      <main className={classes.root}>{children}</main>
    </AppBar>
  )
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LayoutWithBasicSeo)

const globalSeoQuery = graphql`
  query {
    contentfulPage(type: { eq: "Home" }) {
      seoMetadata {
        title
        description
      }
    }
  }
`
