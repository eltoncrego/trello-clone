import React from 'react';
import { MESSAGES } from '../../../shared/utils/Messages';
import { StyledList, StyledListTitle, StyledListHeader } from '../../../shared/components/list/Styles';
import { StyledInput, SideButton } from '../../../shared/components/StyledComponents';
import { StyledAddListActions } from './Styles';
import { useInputValue } from './../../../shared/utils/Hooks';

const AddList = ({ noList, addListAction }) => {
  const newListTitle = useInputValue('');

  function addANewList() {
    if(newListTitle.value.length) {
      newListTitle.clear();
      addListAction(newListTitle.value);
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addANewList();
    }
  }

  return(
    <StyledList width='285px'>
      <StyledListHeader>
        <StyledListTitle>
          {noList ? MESSAGES.NO_LIST : MESSAGES.ADD_LIST }
        </StyledListTitle>
      </StyledListHeader>
      <StyledAddListActions>
        <StyledInput 
          placeholder={MESSAGES.ADD_LIST_TITLE}
          onKeyPress={handleKeyPress}
          {...newListTitle}
        ></StyledInput> 
        <SideButton onClick={addANewList}>
          {MESSAGES.ADD_LIST_CONFIRM}
        </SideButton>
      </StyledAddListActions>
    </StyledList>
  );
};

export default AddList;