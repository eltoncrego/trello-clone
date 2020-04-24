import styled from 'styled-components';
import TrelloLogo from './TrelloLogo';
import { color } from '../Utils/SharedStyles';

export const StyledIcon = styled.i`
  color: ${props => props.color};
`;

export const StyledTrelloLogo = styled(TrelloLogo)`
  margin: ${props => props.margin ? props.margin : '0'};
  &:hover {
    fill: ${color.primaryHover};
  }
`;