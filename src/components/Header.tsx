import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  font-family: Oxygen;
  position: absolute;
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  color: ${transparentize(0.5, colors.white)};
  z-index: 1000;
  width: 100%;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
`

const HomepageLink = styled(Link)`
  position: absolute;
  bottom: 0;
  color: ${colors.brand};
  font-size: 25px;
  font-weight: bold;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const PageLink = styled(Link)`
  font-size: 18px;
  color: #3a3a3a;
  letter-spacing: 0.2em;
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <Container>
      <HeaderInner>
        <div>
          <HomepageLink to="/">
            {'<'}
            {title}
            {'>'}
          </HomepageLink>
        </div>
        <div style={{ minWidth: 400 }}>
          <div
            style={{
              display: 'flex',
              fontSize: '1.5rem',
              position: 'absolute',
              bottom: 0,
              justifyContent: 'space-between',
              width: '400px'
            }}
          >
            <PageLink to="/blog">Blog</PageLink>
            <PageLink to="/about">About me</PageLink>
            <div style={{ fontSize: 20 }}>
              <a href="https://github.com/halvorboe" style={{ color: '#3a3a3a', paddingRight: 20 }}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/halvorboe" style={{ color: '#3a3a3a', paddingRight: 20 }}>
                <FaLinkedin />
              </a>
              <a href="mailto:halvor@complex.codes" style={{ color: '#3a3a3a' }}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </HeaderInner>
    </Container>
  </StyledHeader>
)

export default Header
