import clsx from 'clsx'

export const Checkbox = ({
  name,
  label,
  className,
  type,
  checked,
  onChange,
  error,
  disabled,
  ...rest
}) => {
  return (
    <>
      <label className="switch-item">
        <div className="label">{label}</div>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="control"
        />
      </label>
      {/* <checkbox
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
      </div> */}
    </>
  )
}
