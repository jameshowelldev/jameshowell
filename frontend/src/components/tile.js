import React from 'react'
import { Link } from 'gatsby'
import BlockText from './block-text'
import { buildImageObj, getBlogUrl } from '../lib/helpers'
import imageUrlFor from '../lib/image-url'

const Tile = (props) => {
  const {
    title,
    mainImage,
    _rawExcerpt,
    slug,
    publishedAt,
    categories,
  } = props
  return (
    <div>
      {title && (
        <h3>
          <Link to={getBlogUrl(publishedAt, slug)}>{title}</Link>
        </h3>
      )}
      {mainImage && (
        <Link to={getBlogUrl(publishedAt, slug)}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={mainImage.alt}
          />
        </Link>
      )}
      {_rawExcerpt && (
        <div>
          <BlockText blocks={_rawExcerpt} />
        </div>
      )}
      {categories && (
        <ul>
          {categories.map((category) => <li key={category._id}>{category.title}</li>)}
        </ul>
      )}
    </div>
  )
}

export default Tile
