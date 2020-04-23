import styled from 'styled-components';
import { componentStyles, color, spices } from '../../Utils/SharedStyles';

export const StyledButtonContainer = styled.div`
  padding: ${componentStyles.fieldPadding} ${componentStyles.fieldLargePadding};
  color: ${color.textOnLink};
  background-color: ${color.primary};
  border-radius: ${componentStyles.borderRadius};
  text-transform: capitalize;
  ${spices.interactionTransition};
  ${spices.boxShadowMedium(color.glowPrimary)};
  transition-property: background-color, box-shadow;
  &:hover {
    cursor: pointer;
    background-color: ${color.primaryHover};
    ${spices.boxShadowMedium(color.glowPrimaryHover)};
  }
`;