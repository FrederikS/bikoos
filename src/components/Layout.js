import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from './AppBar'

const styles = () => ({
  root: {
    flexGrow: 1,
  },
})

const Layout = ({ classes, children }) => {
  return (
    <AppBar>
      <main className={classes.root} style={{ padding: '80px 20px', maxWidth: '800px' }}>
        {children}
      </main>
    </AppBar>
  )
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)
