import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import RichTextContent from '../components/RichTextContent'
import SEO from '../components/SEO'

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
      <SEO metadata={about.seoMetadata} />
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
                fluid={about.modules[0].image.fluid}
              />
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={12}>
              <Img
                className={classes.hero}
                fluid={about.modules[0].image.fluid}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">About Me</Typography>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs={12}>
          <RichTextContent
            htmlContent={about.modules[1].text.childMarkdownRemark.html}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default withStyles(styles)(AboutPage)

export const query = graphql`
  query {
    about: contentfulPage(type: { eq: "About" }) {
      seoMetadata {
        title
        description
      }
      modules {
        ... on ContentfulHero {
          image {
            fluid(maxWidth: 600, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
        ... on ContentfulRichtext {
          text {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
