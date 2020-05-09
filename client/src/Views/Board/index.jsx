import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useQuery, useMutation } from '@apollo/react-hooks';

import List from '../../Shared/Components/List';
import {
  GET_ALL_LIST_DATA,
  REPLACE_ALL_LISTS,
  REPLACE_CARDS_IN_LIST,
} from '../../Shared/Utils/api';
import {
  BoardContainer,
  ListsContainer,
  BoardHeader,
  BoardIconContainer,
  BoardSubTitle,
} from './Styles';

const Board = () => {
  const [lists, setLists] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_LIST_DATA);
  const [replaceAllLists, resAllLists] = useMutation(REPLACE_ALL_LISTS);
  const [replaceCardsInList, resCards] = useMutation(REPLACE_CARDS_IN_LIST);

  useEffect(() => {
    setLists((data && data.lists) || []);
  }, [data]);

  useEffect(() => {
    error && console.error(error);
  }, [error]);

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
      const args = {
        variables: {
          listIndex: sourceList,
          cards: tempLists[sourceList].cards,
        },
      };
      replaceCardsInList(args);
      args.variables = {
        listIndex: destinationList,
        cards: tempLists[destinationList].cards,
      };
      replaceCardsInList(args);
    }
  };

  const postLists = ({ source, destination }) => {
    if (source && destination) {
      const tempLists = lists.slice();
      const item = tempLists.splice(source.index, 1)[0];
      tempLists.splice(destination.index, 0, item);
      setLists(tempLists);
      replaceAllLists({ variables: { lists: tempLists } });
    }
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
    <BoardContainer>
      <BoardHeader>
        <BoardIconContainer>
          <i className='material-icons'>star</i>
        </BoardIconContainer>
        <div>
          <h1>Board Name</h1>
          <BoardSubTitle>Team Name</BoardSubTitle>
        </div>
      </BoardHeader>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='board' type='LIST' direction='horizontal'>
          {(provided) => (
            <ListsContainer ref={provided.innerRef}>
              {!loading &&
                lists.map((list, i) => <List data={list} id={i} key={i} />)}
              {provided.placeholder}
            </ListsContainer>
          )}
        </Droppable>
      </DragDropContext>
    </BoardContainer>
  );
};

export default Board;
