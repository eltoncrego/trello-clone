import React from 'react';

import { StyledCardWrapper } from './Styles';

const Card = ({ title, setDraggedCard }) => {
  function onDragStart() {
    setDraggedCard({title});
  }

  return(
    <StyledCardWrapper 
      draggable
      onDragStart={onDragStart}
    >
      <span>{title}</span>
    </StyledCardWrapper>
  )
};

export default Card;