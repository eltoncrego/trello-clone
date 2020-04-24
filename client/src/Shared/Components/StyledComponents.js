import styled from 'styled-components';
import TrelloLogo from './TrelloLogo';
import { color, spices } from '../Utils/SharedStyles';

export const StyledIcon = styled.i`
  color: ${props => props.color};
`;

export const StyledTrelloLogo = styled(TrelloLogo)`
  margin: ${props => props.margin ? props.margin : '0'};
  & .trello-logo__fill {
    ${spices.interactionTransition};
    transition-property: fill;
  }
  &:hover .trello-logo__fill {
    fill: ${color.primaryHover};
  }
`;