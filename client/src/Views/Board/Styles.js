import styled from 'styled-components';
import { globalProperties } from '../../Shared/Utils/styles';

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${globalProperties.itemSpacing};
`;

export const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoardHeader = styled.div`
  margin: ${globalProperties.itemSpacing};
`;
