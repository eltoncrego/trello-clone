import styled from 'styled-components';
import { color, componentParams } from '../../../SharedStyles';

export const StyledInputIcon = styled.i`
  color: ${color.textLight};
`;

export const StyledInputIconContainer = styled.div`
  flex: 1;
  border-right: 1px solid ${color.borderLightest};
  height: 50px;
  padding: 0 ${componentParams.fieldMediumPadding};
  display: flex;
  align-items: center;
`;