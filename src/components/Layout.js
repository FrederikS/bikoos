import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import AppBar from './AppBar'
import SEO from './SEO'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#293133',
      },
    },
  })
)

const styles = () => ({
  root: {
    flexGrow: 1,
    padding: '0px 20px',
    maxWidth: '800px',
    margin: 'auto',
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

const Layout = ({ classes, children, data }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <SEO metadata={data.contentfulPage.seoMetadata} />
        <main className={classes.root}>{children}</main>
      </AppBar>
    </ThemeProvider>
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
