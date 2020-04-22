import React, { useState } from 'react';
import { StyledBoardWrapper, StyledTitle, StyledHeader, StyledListContainer } from './Styles';
import List from '../../shared/components/list';
import AddList from '../add-list';

const Board = () => {
  const testLists = [
    {
      title: 'Test List',
      cards: [
        {
          title: 'Test Card',
        }
      ]
    }
  ];

  const [lists, setLists] = useState(testLists);

  function handleNewList(newListTitle) {
    const newList = { title: newListTitle };
    setLists([newList, ...lists]);
  }

  return(
    <StyledBoardWrapper>
      <StyledHeader>
        <StyledTitle>Board Name</StyledTitle>
        <StyledListContainer>
          {lists.map((list, i) => <List key={i} {...list}/>)}
          {<AddList noList={!lists.length} addListAction={handleNewList}/>}
        </StyledListContainer>
      </StyledHeader>
    </StyledBoardWrapper>
  )
};

export default Board;