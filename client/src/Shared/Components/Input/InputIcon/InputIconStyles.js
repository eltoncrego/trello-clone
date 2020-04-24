import styled from 'styled-components';
import { color, componentStyles, spices } from '../../../Utils/SharedStyles';
import { StyledIcon } from '../../StyledComponents';

export const StyledInputIcon = styled(StyledIcon)`
  color: ${color.textLight};
  ${spices.noSelect};
  ${spices.interactionTransition};
  transition-property: color;
`;

export const StyledInputIconContainer = styled.div`
  border-right: 1px solid ${color.borderLightest};
  height: 50px;
  padding: 0 ${componentStyles.fieldMediumPadding};
  display: flex;
  align-items: center;
  ${spices.interactionTransition};
  transition-property: border-color;
`;