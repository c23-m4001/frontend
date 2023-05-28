import { useEffect, useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'


export const GoogleCallback = () => {
  const [code, setCode] = useState()
  const [searchParams] = useSearchParams()
    
  useEffect(() => {
    const codeParam = searchParams.get('code')
    if (codeParam) {
      setCode(codeParam)
    }
  }, [searchParams])

  if (code) {
    return (
      <Navigate
        to="/auth/login"
        replace={true}
        state={{
          code,
        }}
      />
    )
  }

  return null
}
