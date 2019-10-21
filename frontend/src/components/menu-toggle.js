import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalDispatchContext } from '../context/GlobalContextProvider'
import DynamicComponent from './dynamic-component'

const StyledMenuToggle = styled(DynamicComponent)`
  @media screen and (min-width: 961px) {
    display: none;
  }
`

const MenuToggle = ({ children, tag }) => {
  const dispatch = useContext(GlobalDispatchContext)
  return (
    <StyledMenuToggle
      type="button"
      tag={tag}
      onClick={() => {
        dispatch({
          type: 'TOGGLE_NAV',
        })
      }}
    >
      {children}
    </StyledMenuToggle>
  )
}

export default MenuToggle
