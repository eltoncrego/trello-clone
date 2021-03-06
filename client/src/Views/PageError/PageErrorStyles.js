import styled from 'styled-components';
import { componentStyles, color, spices, font } from '../../Shared/Utils/SharedStyles';

export const StyledPageError = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${componentStyles.paddingLarge};
`;

export const StyledPageErrorCard = styled.div`
  background-color: ${color.backgroundLight};
  padding: ${componentStyles.paddingMedium};
  border-radius: ${componentStyles.borderRadius};
  ${spices.boxShadowLight()};
`;

export const StyledPageErrorHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${componentStyles.itemSpacingLarge};
`;

export const StyledErrorTitle = styled.h1`
  margin: 0;
  margin-left: 12px;
  ${font.size(24)}
`;