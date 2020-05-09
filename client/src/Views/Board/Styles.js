import styled from 'styled-components';
import { globalProperties, color, global, font } from '../../Shared/Utils/styles';

export const BoardContainer = styled.div`
  padding: ${globalProperties.itemSpacing};
`;

export const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${globalProperties.boxShadowSpread} rgba(70, 128, 255, 0.1);
  padding: ${globalProperties.itemSpacing};
  background-color: ${color.primary};
  color: ${color.textOnColor};
  margin: ${globalProperties.itemSpacing};
  ${global.borderRadius}
  &:hover {
    box-shadow: ${globalProperties.boxShadowLiftSpread} rgba(70, 128, 255, 0.1);
  }
`;

export const BoardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardSubTitle = styled.h2`
  ${font.size(16)}
  ${font.regular}
  color: ${color.secondaryText};
`;