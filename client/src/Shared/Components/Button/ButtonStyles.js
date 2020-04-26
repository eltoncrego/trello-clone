import styled, { css } from 'styled-components';
import { componentStyles, color, spices } from '../../Utils/SharedStyles';

const styleButtonContainerForStatus = ({ status }) => {
  const validStatuses = ['loading', 'error', 'success'];
  if (status && validStatuses.includes(status)) {
    return css`
      color: ${color.textOnColor};
      background-color: ${color[status]};
      box-shadow: none;
      &:hover {
        cursor: initial;
        background-color: ${color[status]};
        box-shadow: none;
      }
    `;
  }
}

export const StyledButtonContainer = styled.div`
  padding: ${componentStyles.fieldPadding} ${componentStyles.fieldLargePadding};
  color: ${color.textOnColor};
  background-color: ${color.primary};
  border-radius: ${componentStyles.borderRadius};
  text-transform: capitalize;
  ${spices.noSelect};
  ${spices.interactionTransition};
  ${spices.boxShadowMedium(color.glowPrimary)};
  transition-property: background-color, box-shadow, color;
  &:hover {
    cursor: pointer;
    background-color: ${color.primaryHover};
    ${spices.boxShadowMedium(color.glowPrimaryHover)};
  }
  ${props => styleButtonContainerForStatus(props)}
`;