import React from 'react';
import { StyledPageError, StyledPageErrorCard, StyledPageErrorHeader, StyledErrorTitle} from './PageErrorStyles';
import { StyledIcon } from '../StyledComponents';
import { color } from '../../Utils/SharedStyles';

const PageError = () => (
  <StyledPageError>
    <StyledPageErrorCard>
      <StyledPageErrorHeader>
        <StyledIcon className='material-icons md-24' color={color.primary}>
          error
        </StyledIcon>
        <StyledErrorTitle>This page doesn't exist</StyledErrorTitle>
      </StyledPageErrorHeader>
      If you think this is a mistake please let me know.
    </StyledPageErrorCard>
  </StyledPageError>
);

export default PageError;