import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import RichTextContent from '../components/RichTextContent'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  avatar: {
    width: 190,
    height: 190,
  },
  hero: {
    marginTop: -theme.spacing.unit * 3,
    marginLeft: -theme.spacing.unit * 3,
    marginRight: -theme.spacing.unit * 3,
  },
})

const AboutPage = ({ classes, data: { about } }) => {
  return (
    <React.Fragment>
      <HelmetDatoCms seo={about.seoMetaTags} />
      <Grid container>
        <Grid container spacing={16} alignItems="center">
          <Hidden only="xs">
            <Grid item xs={8}>
              <Typography variant="h1">About Me</Typography>
            </Grid>
            <Grid item xs={4}>
              <Avatar
                className={classes.avatar}
                component={Img}
                fluid={about.avatar.sizes}
              />
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={12}>
              <Img className={classes.hero} fluid={about.avatar.sizes} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">About Me</Typography>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs={12}>
          <RichTextContent
            htmlContent={about.descriptionNode.childMarkdownRemark.html}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default withStyles(styles)(AboutPage)

export const query = graphql`
  query {
    about: datoCmsAbout {
      avatar {
        sizes(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
