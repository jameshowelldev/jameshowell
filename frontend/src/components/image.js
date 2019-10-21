import React from 'react'
import { buildImageObj } from '../lib/helpers'
import imageUrlFor from '../lib/image-url'

const Image = ({
  imageObj,
  width,
  widthRatio,
  heightRatio,
}) => {
  return (
    <img
      src={imageUrlFor(buildImageObj(imageObj))
        .width(width)
        .height(Math.floor((heightRatio / widthRatio) * width))
        .url()}
      alt={imageObj.alt}
    />
  )
}

export default Image
