// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import blockText from './blockText'
import category from './category'
import figure from './figure'
import mainImage from './mainImage'
import person from './person'
import post from './post'
import postAuthor from './postAuthor'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    blockContent,
    blockText,
    category,
    figure,
    mainImage,
    person,
    post,
    postAuthor
  ])
})
