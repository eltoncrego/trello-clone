import React, { useState } from 'react';
import List from '../Shared/Components/List';
import Card from '../Shared/Components/Card';
import { testCards } from '../Shared/Constants/testData';

const Board = () => {
  const [cards, setCards] = useState(testCards);

  let getCardUIElements = () =>
    cards.map((card, i) => {
      return <Card data={card} key={i} />;
    });

  return (
    <List placeholder='Give your list a name!'>{getCardUIElements()}</List>
  );
};

export default Board;
