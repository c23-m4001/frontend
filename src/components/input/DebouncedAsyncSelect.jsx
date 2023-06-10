import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { Select } from '../../layout/header/Select/Select'

export const DebouncedAsyncSelect = ({
  className,
  label,
  defaultValue,
  value,
  onChange,
  loadOptions,
}) => {
  const [inputValue, setInputValue] = useState(undefined)
  const [options, setOptions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const debouncedLoadOptions = debounce((inputValue) => {
      setIsLoading(true)
      loadOptions(inputValue).then((loadedOptions) => {
        setOptions(loadedOptions)
        setIsLoading(false)
      })
    }, 500)

    debouncedLoadOptions(inputValue)

    return () => {
      debouncedLoadOptions.cancel()
    }
  }, [inputValue, loadOptions])

  const handleInputChange = (newValue) => {
    if (!newValue) {
      newValue = undefined
    }
    setInputValue(newValue)
  }

  useEffect(() => {
    handleInputChange(inputValue)
  }, [])

  return (
    <Select
      isClearable
      isSearchable
      className={className}
      label={label}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      options={options}
      isLoading={isLoading}
    />
  )
}
