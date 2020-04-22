import React, { useState } from 'react';
import { BoardWrapper, StyledTitle, StyledHeader, StyledListContainer } from './Styles';
import List from '../list';

const Board = () => {
  const [lists, setLists] = useState([]);

  return(
    <BoardWrapper>
      <StyledHeader>
        <StyledTitle onClick={() => setLists([...lists, 'whaddup'])}>Board Name</StyledTitle>
        <StyledListContainer>
          {lists.map((list, i) => <List key={i} title={list}/>)}
        </StyledListContainer>
      </StyledHeader>
    </BoardWrapper>
  )
};

export default Board;