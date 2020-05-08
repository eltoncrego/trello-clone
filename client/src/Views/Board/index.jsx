import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import List from '../../Shared/Components/List';
import { testLists } from '../../Shared/Constants/testData';
import { BoardContainer } from './Styles';

const Board = () => {
  const [lists, setLists] = useState(testLists);

  const getIndexFromDroppableId = (id) => parseInt(id.split('-')[1]);

  const postCards = ({ source, destination }) => {
    if (source && destination) {
      const sourceList = getIndexFromDroppableId(source.droppableId);
      const destinationList = getIndexFromDroppableId(destination.droppableId);
      if (
        sourceList === destinationList &&
        source.index === destination.index
      ) {
        return;
      }
      const tempLists = lists.slice();
      const item = tempLists[sourceList].cards.splice(source.index, 1)[0];
      tempLists[destinationList].cards.splice(destination.index, 0, item);
      setLists(tempLists);
    }
  };

  const postLists = ({ source, destination }) => {
    const tempLists = lists.slice();
    const item = tempLists.splice(source.index, 1)[0];
    tempLists.splice(destination.index, 0, item);
    setLists(tempLists);
  };

  const handleDragEnd = (data) => {
    const { type } = data;
    switch (type) {
      case 'CARD':
        postCards(data);
        break;
      case 'LIST':
        postLists(data);
        break;
      default:
        return;
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='board' type='LIST' direction='horizontal'>
        {(provided) => (
          <BoardContainer ref={provided.innerRef}>
            {lists.map((list, i) => (
              <List data={list} id={i} key={i} />
            ))}
            {provided.placeholder}
          </BoardContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
