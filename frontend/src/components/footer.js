import React from 'react'
import styled from 'styled-components'
import Container from './container'

const StyledFooter = styled.footer`

`

const footer = () => {
  return (
    <StyledFooter>
      <Container>Footer content here</Container>
    </StyledFooter>
  )
}

export default footer
