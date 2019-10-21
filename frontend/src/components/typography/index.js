import styled, { css } from 'styled-components'
import DynamicComponent from '../dynamic-component'

const FontSizeXXS = css`
  font-size: 0.5px;
`
const FontSizeXS = css`
  font-size: 0.75px;
`
const FontSizeSM = css`
  font-size: 1rem;
`
const FontSizeMD = css`
  font-size: 1.5rem;
`
const FontSizeLG = css`
  font-size: 2rem;
`
const FontSizeXL = css`
  font-size: 3rem;
`
const StyledH1 = styled(DynamicComponent)`
  ${FontSizeXL}
  line-height: 1.25;
  margin: 0 0 20px 0;
`
const StyledH2 = styled(DynamicComponent)`
  ${FontSizeLG}
  line-height: 1;
  margin: 0 0 20px 0;
`
const StyledH3 = styled(DynamicComponent)`
  ${FontSizeMD}
  margin: 0 0 10px 0;
  line-height: 1.25;
`

export {
  FontSizeXXS,
  FontSizeXS,
  FontSizeSM,
  FontSizeMD,
  FontSizeLG,
  FontSizeXL,
  StyledH1,
  StyledH2,
  StyledH3,
}
