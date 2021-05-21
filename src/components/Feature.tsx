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
        <div style={{ display: 'flex', paddingTop: 50, minHeight: 300 }}>{children}</div>
      </Container>
    </div>
  )
}

export default Feature
