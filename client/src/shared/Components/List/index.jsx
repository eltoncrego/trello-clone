import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import {
  ListContainer,
  ListHeader,
  DraggableListWrapper,
} from './Styles';
import { IconContainer } from '../Shared';
import Card from '../Card';

const List = ({ data, id }) => {
  const { title, cards } = data;

  const getCardUIElements = () =>
    cards.map((card, i) => {
      return <Card data={card} listId={id} id={i} key={i} />;
    });

  return (
    <Draggable draggableId={`list-${id}`} index={id}>
      {(provided0, snapshot) => (
        <DraggableListWrapper
          ref={provided0.innerRef}
          {...provided0.draggableProps}
        >
          <Droppable droppableId={`list-${id}`} type='CARD'>
            {(provided) => (
              <ListContainer
                ref={provided.innerRef}
                isBeingDragged={
                  snapshot.isDragging && !snapshot.isDropAnimating
                }
              >
                <ListHeader {...provided0.dragHandleProps}>
                  <h2>{title}</h2>
                  <IconContainer disabled={true}>
                    <i className='material-icons'>more_horiz</i>
                  </IconContainer>
                </ListHeader>
                {getCardUIElements()}
                {provided.placeholder}
              </ListContainer>
            )}
          </Droppable>
        </DraggableListWrapper>
      )}
    </Draggable>
  );
};

List.propTypes = {
  data: PropTypes.object.isRequired,
};

export default List;
