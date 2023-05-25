import React from 'react'

export const Button = ({ children, type, className, onClick }) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
