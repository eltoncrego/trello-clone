import styled from 'styled-components';
import { global, color, globalProperties, font } from '../../Utils/styles';

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

export const ListHeader = styled.div`
  width: 256px;
  height: 28px;
  display: grid;
  grid-template-columns: 200px 56px;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ListTitle = styled.h2`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  ${global.noSelect}
`;