import styled from 'styled-components';
import { global, color, globalProperties, font } from '../../Utils/styles';

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
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ListTitleInput = styled.input`
  border: none;
  ${font.bold}
  ${font.size(24)}

  &::placeholder {
    opacity: 0.6;
  }
`;
