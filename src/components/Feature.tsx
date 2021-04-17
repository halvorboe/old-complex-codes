import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Container from '../components/Container'
import { colors } from '../styles/variables'

import Img from 'gatsby-image'

interface FeatureProps {
  image?: boolean
}

const Feature: React.FC<FeatureProps> = ({ image, children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-no-background.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div style={{ backgroundColor: colors.gray.dark }}>
      <Container>
        <div style={{ display: 'flex', paddingTop: 50, minHeight: 300 }}>
          <div style={{ flex: 1, paddingLeft: 0, padding: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', margin: 0, transform: ' translate(0, -50%)' }}>{children}</div>
          </div>
          {image ? (
            <div style={{ maxWidth: 300 }}>
              <Img style={{ marginBottom: -5, padding: 0 }} fixed={data.file.childImageSharp.fixed} />
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  )
}

export default Feature
