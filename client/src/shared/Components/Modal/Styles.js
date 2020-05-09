import styled from 'styled-components';
import { global, color, globalProperties, zIndexes } from '../../Utils/styles';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndexes.mid};
  ${global.bgOverlay}
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalHeader = styled.div`
  margin: 0 ${globalProperties.itemSpacing};
`;

export const ModalContainer = styled.div`
  background-color: ${color.bgLight};
  ${global.borderRadius};
  z-index: ${zIndexes.upper};
  padding: ${globalProperties.itemSpacing};
`;
