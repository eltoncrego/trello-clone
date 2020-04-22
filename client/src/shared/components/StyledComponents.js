import styled from 'styled-components';
import { color, materials, font } from './../utils/Styles';

export const StyledList = styled.div`
  background-color: ${color.listBGColor};
  color: ${color.listTextColor};
  ${materials.cardBorderRadius}
`;

export const StyledListHeader = styled.div`
  padding: 16px;
`;

export const StyledListTitle = styled.h1`
  margin: 0;
  margin-left: 4px;
  text-transform: uppercase;
  color: ${color.listTitleColor};
  ${font.size(12)}
`;

export const StyledListInput = styled.input`
  margin: 0 16px;
  padding: 8px;
  border: 2px solid ${color.inputBG};
  outline: none;
  background-color: ${color.inputBG};
  color: ${color.text};
  ${materials.inputBorderRadius}
  transition: all 100ms ease-in-out;
  transition-property: border;
  &:focus {
    border: 2px solid ${color.brandPrimary};
  }
`;

export const StyledListButton = styled.div`
  padding: 8px 16px;
  background-color: ${color.confirm};
  color: ${color.buttonColor};
  ${materials.inputBorderRadius};
  transition: all 100ms ease-in-out;
  transition-property: background-color;
  &:hover {
    cursor: pointer;
    background-color: ${color.confirmHover};
  }
`;