import React from 'react'
import { graphql, Link } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TileGrid from '../components/tile-grid'
import Container from '../components/container'

export const query = graphql`
         query IndexPageQuery {
           posts: allSanityPost {
             edges {
               node {
                 _id
                 title
                 publishedAt
                 slug {
                   current
                 }
                 categories {
                   _id
                   title
                 }
                 _rawExcerpt
                 mainImage {
                   crop {
                     _key
                     _type
                     bottom
                     left
                     right
                     top
                   }
                   hotspot {
                     _key
                     _type
                     height
                     width
                     x
                     y
                   }
                   asset {
                     _id
                   }
                   alt
                 }
               }
             }
           }
         }
       `

const IndexPage = (props) => {
  const { data } = props
  const postNodes = (data || {}).posts ? mapEdgesToNodes(data.posts) : []
  return (
    <Layout>
      <SEO title="Home" />
      <Container element="section">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Container>
      <Container>
        <TileGrid
          title="Latest from my blog"
          nodes={postNodes}
          browseMoreHref="/blog/"
        />
      </Container>
      <Container>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Layout>
  )
}

export default IndexPage
