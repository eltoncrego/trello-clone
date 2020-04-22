import React, { useState } from 'react';
import { StyledList, StyledListTitle, StyledListHeader} from './Styles';
import { StyledInput } from '../StyledComponents';
import { MESSAGES } from './../../utils/Messages';
import { color } from '../../utils/Styles';
import Card from '../card';

const List = ({ title, cards }) => {
  const [cardsArr, setCardsArr] = useState(cards || []);
  const newCardInputValue = useInputValue('');
  
  function addANewCard() {
    const newCard = {title: newCardInputValue.value};
    newCardInputValue.clear();
    setCardsArr([...cardsArr, newCard]);
  }

  return(
    <StyledList>
      <StyledListHeader>
        <StyledListTitle>
            { title }
        </StyledListTitle>
      </StyledListHeader>
      {cardsArr && cardsArr.length ? cardsArr.map((card, i) => {
        return(<Card key={i} title={card.title}/>)
      }): null}
      <StyledInput 
        placeholder={MESSAGES.ADD_A_CARD} 
        margins={'0 16px 16px 16px'} 
        bgOnNonActive={color.listBGColor}
        onKeyPress={(e) => e.key === 'Enter' ? addANewCard() : null}
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