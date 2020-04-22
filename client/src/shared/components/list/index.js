import React, { useState } from 'react';
import { StyledList, StyledListTitle, StyledListHeader} from './Styles';
import { StyledInput } from '../StyledComponents';
import { MESSAGES } from './../../utils/Messages';
import { color } from '../../utils/Styles';
import Card from '../card';

const List = ({ title, cards, draggedCard, setDraggedCard }) => {
  const newCardInputValue = useInputValue('');
  
  function addANewCard(card) {
    cards.push(card);
    newCardInputValue.clear();
  }

  return(
    <StyledList 
      onDragOver={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }} 
      onDrop={(event) => {
        event.stopPropagation();
        addANewCard(draggedCard);
        setDraggedCard({});
      }}
    >
      <StyledListHeader>
        <StyledListTitle>
            { title }
        </StyledListTitle>
      </StyledListHeader>
      {cards.map((card, i) => {
        return(<Card key={i} title={card.title} setDraggedCard={setDraggedCard}/>)
      })}
      <StyledInput 
        placeholder={MESSAGES.ADD_A_CARD} 
        margins={'0 16px 16px 16px'} 
        bgOnNonActive={color.listBGColor}
        onKeyPress={(e) => e.key === 'Enter' ? addANewCard({title: newCardInputValue.value}) : null}
        {...newCardInputValue}/>
    </StyledList>
  );
};

function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  function clear() {
    setValue('');
  }
  return {
    value,
    onChange: handleChange,
    clear
  };
}

export default List;