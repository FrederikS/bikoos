import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  avatar: {
    width: 190,
    height: 190,
    marginBottom: '-50px'
  },
})

const AboutPage = ({ classes, data: { about } }) => {
  return (
    <Layout>
      <Grid container>
        <Grid container spacing={16} direction="row-reverse">
          <Hidden only="xs">
            <Grid item md={4} sm={6}>
              <Avatar
                className={classes.avatar}
                component={Img}
                fluid={about.avatar.sizes}
              />
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={12}>
              <Img fluid={about.avatar.sizes} />
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="div"
            dangerouslySetInnerHTML={{
              __html: about.descriptionNode.childMarkdownRemark.html,
            }}
          />
        </Grid>
      </Grid>
    </Layout>
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
    }
  }
`
