import React, { useState } from 'react';

import { StyledCardWrapper } from './Styles';

const Card = ({ title }) => {
  const [isDragTarget, setIsDragTarget] = useState(false);
  return(
    <StyledCardWrapper isDragTarget={isDragTarget}>
      <span>{title}</span>
    </StyledCardWrapper>
  )
};

export default Card;