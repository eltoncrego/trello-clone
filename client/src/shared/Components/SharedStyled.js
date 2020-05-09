import styled, { css } from 'styled-components';
import { color, global, globalProperties } from '../Utils/styles';

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${(props) => (props.disabled ? `color: ${color.light};` : null)}
  ${(props) =>
    props.clickable
      ? css`
          &:hover {
            cursor: pointer;
          }
        `
      : null}
  ${global.noSelect}
`;

export const CardHeader = styled.div`
  height: 28px;
  display: grid;
  grid-template-columns: 1fr 56px;
  margin-top: 16px;
  margin-bottom: 32px;
  ${(props) => (props.width ? `width: ${props.width}` : null)}
`;

export const CardDescription = styled.div`
  margin: ${globalProperties.itemSpacing};
  ${(props) => (props.width ? `width: ${props.width}` : null)};
`;

export const CardTitle = styled.h2`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  ${global.noSelect}
`;
