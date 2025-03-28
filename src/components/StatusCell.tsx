import { statuses } from '@/lib/utils/fakeData'
import { ICellProps } from '@/types/types'
import { Button, Menu, Portal } from '@chakra-ui/react'

const StatusCell = <TData, TValue>({
  getValue,
  row,
  column,
  table,
}: ICellProps<TData, TValue>) => {
  const initialStatus = getValue()

  const handleStatusChange = (userStatus: string) => {
    table.options.meta?.updateUsers(
      row.index,
      column.id as keyof TData,
      userStatus as TData[keyof TData]
    )
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
          {initialStatus}
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
