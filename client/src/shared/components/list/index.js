import React from 'react';
import { StyledList, StyledListTitle, StyledListHeader} from './Styles';
import { StyledInput } from '../StyledComponents';
import { MESSAGES } from './../../utils/Messages';
import { color } from '../../utils/Styles';

const List = ({ title, cards }) => {
  return(
    <StyledList>
      <StyledListHeader>
        <StyledListTitle>
            { title }
        </StyledListTitle>
      </StyledListHeader>
      {cards ? null : <StyledInput placeholder={MESSAGES.ADD_A_CARD} margins={'0 16px'} bgOnNonActive={color.listBGColor}/> }
    </StyledList>
  );
};

export default List;