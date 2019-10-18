
import React from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1599px){
    padding-left: 20px;
    padding-right: 20px;
  }
`

const Container = ({element, className, children}) => {
  return (
    <StyledContainer as={element} className={className}>{children}</StyledContainer>
  )
}

export default Container
