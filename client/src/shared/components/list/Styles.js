import styled from 'styled-components';
import { color, materials, font } from './../../utils/Styles';

export const StyledList = styled.div`
  ${props => props.width ? `min-width: ${props.width};`: null}
  background-color: ${color.listBG};
  color: ${color.text};
  margin-right: 8px;
  ${materials.cardBorderRadius}
  transition: all 200ms ease-in-out;
`;

export const StyledListHeader = styled.div`
  padding: 16px;
  ${materials.cardBorderRadius}
  &:hover {
    ${props => props.draggable ? 'cursor: grab;' : null}
  }
`;

export const StyledListTitle = styled.h1`
  margin: 0;
  margin-left: 0;
  text-transform: uppercase;
  color: ${color.lightText};
  ${font.size(12)}
`;