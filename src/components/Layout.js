import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from './AppBar'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { StaticQuery, graphql } from 'gatsby'

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

const defaultTags = globalSeo => {
  const { title, description } = globalSeo.fallbackSeo
  return [
    { tagName: 'title', content: title },
    { tagName: 'meta', attributes: { property: 'og:title', content: title } },
    { tagName: 'meta', attributes: { name: 'twitter:title', content: title } },
    {
      tagName: 'meta',
      attributes: { name: 'description', content: description },
    },
    {
      tagName: 'meta',
      attributes: { property: 'og:description', content: description },
    },
    {
      tagName: 'meta',
      attributes: { name: 'twitter:description', content: description },
    },
    {
      tagName: 'meta',
      attributes: { name: 'twitter:card', content: 'summary' },
    },
    {
      tagName: 'meta',
      attributes: { property: 'og:site_name', content: globalSeo.siteName },
    },
  ]
}

const Layout = ({ classes, children, data, seo }) => {
  const seoTags = seo ? seo : { tags: defaultTags(data.datoCmsSite.globalSeo) }
  return (
    <AppBar>
      <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} seo={seoTags} />
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
    datoCmsSite {
      globalSeo {
        siteName
        fallbackSeo {
          title
          description
        }
      }
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
  }
`
