import React from 'react'
import styled from 'styled-components'
import Container from './container'
import SocialLinks from './social-links'

const StyledFooter = styled.footer`
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
    0 1px 3px 1px rgba(60, 64, 67, 0.16);
  background-color: #fff;
  padding: 20px 0;
`

const footer = () => {
  return (
    <StyledFooter>
      <Container>
        <SocialLinks>
          <li><a href="#github">Github</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#linkedin">LinkedIn</a></li>
        </SocialLinks>
      </Container>
    </StyledFooter>
  )
}

export default footer
