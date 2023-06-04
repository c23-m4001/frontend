import clsx from 'clsx'
import React from 'react'
import './index.css'

export const Button = ({
  children,
  type,
  className,
  onClick,
  disabled,
  isLoading,
  ...rest
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx({
        [className]: true,
        'btn-loading': isLoading,
      })}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
