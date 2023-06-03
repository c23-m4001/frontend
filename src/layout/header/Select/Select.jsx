import ReactSelect from 'react-select'

export const Select = ({
  className,
  label,
  defaultValue,
  options,
  onChange,
}) => {
  return (
    <div className={`relative ${className}`}>
      <label className="absolute z-10 -top-8px left-10px bg-white px-5px py-0 text-12px">
        {label}
      </label>
      <ReactSelect
        defaultValue={defaultValue}
        options={options}
        onChange={onChange}
        styles={{
          control: (provided) => ({
            ...provided,
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '2px 10px',
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
            textAlign: "left",
          }),
          singleValue: (provided) => ({
            ...provided,
            position: 'relative',
            paddingLeft: '0', // Adjust as per your requirement
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
        }}
      />
    </div>
  )
}
