import { ICellProps } from '@/types/types'
import { Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const EditCell = <TData, TValue>({
  getValue,
  row,
  column,
  table,
}: ICellProps<TData, TValue>) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  const updateUsers = () => {
    table.options.meta?.updateUsers(
      row.index,
      column.id as keyof TData,
      value as TData[keyof TData]
    )
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateUsers()
      e.currentTarget.blur()
    }
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
      onBlur={updateUsers}
      onKeyDown={handleKeyDown}
      variant="outline"
      padding="2px"
      border="none"
      textAlign="center"
      fontSize="{fontSizes.lg}"
      backgroundColor="{colors.surface}"
      textOverflow="ellipsis"
      _focus={{
        outline: '2px solid',
        outlineColor: 'accent',
        boxShadow: 'none',
      }}
    ></Input>
  )
}

export { EditCell }
