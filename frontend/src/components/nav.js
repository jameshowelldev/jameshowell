import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNavList = styled.ul`
  display: flex;
  margin: 0 -12px;
  padding: 0;
  list-style: none;
`

const StyledNavListItem = styled.li`
  padding-left: 12px;
  padding-right: 12px;
`

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
`

const Nav = () => (
  <nav>
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
  </nav>
)

export default Nav
