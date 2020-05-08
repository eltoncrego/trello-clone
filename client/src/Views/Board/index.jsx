import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import List from '../../Shared/Components/List';
import { testLists } from '../../Shared/Constants/testData';
import { BoardContainer } from './Styles';

const Board = () => {
  const [lists, setLists] = useState(testLists);

  const getIndexFromDroppableId = (id) => parseInt(id.split('-')[1]);

  const handleDragEnd = (data) => {
    const { source, destination } = data;
    const sourceList = getIndexFromDroppableId(source.droppableId);
    const destinationList = getIndexFromDroppableId(destination.droppableId);
    if (sourceList === destinationList && source.index === destination.index) {
      return;
    }
    const tempLists = lists.slice();
    const item = tempLists[sourceList].cards.splice(source.index, 1);
    tempLists[destinationList].cards.splice(destination.index, 0, item);
    setLists(tempLists);
  };

  const getListUIElements = () =>
    lists.map((list, i) => <List data={list} id={i} key={i} />);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardContainer>{getListUIElements()}</BoardContainer>
    </DragDropContext>
  );
};

export default Board;
