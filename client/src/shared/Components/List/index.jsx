import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListContainer, ListHeader, ListTitleInput } from './Styles';
import { IconContainer } from '../Shared';

const List = ({ placeholder, children }) => {
  const [title, setTitle] = useState('');

  return (
    <ListContainer>
      <ListHeader>
        <ListTitleInput value={title} placeholder={placeholder} onChange={e => setTitle(e.target.value)}/>
        <IconContainer disabled={true}>
          <i className='material-icons'>more_horiz</i>
        </IconContainer>
      </ListHeader>
      {children}
    </ListContainer>
  );
};

List.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default List;
