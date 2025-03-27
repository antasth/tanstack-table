import { Input } from '@chakra-ui/react'
import { CellContext } from '@tanstack/react-table'
import { useEffect, useState } from 'react'

interface ICustomCellProps<TData, TValue> {
  getValue: CellContext<TData, string>['getValue']
  row: CellContext<TData, TValue>['row']
  column: CellContext<TData, TValue>['column']
  table: CellContext<TData, TValue>['table']
}

const EditCell = <TData, TValue>({
  getValue,
  row,
  column,
  table,
}: ICustomCellProps<TData, TValue>) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  const handleBlur = () => {
    table.options.meta?.updateUsers(
      row.index,
      column.id as keyof TData,
      value as TData[keyof TData]
    )
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <Input
      value={String(value)}
      onChange={handleInputChange}
      onBlur={handleBlur}
      width="100%"
      border="none"
      textAlign="center"
      padding="5px"
      fontSize="{fontSizes.lg}"
      backgroundColor="{colors.primary}"
      textOverflow="ellipsis"
    ></Input>
  )
}

export { EditCell }
