import React from 'react';
import { StyledPageError, StyledPageErrorCard, StyledPageErrorHeader, StyledErrorTitle} from './PageErrorStyles';
import { StyledIcon } from '../../Shared/Components/StyledComponents';
import { color } from '../../Shared/Utils/SharedStyles';
import { ERROR } from '../../Shared/Constants/Messages';

const PageError = () => (
  <StyledPageError>
    <StyledPageErrorCard>
      <StyledPageErrorHeader>
        <StyledIcon className='material-icons md-24' color={color.primary}>
          {ERROR.ICON}
        </StyledIcon>
        <StyledErrorTitle>{ERROR.TITLE}</StyledErrorTitle>
      </StyledPageErrorHeader>
      {ERROR.DESC}
    </StyledPageErrorCard>
  </StyledPageError>
);

export default PageError;