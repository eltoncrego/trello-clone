import React from 'react';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { ListContainer, ListCardsContainer } from './Styles';
import { HeaderIconContainer, ItemTitle, CardHeader } from '../SharedStyled';
import Card from '../Card';

const List = ({ data, id }) => {
  const { title, cards } = data;
  const getCardUIElements = () =>
    cards.map((card, i) => {
      return <Card data={card} list={title} listId={id} id={i} key={i} />;
    });

  return (
    <Draggable draggableId={`list-${id}`} index={id}>
      {(provided0, snapshot) => (
        <div ref={provided0.innerRef} {...provided0.draggableProps}>
          <Droppable droppableId={`list-${id}`} type='CARD'>
            {(provided) => (
              <ListContainer
                ref={provided.innerRef}
                isBeingDragged={
                  snapshot.isDragging && !snapshot.isDropAnimating
                }
              >
                <CardHeader {...provided0.dragHandleProps} width='272px'>
                  <ItemTitle title={title}>{title}</ItemTitle>
                  <HeaderIconContainer disabled={true}>
                    <i className='material-icons'>more_horiz</i>
                  </HeaderIconContainer>
                </CardHeader>
                <ListCardsContainer>
                  {getCardUIElements()}
                  {provided.placeholder}
                </ListCardsContainer>
              </ListContainer>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

List.propTypes = {
  data: PropTypes.object.isRequired,
};

export default List;
