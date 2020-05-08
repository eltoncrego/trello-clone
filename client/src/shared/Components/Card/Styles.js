import styled, { css } from 'styled-components';
import { color, global, globalProperties } from '../../Utils/styles';

export const DraggableWrapper = styled.div`
  margin-bottom: ${globalProperties.itemSpacing};
`;

export const CardContainer = styled.div`
  background-color: ${color.bgLight};
  border: 1px solid ${color.light};
  padding: ${globalProperties.itemSpacing};
  transition: all 200ms cubic-bezier(0.2, 0, 0, 1);
  transition-property: transform, box-shadow;
  ${global.borderRadius}
  ${props =>
    props.isBeingDragged &&
    css`
      transform: rotate(4deg);
      ${global.boxShadowLift}
    `}
`;
