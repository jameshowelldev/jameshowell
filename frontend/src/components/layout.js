import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import {
  GlobalStateContext,
} from '../context/GlobalContextProvider'
import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    line-height: 1.5;
    background-color: #eee;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

const StyledOuterWrapper = styled.div`
  @media screen and (max-width: 960px) {
    position: relative;
    overflow: ${(props) => (props.navOpen ? 'hidden' : 'scroll')};
  }
`

const StyledPageWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media screen and (max-width: 960px) {
    left: 0;
    position: relative;
    transform: ${(props) => (props.navOpen ? 'translate3d(300px, 0, 0)' : 'translate3d(0, 0, 0)')};
    transition: transform 0.4s ease-in;
  }
`

const Layout = ({ children }) => {
  const state = useContext(GlobalStateContext)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledOuterWrapper navOpen={state.navOpen}>
      <StyledPageWrapper navOpen={state.navOpen}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer>Footer content here</Footer>
      </StyledPageWrapper>
    </StyledOuterWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
