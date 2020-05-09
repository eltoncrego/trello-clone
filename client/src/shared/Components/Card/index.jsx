import React, { Fragment, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { CardContainer, DraggableWrapper } from './Styles';
import Modal from './Modal';

export const Card = ({ data, list, listId, id }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Fragment>
      <Draggable draggableId={`list-${listId}__card-${id}`} index={id}>
        {(provided, snapshot) => (
          <DraggableWrapper
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardContainer
              isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}
              onClick={() => setModalVisible(true)}
              weight={4}
            >
              {data.title}
            </CardContainer>
          </DraggableWrapper>
        )}
      </Draggable>
      {modalVisible && (
        <Modal data={data} list={list} onClose={() => setModalVisible(false)} />
      )}
    </Fragment>
  );
};

export default Card;
