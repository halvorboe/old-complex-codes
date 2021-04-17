import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import Feature from '../components/Feature'
import IndexLayout from '../layouts'
import { colors } from '../styles/variables'

import Img from 'gatsby-image'
import Socials from '../components/Socials'

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM, YYYY")
          title
        }
        excerpt
        id
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { posts } = data.blog

  return (
    <IndexLayout>
      <Page>
        <Feature image>
          <h3>
            Personal blog by Halvor Fladsrud Bø. You can learn more about me <Link to="/about">here</Link>.
          </h3>
          <Socials />
        </Feature>

        <Container>
          {posts.map(post => (
            <article key={post.id}>
              <br />
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.frontmatter.date}</p>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
