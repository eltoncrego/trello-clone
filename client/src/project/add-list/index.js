import React from 'react';
import { MESSAGES } from '../../shared/utils/Messages';
import { StyledList, StyledListTitle, StyledListHeader, StyledListInput, StyledListButton } from '../../shared/components/StyledComponents';
import { StyledAddListActions } from './Styles';

const AddList = ({ noList }) => {
  return(
    <StyledList>
      <StyledListHeader>
        <StyledListTitle>
          {noList ? MESSAGES.NO_LIST : MESSAGES.ADD_LIST }
        </StyledListTitle>
      </StyledListHeader>
      <StyledListInput placeholder={MESSAGES.ADD_LIST_TITLE}></StyledListInput>
      <StyledAddListActions>
        <StyledListButton>{MESSAGES.ADD_LIST_CONFIRM}</StyledListButton>
      </StyledAddListActions>
    </StyledList>
  );
};

export default AddList;