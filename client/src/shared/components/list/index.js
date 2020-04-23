import React from 'react';
import { StyledList, StyledListTitle, StyledListHeader} from './Styles';
import { StyledInput } from '../StyledComponents';
import { MESSAGES } from './../../utils/Messages';
import { color } from '../../utils/Styles';
import Card from '../card';
import { useInputValue } from '../../utils/CustomHooks';

const List = ({ listKey, title, cards, draggedCard, setDraggedCard, setListKeyToRemoveCardFrom, dropCard }) => {
  const newCardInputValue = useInputValue('');

  function dragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  function drop(event) {
    event.stopPropagation();
    addANewCard(draggedCard);
    dropCard();
  }
  
  function addANewCard(card) {
    cards.push(card);
    newCardInputValue.clear();
  }

  function handleDraggedCard(key) {
    setListKeyToRemoveCardFrom([listKey, key])
    setDraggedCard(cards.slice(key)[0]);
  };

  function handleKeyPress(event) {
    if(event.key === 'Enter') {
      addANewCard({title: newCardInputValue.value});
    }
  }
  
  function getCards() {
    return(cards.map((card, i) => (
      <Card 
        key={i} 
        cardKey={i} 
        title={card.title} 
        startDrag={handleDraggedCard}
      />
    )));
  }

  return(
    <StyledList 
      onDragOver={dragOver} 
      onDrop={drop}
    >
      <StyledListHeader>
        <StyledListTitle>
            { title }
        </StyledListTitle>
      </StyledListHeader>
      {getCards()}
      <StyledInput 
        placeholder={MESSAGES.ADD_A_CARD} 
        margins={'0 16px 16px 16px'} 
        bgOnNonActive={color.listBG}
        onKeyPress={handleKeyPress}
        {...newCardInputValue}/>
    </StyledList>
  );
};

export default List;