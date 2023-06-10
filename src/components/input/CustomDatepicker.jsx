import React from 'react'
import DatePicker from 'react-datepicker'

export const CustomDatePicker = ({ label, selected, onChange }) => {
  return (
    <div className="custom-datepicker">
      <label className="absolute z-10 -top-8px left-10px bg-white px-5px py-0 text-12px">
        {label}
      </label>
      <DatePicker
        selected={selected}
        onChange={onChange}
        className="custom-datepicker-input" // Custom CSS class for DatePicker input
        wrapperClassName="custom-datepicker-wrapper" // Custom CSS class for DatePicker wrapper
      />
    </div>
  )
}
