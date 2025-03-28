import { statuses } from '@/lib/utils/fakeData'
import { ICellProps } from '@/types/types'
import { Button, Menu, Portal } from '@chakra-ui/react'
import { useState } from 'react'

const StatusCell = <TData, TValue>({
  getValue,
  row,
  column,
  table,
}: ICellProps<TData, TValue>) => {
  const initialValue = getValue()
  const [status, setStatus] = useState(initialValue)

  const handleStatusChange = (userStatus: string) => {
    table.options.meta?.updateUsers(
      row.index,
      column.id as keyof TData,
      userStatus as TData[keyof TData]
    )
    setStatus(userStatus)
  }

  return (
    <Menu.Root variant="subtle" lazyMount>
      <Menu.Trigger asChild width="100%">
        <Button
          border="none"
          textAlign="center"
          fontSize="{fontSizes.lg}"
          backgroundColor="{colors.surface}"
          textOverflow="ellipsis"
          _focus={{
            outline: 'none',
          }}
        >
          {status}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content width={column.getSize()}>
            {statuses.map((status, i) => (
              <Menu.Item
                value={status}
                key={i}
                onClick={() => handleStatusChange(status)}
              >
                {status}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export { StatusCell }
