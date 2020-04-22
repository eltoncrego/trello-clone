import styled from 'styled-components';
import { font } from '../../shared/utils/Styles';

export const StyledBoardWrapper = styled.div`
  margin-left: 64px;
  flex: 1;
  padding: 16px 0;
`;

export const StyledHeader = styled.div`
  padding: 16px;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  line-height: 24px;
  ${font.size(24)}
`;

export const StyledListContainer = styled.div`
  margin-top: 16px;
  display: flex;
`;