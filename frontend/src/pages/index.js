import React from 'react'
import { graphql, Link } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TileGrid from '../components/tile-grid'
import Container from '../components/container'
import Image from '../components/image'

export const query = graphql`
  query IndexPageQuery {
    posts: allSanityPost {
      edges {
        node {
          _id
          title
          publishedAt
          series
          part
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
        <div>
          <h1>Hi I&lsquo;m James</h1>
          <p>
            I&lsquo;m a London-based front-end developer with over a decade of
            experience in the advertising and banking industries.
          </p>
          <p>
            I&lsquo;m passionate about crafting beautiful UIs by writing code
            which looks as flawless as the design it defines. I love React, Node
            and Atomic Design and have worked for brands including Barclays,
            Sky,Marks &amp; Spencer and Virgin Active.
          </p>
        </div>
        {/* <Image
          imageObj={mainImage}
          width="600"
          widthRatio="16"
          heightRatio="9"
        /> */}
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
