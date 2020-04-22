import React from 'react';
import { StyledList, StyledListTitle, StyledListHeader} from '../../shared/components/StyledComponents';

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