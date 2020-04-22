import React, { useState } from 'react';
import { MESSAGES } from '../../../shared/utils/Messages';
import { StyledList, StyledListTitle, StyledListHeader } from '../../../shared/components/list/Styles';
import { StyledInput, SideButton } from '../../../shared/components/StyledComponents';
import { StyledAddListActions } from './Styles';

const AddList = ({ noList, addListAction }) => {
  const newListTitle = useInputValue('');

  function addANewList() {
    if(newListTitle.value.length) {
      newListTitle.clear();
      addListAction(newListTitle.value);
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
          onKeyPress={(e) => e.key === 'Enter' ? addANewList() : null}
          {...newListTitle}></StyledInput> 
        <SideButton onClick={addANewList}>{MESSAGES.ADD_LIST_CONFIRM}</SideButton>
      </StyledAddListActions>
    </StyledList>
  );
};

function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  function clear() {
    setValue('');
  }
  return {
    value,
    onChange: handleChange,
    clear
  };
}

export default AddList;