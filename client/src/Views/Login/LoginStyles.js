import styled from 'styled-components';
import Image from './Assets/Images/work.jpg';
import { color, zIndexes, componentStyles, font } from '../../Shared/Utils/SharedStyles';

export const StyledLoginContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const StyledPhotoContainer = styled.div`
  position: relative;
  background: url(${Image});
  background-size: cover;
  background-position: center;
  z-index: ${zIndexes.bg};
  padding: ${componentStyles.paddingLarge};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &::before {
    content: '';
    z-index: ${zIndexes.scrim};
    position: absolute;
    background-color: ${color.scrim};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const StyledPhotoTitle = styled.h1`
  z-index: ${zIndexes.overScrim};
  color: ${color.textOnColor};
  ${font.size(60)};
  line-height: 60px;
  margin: 0;
  margin-bottom: ${componentStyles.itemSpacingLarge};
`;

export const StyledPhotoDesc = styled.span`
  z-index: ${zIndexes.overScrim};
  color: ${color.textLight};
`