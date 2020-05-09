import styled from 'styled-components';
import { color, global } from '../Utils/styles';

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${({ disabled }) => (disabled ? `color: ${color.light};` : null)}
  ${global.noSelect}
`;
