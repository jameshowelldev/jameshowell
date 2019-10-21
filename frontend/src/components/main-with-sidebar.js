import React from 'react'
import styled from 'styled-components'

const StyledMainWithSidebar = styled.div`
  @media screen and (min-width: 961px) {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: ${(props) => (props.sidebarPosition === 'left' ? '25% minmax(0, 75%)' : 'minmax(0, 75%) 25%')};
    
  }
`

const mainWithSidebar = ({ children, sidebarPosition }) => {
  return (
    <StyledMainWithSidebar sidebarPosition={sidebarPosition}>{children}</StyledMainWithSidebar>
  )
}

export default mainWithSidebar
