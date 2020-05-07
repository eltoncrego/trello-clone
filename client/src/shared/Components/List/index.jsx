import React from 'react';
import PropTypes from 'prop-types';
import { ListContainer, ListHeader, ListTitle } from './Styles';
import { IconContainer } from '../Shared';

const List = ({ title, children }) => {
  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>{title}</ListTitle>
        <IconContainer disabled={true}>
          <i className='material-icons'>more_horiz</i>
        </IconContainer>
      </ListHeader>
      {children}
    </ListContainer>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
};

export default List;
