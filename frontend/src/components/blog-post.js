import React from 'react'
import styled from 'styled-components'
import Container from './container'
import Image from './image'
import TileGrid from './tile-grid'
import BlockContent from './block-content'
import MainWithSidebar from './main-with-sidebar'
import { StyledH1 } from './typography'

const StyledBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BlogPost = (props) => {
  const {
    _rawBody,
    authors,
    categories,
    relatedPosts,
    title,
    series,
    part,
    mainImage,
    publishedAt,
  } = props
  return (
    <StyledBlogPost>
      <Image imageObj={mainImage} width="1600" widthRatio="4" heightRatio="1" />
      <Container vPadding="sm">
        <MainWithSidebar>
          <article>
            {title && <StyledH1 tag="h1">{title}</StyledH1>}
            <MainWithSidebar sidebarPosition="left">
              <div>here</div>
              {_rawBody && <BlockContent blocks={_rawBody} />}
            </MainWithSidebar>
          </article>
          <TileGrid
            title="Related Articles"
            nodes={relatedPosts}
            browseMoreHref="/blog/"
          />
        </MainWithSidebar>
      </Container>
    </StyledBlogPost>
  )
}

export default BlogPost
