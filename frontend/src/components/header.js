import { Link } from 'gatsby'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalStateContext } from '../context/GlobalContextProvider'
import Nav from './nav'
import Container from './container'
import MenuToggle from './menu-toggle'
import logo from '../images/logo.svg'

const StyledHeader = styled.header`
  background-color: #fff;
  position: sticky;
  top: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
    0 1px 3px 1px rgba(60, 64, 67, 0.16);
`

const StyledHeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.img`
  width: 120px;
`

const Header = () => {

  const state = useContext(GlobalStateContext)

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Link to="/">
          <StyledLogo src={logo} alt="jameshowell.dev logo" />
        </Link>
        <div>
          <Nav navOpen={state.navOpen} />
          <MenuToggle tag="button">Toggle Menu</MenuToggle>
        </div>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header
