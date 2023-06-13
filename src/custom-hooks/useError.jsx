import { useState } from 'react'

export const useError = () => {
  const [domainErrors, setDomainErrors] = useState({})
  const [error, setError] = useState(undefined)

  const resetError = () => {
    setDomainErrors({})
    setError(undefined)
  }

  const handleError = (responseData) => {
    if (responseData?.errors?.length == 0) {
      setError(responseData.message)
    }
    setDomainErrors(
      responseData.errors.reduce((prev, err) => {
        prev[err.domain] = err.message
        return prev
      }, {})
    )
  }

  return { error, domainErrors, handleError, resetError }
}
