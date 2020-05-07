import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListContainer, ListHeader, ListTitleInput } from './Styles';
import { IconContainer } from '../Shared';
import Card from '../Card';

const List = ({ data }) => {
  const { title, cards } = data;
  const [listTitle, setListTitle] = useState(title);
  const [childCards, setChildCards] = useState(cards);

  const getCardUIElements = () =>
    childCards.map((card, i) => {
      return <Card data={card} key={i} />;
    });

  return (
    <ListContainer>
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
    </ListContainer>
  );
};

List.propTypes = {
  data: PropTypes.object.isRequired,
};

export default List;
