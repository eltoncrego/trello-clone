import styled from 'styled-components';
import { global, color, globalProperties } from '../../Utils/styles';

export const ListContainer = styled.div`
  background-color: ${color.bgLight};
  padding: ${globalProperties.itemSpacing};
  margin: ${globalProperties.itemSpacing};
  margin-top: 0;
  ${global.borderRadius}
  ${global.boxShadow}
  ${(props) => global.draggable(props, 8)}
`;

export const ListCardsContainer = styled.div`
  max-height: calc(100vh - 278px);
  overflow-y: scroll;
`;
