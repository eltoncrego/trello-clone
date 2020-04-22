import React from 'react';
import { MESSAGES } from '../../shared/utils/Messages';
import { StyledList, StyledListTitle, StyledListHeader, StyledInput, SideButton } from '../../shared/components/StyledComponents';
import { StyledAddListActions } from './Styles';

const AddList = ({ noList }) => {
  return(
    <StyledList>
      <StyledListHeader>
        <StyledListTitle>
          {noList ? MESSAGES.NO_LIST : MESSAGES.ADD_LIST }
        </StyledListTitle>
      </StyledListHeader>
      <StyledAddListActions>
        <StyledInput placeholder={MESSAGES.ADD_LIST_TITLE}></StyledInput> 
        <SideButton>{MESSAGES.ADD_LIST_CONFIRM}</SideButton>
      </StyledAddListActions>
    </StyledList>
  );
};

export default AddList;