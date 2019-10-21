import React from 'react'
import styled from 'styled-components'


const StyledSocialList = styled.ul`
  display: flex;
`

const StyledSocialListItem = styled.li`
  padding-left: 10px;
  padding-right: 10px;
`

const SocialLinks = () => {
  return (
    <StyledSocialList>
      <StyledSocialListItem><a href="#github">Github</a></StyledSocialListItem>
      <StyledSocialListItem><a href="#twitter">Twitter</a></StyledSocialListItem>
      <StyledSocialListItem><a href="#linkedin">LinkedIn</a></StyledSocialListItem>
    </StyledSocialList>
  )
}

export default SocialLinks
