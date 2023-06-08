import clsx from 'clsx'

export const Input = ({
  name,
  label,
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
      <div className={`relative ${className}`}>
        <label className="absolute z-10 -top-8px left-10px bg-white px-5px py-0 text-12px">
          {label}
        </label>
        <input
          placeholder={placeholder}
          className={`block w-full border border-secondary rounded-md p-10px grow mb-0 focus:outline-primary ${className}`}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
      </div>
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
