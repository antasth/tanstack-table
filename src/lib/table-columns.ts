import { DateCell, EditCell, StatusCell } from '@/components'
import { ColumnDef } from '@tanstack/react-table'
import { TUser } from '@utils/fakeData'

export const columns: ColumnDef<TUser>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: EditCell,
    minSize: 150,
    meta: {
      filterVariant: 'text',
    },
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: EditCell,
    minSize: 150,
    meta: {
      filterVariant: 'text',
    },
  },
  {
    accessorKey: 'age',
    header: 'Age',
    cell: EditCell,
    size: 50,
    minSize: 50,
    meta: {
      filterVariant: 'range',
    },
  },
  {
    accessorKey: 'username',
    header: 'Username',
    cell: EditCell,
    size: 250,
    minSize: 150,
    meta: {
      filterVariant: 'text',
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'created At',
    cell: DateCell,
    minSize: 150,
    meta: {
      filterVariant: 'text',
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: EditCell,
    size: 300,
    minSize: 250,
    meta: {
      filterVariant: 'text',
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: StatusCell,
    minSize: 150,
    meta: {
      filterVariant: 'select',
    },
  },
]
