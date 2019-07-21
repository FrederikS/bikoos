import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'

const SEO = ({ metadata, pathname }) => {
  const url = `${process.env.GATSBY_BASE_URL}${pathname}`
  const { title, description } = metadata || {}
  const image =
    metadata && metadata.image && `https:${metadata.image.resize.src}`
  return (
    metadata && (
      <Helmet title={title}>
        <html lang="de" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        {url && <meta property="og:url" content={url} />}
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {image && <meta property="og:image" content={image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {title && <meta name="twitter:title" content={title} />}
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        {image && <meta name="twitter:image" content={image} />}
      </Helmet>
    )
  )
}

export default props => (
  <Location>
    {({ location }) => <SEO pathname={location.pathname} {...props} />}
  </Location>
)

SEO.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      resize: PropTypes.shape({
        src: PropTypes.string,
      }),
    }),
  }),
  pathname: PropTypes.string,
}
