import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import Feature from '../components/Feature'
import IndexLayout from '../layouts'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Feature>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p>{data.markdownRemark.frontmatter.date}</p>
      </Feature>
      <Container>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM, YYYY")
        title
      }
    }
  }
`
