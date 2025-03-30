import { statuses } from '@/lib/utils/fakeData'
import { ICellProps } from '@/types/types'
import { Button, Menu, Portal } from '@chakra-ui/react'
import { StatusIcon } from './StatusIcon'

const StatusCell = <TData, TValue>({
  getValue,
  row,
  column,
  table,
}: ICellProps<TData, TValue>) => {
  const initialStatus = getValue()
  const status = statuses.find((status) => status.name === initialStatus)
  const statusColor = status?.color || 'gray'

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
          justifyContent="flex-start"
          fontSize="{fontSizes.lg}"
          backgroundColor="{colors.surface}"
          textOverflow="ellipsis"
          _focus={{
            outline: 'none',
          }}
        >
          <StatusIcon color={statusColor} />
          {initialStatus}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content width={column.getSize()}>
            {statuses.map((status) => (
              <Menu.Item
                value={status.name}
                key={status.id}
                onClick={() => handleStatusChange(status.name)}
              >
                {status.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export { StatusCell }
