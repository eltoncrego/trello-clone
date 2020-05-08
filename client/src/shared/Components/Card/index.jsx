import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { CardContainer, DraggableWrapper } from './Styles';

export const Card = ({ data, listId, id }) => {
  return (
    <Draggable draggableId={`list-${listId}__card-${id}`} index={id}>
      {(provided, snapshot) => (
        <DraggableWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContainer
            isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}
          >
            {data}
          </CardContainer>
        </DraggableWrapper>
      )}
    </Draggable>
  );
};

export default Card;
