import React from 'react'
import Container from './container'
import TileGrid from './tile-grid'
import BlockContent from './block-content'

const BlogPost = (props) => {
  const {
    _rawBody,
    authors,
    categories,
    relatedPosts,
    title,
    mainImage,
    publishedAt,
  } = props
  return (
    <Container>
      {title && <h1>{title}</h1>}
      {_rawBody && <BlockContent blocks={_rawBody} />}
      <TileGrid
        title="Related Articles"
        nodes={relatedPosts}
        browseMoreHref="/blog/"
      />
    </Container>
  )
}

export default BlogPost
