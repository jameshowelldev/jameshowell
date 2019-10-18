import React, { useEffect } from 'react'
import Prism from 'prismjs'
import '../../../node_modules/prismjs/themes/prism-funky.css'

const Code = (props) => {
  const { code } = props
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <pre>
      <code className="language-css">{code}</code>
    </pre>
  )
}

export default Code
