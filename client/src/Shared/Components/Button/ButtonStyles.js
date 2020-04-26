import styled, { css } from 'styled-components';
import { componentStyles, color, spices } from '../../Utils/SharedStyles';

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
  ${props => {
    if (props.status){
      if (props.status === 'loading') {
        return css`
          color: ${color.textOnColor};
          background-color: ${color.loading};
          box-shadow: none;
          &:hover {
            cursor: initial;
            background-color: ${color.loading};
            box-shadow: none;
          }
        `;
      }
      if (props.status === 'error') {
        return css`
          color: ${color.textOnColor};
          background-color: ${color.error};
          box-shadow: none;
          &:hover {
            cursor: initial;
            background-color: ${color.error};
            box-shadow: none;
          }
        `;
      }
      if (props.status === 'success') {
        return css`
          color: ${color.textOnColor};
          background-color: ${color.success};
          box-shadow: none;
          &:hover {
            cursor: initial;
            background-color: ${color.success};
            box-shadow: none;
          }
        `;
      }
    }
  }}
`;