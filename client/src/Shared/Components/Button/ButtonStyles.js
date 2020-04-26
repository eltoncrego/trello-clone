import styled, { css, keyframes } from 'styled-components';
import { componentStyles, color, spices } from '../../Utils/SharedStyles';

const float = keyframes`
  0% { 
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
`;

const shake = keyframes`
  0% { 
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(4px);
  }
  100% {
    transform: translateX(0);
  }
`;

const assignStatusAnimation = (status) => {
  if (status === 'loading') {
    return spices.slowAnimation(float);
  }
  if (status === 'error') {
    return spices.joltAnimation(shake);
  }
  return null;
};

const styleButtonContainerForStatus = ({ status }) => {
  const validStatuses = ['loading', 'error', 'success'];
  if (status && validStatuses.includes(status)) {
    return css`
      color: ${color.textOnColor};
      background-color: ${color[status]};
      ${spices.boxShadowMedium()};
      ${assignStatusAnimation(status)}
      &:hover {
        cursor: initial;
        background-color: ${color[status]};
        ${spices.boxShadowMedium()};
      }
    `;
  }
};

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
  ${props => styleButtonContainerForStatus(props)};
`;