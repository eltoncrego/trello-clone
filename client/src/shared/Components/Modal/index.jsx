import React from 'react';
import { Overlay, ModalContainer, ModalWrapper, ModalHeader } from './Styles';
import {
  CardTitle,
  CardHeader,
  CardDescription,
  IconContainer,
} from '../SharedStyled';

const Modal = ({ data, onClose }) => {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <ModalWrapper>
      <Overlay onClick={handleClose} />
      <ModalContainer>
        <ModalHeader>
          <CardHeader width='50vw'>
            <CardTitle>{data.title}</CardTitle>
            <IconContainer clickable={true} onClick={handleClose}>
              <i className='material-icons'>close</i>
            </IconContainer>
          </CardHeader>
        </ModalHeader>
        <CardDescription width='50vw'>{data.description}</CardDescription>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
