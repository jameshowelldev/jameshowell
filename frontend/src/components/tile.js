import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { getBlogUrl } from '../lib/helpers'
import Image from './image'
import { StyledH3 } from './typography'

const StyledTile = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
    0 1px 3px 1px rgba(60, 64, 67, 0.16);
`

const StyledTileInfo = styled(Link)`
  padding: 15px 20px 0 15px;
  display: inline-block;
`

const StyledTileHeading = styled(StyledH3)`
  font-weight: 500;
  font-size: 1.4rem;
`

const StyledSeriesHeading = styled.h4`
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-weight: 300;
  font-size: 16px;
`

const StyledSeriesName = styled.span`
  color: #555;
`

const StyledSeriesPartNumber = styled.span`
  position: relative;
  color: #555;

  &:before,
  &:after {
    font-size: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    content: "\\003c";
    left: -7px;
  }

  &:after {
    content: "\\003e";
    right: -7px;
  }
`
const StyledCategoriesList = styled.ul`
  display: flex;
  font-weight: 300;
  font-size: 12px;
  margin-top: 20px;
  margin-left: 5px;
  padding-bottom: 20px;
`

const StyledCategoriesListItem = styled.li`
  padding: 0px 5px;
`

const handleColorType = (type) => {
  switch (type) {
    case 'design-systems':
      return '#dbefe1'
    case 'css':
      return '#efdfaf'
    case 'html':
      return '#9e9e9e'
    case 'javascript':
      return '#b9d7ef'
    default:
      return '#fff'
  }
}

const StyledCategoryLink = styled(Link)`
  border-radius: 999px;
  color: #000;
  padding: 5px 20px;
  background-color: ${({ type }) => handleColorType(type)};
`

const Tile = (props) => {
  const {
    title,
    series,
    part,
    mainImage,
    slug,
    publishedAt,
    categories,
  } = props
  return (
    <StyledTile>
      {mainImage && (
        <Link to={getBlogUrl(publishedAt, slug)}>
          <Image
            imageObj={mainImage}
            width="600"
            widthRatio="2"
            heightRatio="1"
          />
        </Link>
      )}
      {title && (
        <StyledTileInfo to={getBlogUrl(publishedAt, slug)}>
          <StyledSeriesHeading>
            <StyledSeriesName>{series}</StyledSeriesName>
            <StyledSeriesPartNumber>
              {part}
              /4
            </StyledSeriesPartNumber>
          </StyledSeriesHeading>
          <StyledTileHeading tag="h3">{title}</StyledTileHeading>
        </StyledTileInfo>
      )}
      {categories && (
        <StyledCategoriesList>
          {categories.map(category => (
            <StyledCategoriesListItem key={category._id}>
              <StyledCategoryLink to={getBlogUrl(publishedAt, slug)} type={category.title.replace(' ', '-').toLowerCase()}>{category.title}</StyledCategoryLink>
            </StyledCategoriesListItem>
          ))}
        </StyledCategoriesList>
      )}
    </StyledTile>
  )
}

export default Tile
