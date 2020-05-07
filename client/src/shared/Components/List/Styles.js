import styled from 'styled-components';
import { global, color, globalProperties } from '../../styles';

export const ListContainer = styled.div`
  background-color: ${color.bgLight};
  margin: ${globalProperties.itemSpacing};
  padding: ${globalProperties.itemSpacing};
  ${global.borderRadius}
  ${global.boxShadow}
`;

export const ListHeader = styled.div`
  width: 400px;
  height: 28px;
  display: grid;
  grid-template-columns: 1fr 56px;
`;

export const ListTitle = styled.h2`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;
