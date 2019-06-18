import React from 'react'
import Typography from '@material-ui/core/Typography'
import '../styles/richtext.css'

const RichTextContent = ({ htmlContent }) => {
  return (
    <Typography
      component="div"
      dangerouslySetInnerHTML={{
        __html: htmlContent,
      }}
    />
  )
}

export default RichTextContent
