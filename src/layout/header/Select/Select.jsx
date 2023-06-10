import ReactSelect from 'react-select'

export const Select = ({
  className,
  label,
  defaultValue,
  value,
  options,
  onChange,
  ...rest
}) => {
  return (
    <div className={`relative ${className}`}>
      <label className="absolute z-10 -top-8px left-10px bg-white px-5px py-0 text-12px">
        {label}
      </label>
      <ReactSelect
        className="text-sm"
        defaultValue={defaultValue}
        value={value}
        options={options}
        onChange={onChange}
        {...rest}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#D8EEFE',
            primary: '#3DA9FC',
          },
        })}
        styles={{
          control: (provided) => ({
            ...provided,
            border: '1px solid #90B4CE',
            borderRadius: '4px',
            padding: '2px 10px',
            cursor: 'pointer',
          }),
          placeholder: (provided) => ({
            ...provided,
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: '0',
            color: '#aaa',
          }),
          valueContainer: (provided) => ({
            ...provided,
            padding: '0',
            position: 'relative',
            textAlign: 'left',
          }),
          singleValue: (provided) => ({
            ...provided,
            position: 'relative',
            paddingLeft: '0', // Adjust as per your requirement
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 11,
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected && '#D8EEFE',
            color: state.isSelected && 'black',
            '&:hover': {
              backgroundColor: '#D8EEFE',
            },
            cursor: 'pointer',
          }),
        }}
      />
    </div>
  )
}
