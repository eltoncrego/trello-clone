import React, { useState } from 'react';
import List from '../../Shared/Components/List';
import { testLists } from '../../Shared/Constants/testData';
import { BoardContainer } from './Styles';

const Board = () => {
  const [lists, setLists] = useState(testLists);

  const getListUIElements = () =>
    lists.map((list, i) => <List data={list} key={i} />);

  return <BoardContainer>{getListUIElements()}</BoardContainer>;
};

export default Board;
