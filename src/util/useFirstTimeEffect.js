import { useEffect, useRef } from 'react'

const useFirstTimeEffect = (func, deps) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) func(false)
    else {
      didMount.current = true
      func(true)
    }
  }, deps)
}

export default useFirstTimeEffect
