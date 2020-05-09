import styled, { css } from 'styled-components';
import { color, global, globalProperties, font } from '../Utils/styles';

export const HeaderIconContainer = styled.div`
  display: flex;
  align-items: flex-start;
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
  display: grid;
  grid-template-columns: 1fr 56px;
  margin-top: 16px;
  margin-bottom: 32px;
  ${(props) => (props.width ? `width: ${props.width};` : null)}
  ${(props) => props.hasSubtitle ? null : 'height: 28px;'}
`;

export const CardDescription = styled.div`
  margin: ${globalProperties.itemSpacing};
  ${(props) => (props.width ? `width: ${props.width}` : null)};
`;

export const ItemTitleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${global.noSelect}
`;

export const EditItemTitle = styled.input`
  font-size: 24px;
  color: ${color.text};
  ${font.bold}
  border: none;
`;

export const ItemSubtitle = styled.span`
  color: ${color.secondaryText}
`;
