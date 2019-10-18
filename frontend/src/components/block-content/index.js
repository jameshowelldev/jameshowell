import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import Code from './code'
import Figure from './figure'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>

        case 'h2':
          return <h2>{props.children}</h2>

        case 'h3':
          return <h3>{props.children}</h3>

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>

        default:
          return <p>{props.children}</p>
      }
    },
    figure(props) {
      const { node } = props
      return <Figure {...node} />
    },
    code(props) {
      const { node } = props
      return <Code {...node} />
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
