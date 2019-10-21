
import React from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${(props) => (props.vPadding === 'sm' ? '40px' : '0')};
  padding-bottom: ${(props) => (props.vPadding === 'sm' ? '40px' : '0')};

  @media screen and (max-width: 1599px){
    padding-left: 20px;
    padding-right: 20px;
  }
`

const Container = (
  {
    element,
    className,
    children,
    vPadding,
  },
) => (
  <StyledContainer as={element} className={className} vPadding={vPadding}>
    {children}
  </StyledContainer>
)

export default Container
