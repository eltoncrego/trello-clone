import styled from 'styled-components';
import { color, materials, font } from './../../utils/Styles';

export const StyledList = styled.div`
  background-color: ${color.listBGColor};
  color: ${color.listTextColor};
  ${materials.cardBorderRadius}
`;

export const StyledListHeader = styled.div`
  padding: 16px;
`;

export const StyledListTitle = styled.h1`
  margin: 0;
  text-transform: uppercase;
  color: ${color.listTitleColor};
  ${font.size(12)}
`;