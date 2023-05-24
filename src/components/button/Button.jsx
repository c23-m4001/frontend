import React from 'react'

export const Button = ({ btnName, btnType, className, onClick }) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={btnType}
      className={className}
      onClick={onClick}
    >
      {btnName}
    </button>
  )
}
