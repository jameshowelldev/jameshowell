import React from 'react'
import styled from 'styled-components'
import Tile from './tile'


const StyledTileList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
`

const TileGrid = (props) => {
  const { title, nodes } = props
  return (
    <div>
      { title && (
        <h2>{title}</h2>
      )}
      { nodes && (
        <StyledTileList>
          {
            nodes.map((node) => (
              <li key={node._id}>
                <Tile {...node} />
              </li>
            ))
          }
        </StyledTileList>
      )}
    </div>
  )
}


export default TileGrid
