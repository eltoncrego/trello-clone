import React, { useState } from 'react';
import { MESSAGES } from '../../shared/utils/Messages';
import { StyledList, StyledListTitle, StyledListHeader, StyledInput, SideButton } from '../../shared/components/StyledComponents';
import { StyledAddListActions } from './Styles';

const AddList = ({ noList, addListAction }) => {
  const newListTitle = useFormValue('');

  function addANewList() {
    newListTitle.clear();
    addListAction(newListTitle.value);
  }

  return(
    <StyledList>
      <StyledListHeader>
        <StyledListTitle>
          {noList ? MESSAGES.NO_LIST : MESSAGES.ADD_LIST }
        </StyledListTitle>
      </StyledListHeader>
      <StyledAddListActions>
        <StyledInput placeholder={MESSAGES.ADD_LIST_TITLE} {...newListTitle}></StyledInput> 
        <SideButton onClick={addANewList}>{MESSAGES.ADD_LIST_CONFIRM}</SideButton>
      </StyledAddListActions>
    </StyledList>
  );
};

function useFormValue(initialValue) {
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