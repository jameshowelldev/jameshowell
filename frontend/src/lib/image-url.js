import imageUrlBuilder from '@sanity/image-url'
import sanityConfig from '../../../backend/sanity.json'

const builder = imageUrlBuilder(sanityConfig.api)

const imageUrlFor = (source) => builder.image(source)

export default imageUrlFor
