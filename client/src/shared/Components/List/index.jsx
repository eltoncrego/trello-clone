import React from 'react';
import PropTypes from 'prop-types';
import { ListContainer } from './Styles';

const List = ({ title, children }) => {
  return <ListContainer>
    <h2>{title}</h2>
    {children}
    </ListContainer>;
};

List.propTypes = {
  title: PropTypes.string.isRequired
};

export default List;
