import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import { ListContainer, ListHeader, ListTitleInput } from './Styles';
import { IconContainer } from '../Shared';
import Card from '../Card';

const List = ({ data, id }) => {
  const { title, cards } = data;
  const [listTitle, setListTitle] = useState(title);
  const [childCards, setChildCards] = useState(cards);

  const getCardUIElements = () =>
    childCards.map((card, i) => {
      return <Card data={card} listId={id} id={i} key={i} />;
    });

  return (
    <Droppable droppableId={`list-${id}`}>
      {(provided) => (
        <ListContainer ref={provided.innerRef}>
          <ListHeader>
            <ListTitleInput
              value={listTitle}
              placeholder={'Give your list a name!'}
              onChange={(e) => setListTitle(e.target.value)}
            />
            <IconContainer disabled={true}>
              <i className='material-icons'>more_horiz</i>
            </IconContainer>
          </ListHeader>
          {getCardUIElements()}
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

List.propTypes = {
  data: PropTypes.object.isRequired,
};

export default List;
