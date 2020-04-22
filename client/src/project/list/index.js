import React from 'react';

const List = ({ title }) => {
  console.log('rendered');
  return(
    <h2>{ title }</h2>
  );
};

export default List;