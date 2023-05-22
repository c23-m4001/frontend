import { useState } from "react";

export const useInput = (defaultvalue = '') => {
  const [value, setValue] = useState(defaultvalue);

  function handleValueChange({ target }) {
    setValue(target.value);
  }

  return [value, handleValueChange, setValue];
};
