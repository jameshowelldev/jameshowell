import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import imageUrlFor from '../../lib/image-url'

const Figure = (props) => {
  const { asset, alt, caption } = props
  return (
    <figure>
      { asset && (
        <img
          src={imageUrlFor(buildImageObj(props))
            .width(1200)
            .url()}
          alt={alt}
        />
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default Figure
