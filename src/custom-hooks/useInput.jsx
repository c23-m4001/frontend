import { useState } from 'react'

export const useInput = (defaultvalue = '') => {
  const [value, setValue] = useState(defaultvalue)

  function handleValueChange({ target }) {
    if(target.type === "checkbox") {
      setValue(target.checked)
    }else {
      setValue(target.value)
    }
  }

  return [value, handleValueChange, setValue]
}
