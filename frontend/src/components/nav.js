import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MenuToggle from './menu-toggle'

const StyledNav = styled.nav`
  @media screen and (max-width: 960px) {
    background-color: #ccc;
    width: 300px;
    height: 100vh;
    transform: translate3d(-100%, 0, 0);
    top: 0;
    left: 0;
    position: absolute;
  }
`

const StyledNavList = styled.ul`
  padding: 0;
  list-style: none;

  @media screen and (min-width: 961px) {
    display: flex;
    margin: 0 -10px;
  }
`

const StyledNavListItem = styled.li`
  padding-left: 10px;
  padding-right: 10px;
`

const StyledNavLink = styled(Link)`
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
`

const Nav = ({ className, navOpen }) => (
  <StyledNav className={className} navOpen={navOpen}>
    <MenuToggle tag="button">Close Menu</MenuToggle>
    <StyledNavList>
      <StyledNavListItem>
        <StyledNavLink to="/">About</StyledNavLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavLink to="/">Projects</StyledNavLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavLink to="/">Blog</StyledNavLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavLink to="/">Contact</StyledNavLink>
      </StyledNavListItem>
    </StyledNavList>
  </StyledNav>
)

export default Nav
