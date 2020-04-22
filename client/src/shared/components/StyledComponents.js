import styled from 'styled-components';
import { color, materials } from './../utils/Styles';

export const StyledInput = styled.input`
  padding: 8px;
  border: 2px solid ${props => props.bgOnNonActive || color.inputBG};
  outline: none;
  background-color: ${props => props.bgOnNonActive || color.inputBG};
  color: ${color.text};
  margin: ${props => props.margins};
  ${materials.inputBorderRadius}
  transition: all 100ms ease-in-out;
  transition-property: border, background-color;
  &:focus {
    border: 2px solid ${color.brandPrimary};
    background-color: ${color.inputBG};
  }
`;

export const SideButton = styled.div`
  padding: 8px 16px;
  margin-left: 4px;
  display: flex;
  align-items: center;
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