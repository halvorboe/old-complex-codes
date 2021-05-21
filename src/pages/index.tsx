import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import Feature from '../components/Feature'
import IndexLayout from '../layouts'
import { colors } from '../styles/variables'
import { FaDownload } from 'react-icons/fa'

import Img from 'gatsby-image'
import Portrait from '../components/Portrait'

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
        <Feature>
          <div style={{ flex: 1, minWidth: 450, paddingLeft: 0, padding: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', margin: 0, transform: ' translate(0, -50%)' }}>
              {' '}
              <h5 style={{ fontFamily: 'Oxygen', letterSpacing: '0.2em' }}>
                {'<'}Personal blog by{'>'}
              </h5>
              <h1 style={{ fontWeight: 'bold', fontSize: '68px', lineHeight: '70px' }}>Halvor Fladsrud Bø</h1>
              <br />
              <button
                style={{
                  background: 'none',
                  border: `2px solid ${colors.accent}`,
                  fontWeight: 'bold',
                  borderRadius: '3px',
                  color: colors.accent,
                  padding: '20px',
                  fontFamily: 'Oxygen',
                  letterSpacing: '0.2em'
                }}
              >
                Download CV <FaDownload />
              </button>
            </div>
          </div>
          <Portrait />
          <div style={{ flex: 1, paddingLeft: 0, padding: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', margin: 0, transform: ' translate(0, -50%)' }}>
              <h2 style={{ fontWeight: 400 }}>Hello, I'm a Software Engineer living in London</h2>
              <h5 style={{ fontWeight: 400, color: '#757985' }}>Interested in algorithms, data, and infrastructure</h5>
            </div>
          </div>
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
