import styled from 'styled-components';
import { color, materials, font } from './../../utils/Styles';

export const StyledCardWrapper = styled.div`
  margin: 0 16px 8px 16px;
  padding: 16px;
  ${materials.cardBorderRadius};
  background-color: ${color.cardBG};
  color: ${color.text};
  ${font.size(12)}
  &:hover {
    cursor: ${props => props.isDragTarget ? 'grabbing' : 'grab'};
  }
`;