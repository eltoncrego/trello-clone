import styled from 'styled-components';
import { color, global, globalProperties } from '../../Utils/styles';

export const DraggableWrapper = styled.div`
  margin-bottom: ${globalProperties.itemSpacing};
`;

export const CardContainer = styled.div`
  background-color: ${color.bgLight};
  border: 1px solid ${color.light};
  padding: ${globalProperties.itemSpacing};
  ${global.borderRadius}
  ${props => global.draggable(props)}
`;
