import { useState } from 'react';

export function useInputValue(initialValue) {
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