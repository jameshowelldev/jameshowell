import React from 'react'
import styled from 'styled-components'

const StyledDynamicComponent = styled.div``

const DynamicComponent = ({ tag = 'div', children, ...props }) => {
  const WithComponent = StyledDynamicComponent.withComponent(tag)
  return <WithComponent {...props}>{children}</WithComponent>
}

export default DynamicComponent
