import styled from 'styled-components';
import { color, materials, font } from './../../utils/Styles';

export const StyledCardWrapper = styled.div`
  margin: 0 16px 8px 16px;
  padding: 16px;
  ${materials.cardBorderRadius};
  background-color: ${color.cardBG};
  color: ${color.text};
  ${font.size(12)}
  transition: all 100ms ease-in-out;
  transition-property: transform, opacity;
  ${(props) => {
    if (props.isDragTarget) {
      return(
        `transform: rotate(-4deg);
        opacity: 0.8;`
      );
    }
    return(
      `transform: rotate(0);
       opacity: 1;`
    );
  }}
`;