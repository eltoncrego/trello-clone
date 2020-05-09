import React, { useState } from 'react';
import { Overlay, ModalContainer, ModalWrapper, ModalHeader } from './Styles';
import {
  EditItemTitle,
  CardHeader,
  CardDescription,
  HeaderIconContainer,
  ItemSubtitle,
  ItemTitleSubtitleContainer,
} from '../../SharedStyled';

const Modal = ({ data, list, onClose, onSubmit }) => {
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);

  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <ModalWrapper>
      <Overlay onClick={handleClose} />
      <ModalContainer>
        <ModalHeader>
          <CardHeader width='50vw' hasSubtitle={true}>
            <ItemTitleSubtitleContainer>
              <EditItemTitle
                title={`"${title}" Click to edit.`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => onSubmit && onSubmit(title)}
                onKeyDown={(e) =>
                  e.key === 'Enter' ? onSubmit && onSubmit(title) : null
                }
              />
              <ItemSubtitle>Card in {list}</ItemSubtitle>
            </ItemTitleSubtitleContainer>
            <HeaderIconContainer clickable={true} onClick={handleClose}>
              <i className='material-icons'>close</i>
            </HeaderIconContainer>
          </CardHeader>
        </ModalHeader>
        <CardDescription width='50vw'>{description}</CardDescription>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
