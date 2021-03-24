import styled from 'styled-components'
import { PRIMARY_COLOR, INV_TEXT_COLOR,FONT_SIZES, BORDER_RADIUS } from '../styles'

const Button = styled.button`
  background: ${PRIMARY_COLOR};0c0
  color: ${INV_TEXT_COLOR};
  font-size: ${FONT_SIZES.MEDIUM};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: ${BORDER_RADIUS};
`;

export default Button