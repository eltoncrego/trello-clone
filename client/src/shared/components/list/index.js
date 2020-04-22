import React from 'react';
import { StyledList, StyledListTitle, StyledListHeader} from './Styles';

const List = ({ title }) => {
  return(
    <StyledList>
      <StyledListHeader>
        <StyledListTitle>
            { title }
        </StyledListTitle>
      </StyledListHeader>
    </StyledList>
  );
};

export default List;