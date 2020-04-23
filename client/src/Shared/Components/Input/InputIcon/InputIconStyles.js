import styled from 'styled-components';
import { color, componentStyles } from '../../../Utils/SharedStyles';
import { StyledIcon } from '../../StyledComponents';

export const StyledInputIcon = styled(StyledIcon)`
  color: ${color.textLight};
`;

export const StyledInputIconContainer = styled.div`
  flex: 1;
  border-right: 1px solid ${color.borderLightest};
  height: 50px;
  padding: 0 ${componentStyles.fieldMediumPadding};
  display: flex;
  align-items: center;
`;