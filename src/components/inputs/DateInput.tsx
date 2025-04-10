import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface IDateInputProps {
  onChange: (value: Date | null) => void
}

const DateInput: React.FC<IDateInputProps> = ({ onChange }) => {
  const [date, setDate] = useState<Date | null>(null)

  const handleDateChange = (date: Date | null) => {
    setDate(date)
    onChange(date)
  }

  return (
    <DatePicker
      selected={date}
      wrapperClassName="date-picker-wrapper"
      className="date-picker-input"
      onChange={handleDateChange}
      isClearable={true}
      portalId="root-portal"
      dateFormat="dd/MM/yyyy"
    />
  )
}

export { DateInput }
