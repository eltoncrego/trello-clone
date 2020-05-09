import styled from 'styled-components';
import {
  globalProperties,
  color,
  global,
  font,
} from '../../Shared/Utils/styles';

export const BoardContainer = styled.div`
  flex: 1;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding: ${globalProperties.itemSpacing};
`;

export const BoardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${globalProperties.boxShadowSpread} rgba(70, 128, 255, 0.1);
  padding: ${globalProperties.itemSpacing};
  margin: ${globalProperties.itemSpacing};
  background-color: ${color.primary};
  color: ${color.textOnColor};
  ${global.borderRadius}
  &:hover {
    box-shadow: ${globalProperties.boxShadowLiftSpread} rgba(70, 128, 255, 0.1);
  }
`;

export const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  margin: ${globalProperties.itemSpacing};
`;

export const BoardSubTitle = styled.h2`
  ${font.size(16)}
  ${font.regular}
  color: ${color.secondaryText};
`;
