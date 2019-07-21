import React from 'react'
import PropTypes from 'prop-types'

const MessageLink = ButtonComponent => ({ product, children, ...props }) => {
  const subject = encodeURIComponent(`Anfrage: ${product.title}`)
  return (
    <ButtonComponent
      href={`mailto:${process.env.GATSBY_MAIL_CONTACT}?subject=${subject}`}
      target="_blank"
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}

export default MessageLink

MessageLink.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}
