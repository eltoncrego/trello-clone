import React from 'react';

import { StyledCardWrapper } from './Styles';

const Card = ({ cardKey, title, startDrag }) => {
  return(
    <StyledCardWrapper 
      draggable
      onDragStart={() => startDrag(cardKey)}
    >
      <span>{title}</span>
    </StyledCardWrapper>
  )
};

export default Card;