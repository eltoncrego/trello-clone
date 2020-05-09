import React from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import {
  ListContainer,
  DraggableListWrapper,
} from './Styles';
import { IconContainer, CardTitle, CardHeader } from '../SharedStyled';
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
                <CardHeader {...provided0.dragHandleProps} width="272px">
                  <CardTitle title={title}>{title}</CardTitle>
                  <IconContainer disabled={true}>
                    <i className='material-icons'>more_horiz</i>
                  </IconContainer>
                </CardHeader>
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
