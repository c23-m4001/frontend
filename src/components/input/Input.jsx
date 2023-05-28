import clsx from 'clsx'

export const Input = ({
  name,
  className,
  placeholder,
  type,
  value,
  onChange,
  error,
  disabled,
  ...rest
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        className={`block w-full border border-secondary rounded-md p-2 grow mb-0 focus:outline-primary ${className}`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <div
        className={clsx({
          'min-h-16px text-left text-xs grow mb-1 text-danger': true,
          invisible: !error,
        })}
      >
        {error}
      </div>
    </>
  )
}
