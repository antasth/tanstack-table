import { ICellProps } from '@/types/types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateCell = <TData, TValue>({
  getValue,
  row,
  column,
  table,
}: ICellProps<TData, TValue>) => {
  const date = getValue()
  const selectedDate = new Date(date)

  console.log(date)
  const handleChange = (date: Date | null) => {
    table.options.meta?.updateUsers(
      row.index,
      column.id as keyof TData,
      date as TData[keyof TData]
    )
  }
  return (
    <DatePicker
      selected={selectedDate}
      wrapperClassName="date-picker-wrapper"
      className="date-picker-input"
      popperClassName="date-picker-popper"
      onChange={handleChange}
    />
  )
}

export { DateCell }
