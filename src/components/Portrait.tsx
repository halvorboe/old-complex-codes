import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'

const Portrait: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-no-background.png" }) {
        childImageSharp {
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div style={{ maxWidth: 600, margin: '0 -75px 0 -250px' }}>
      <Img style={{ width: 600, marginBottom: -5, padding: 0, filter: 'brightness(1.55)' }} fixed={data.file.childImageSharp.fixed} />
    </div>
  )
}

export default Portrait
