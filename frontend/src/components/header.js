import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Nav from './nav'
import Container from './container'
import logo from '../images/logo.svg'

const StyledHeader = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`

const StyledHeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.img`
  width: 120px;
`

const Header = () => (
  <StyledHeader>
    <StyledHeaderContainer element="header">
      <Link to="/">
        <StyledLogo src={logo} alt="jameshowell.dev logo" />
      </Link>
      <Nav />
    </StyledHeaderContainer>
  </StyledHeader>
)

export default Header
