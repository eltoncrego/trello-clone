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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;