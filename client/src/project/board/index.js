import React, { useState } from 'react';
import { StyledBoardWrapper, StyledTitle, StyledHeader, StyledListContainer } from './Styles';
import List from '../../shared/components/list';
import AddList from './add-list';

const Board = () => {
  const [lists, setLists] = useState([]);
  const [draggedCard, setDraggedCard] = useState({});
  const [listKeyToRemoveCardFrom, setListKeyToRemoveCardFrom] = useState([]);

  function handleNewList(newListTitle) {
    const newList = { title: newListTitle, cards: [] };
    setLists([newList, ...lists]);
  }

  function handleCardDrop() {
    lists[listKeyToRemoveCardFrom[0]].cards.splice(listKeyToRemoveCardFrom[1], 1)
    setListKeyToRemoveCardFrom([]);
    setDraggedCard({});
  }

  function getListItems() {
    return(lists.map((list, i) => (
      <List 
        key={i} 
        listKey={i}
        draggedCard={draggedCard} 
        setDraggedCard={setDraggedCard} 
        listKeyToRemoveCardFrom={listKeyToRemoveCardFrom}
        setListKeyToRemoveCardFrom={setListKeyToRemoveCardFrom} 
        dropCard={handleCardDrop}
        {...list} />
    )));    
  }

  return(
    <StyledBoardWrapper>
      <StyledHeader>
        <StyledTitle>Board Name</StyledTitle>
        <StyledListContainer>
          {getListItems()}
          {<AddList 
            noList={!lists.length} 
            addListAction={handleNewList}
          />}
        </StyledListContainer>
      </StyledHeader>
    </StyledBoardWrapper>
  )
};

export default Board;