import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import ListIcon from '@material-ui/icons/List'
import InfoIcon from '@material-ui/icons/Info'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { Link } from 'gatsby'

const drawerWidth = 240

const ElevationScroll = props => {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.node.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  window: PropTypes.func,
}

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: 20,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  cartIcon: {
    marginLeft: 'auto',
  },
  homeLink: {
    textDecoration: 'none',
    color: 'inherit',
  }
})

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  render() {
    const { classes, theme, children } = this.props
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

    const drawer = (
      <div>
        <List>
          <ListItem
            button
            component={Link}
            key="home"
            to="/"
            onClick={this.handleDrawerToggle}
          >
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Produkte" />
          </ListItem>
          <ListItem
            button
            component={Link}
            key="about"
            to="/about"
            onClick={this.handleDrawerToggle}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </div>
    )

    return (
      <React.Fragment>
        <ElevationScroll {...this.props}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/" className={classes.homeLink}>
                <Typography variant="h6" color="inherit" noWrap>
                  {process.env.GATSBY_NAME}
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <nav>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <SwipeableDrawer
            container={this.props.container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onOpen={this.handleDrawerToggle}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
          >
            {drawer}
          </SwipeableDrawer>
        </nav>
        <Toolbar />
        {children}
      </React.Fragment>
    )
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer)
