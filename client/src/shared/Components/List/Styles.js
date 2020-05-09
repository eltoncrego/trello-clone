import styled from 'styled-components';
import { global, color, globalProperties } from '../../Utils/styles';

export const DraggableListWrapper = styled.div`
  margin: ${globalProperties.itemSpacing};
`;

export const ListContainer = styled.div`
  background-color: ${color.bgLight};
  padding: ${globalProperties.itemSpacing};
  ${global.borderRadius}
  ${global.boxShadow}
  ${props => global.draggable(props, 1)}
`;