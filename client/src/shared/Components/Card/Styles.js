import styled from 'styled-components';
import { color, global, globalProperties } from '../../styles';

export const CardContainer = styled.div`
  background-color: ${color.bgLight};
  border: 1px solid ${color.light};
  margin: ${globalProperties.itemSpacing} 0;
  padding: ${globalProperties.itemSpacing};
  ${global.borderRadius}
`;