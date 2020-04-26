import { useState, useEffect } from 'react';

export const useFormInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
};

export const useFormStatus = (statusDV, errorTextDV) => {
  const [status, setStatus] = useState(statusDV);
  const [errorText, setErrorText] = useState(errorTextDV);
  useEffect(() => {
    setStatus(statusDV);
  }, [statusDV]);
  useEffect(() => {
    setErrorText(errorTextDV);
  }, [errorTextDV]);
  function updateStatus(status, errorText) {
    setStatus(status);
    setErrorText(errorText);
  }
  return {
    status,
    errorText,
    updateStatus
  }
}