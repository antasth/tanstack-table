import { EditCell } from '@/components/EditCell'
import { StatusCell } from '@/components/StatusCell'
import { ColumnDef } from '@tanstack/react-table'
import { TUser } from '@utils/fakeData'

export const columns: ColumnDef<TUser>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: EditCell,
    minSize: 150,
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: EditCell,
    minSize: 150,
  },
  {
    accessorKey: 'username',
    header: 'Username',
    cell: EditCell,
    size: 250,
    minSize: 150,
  },
  {
    accessorKey: 'age',
    header: 'Age',
    cell: EditCell,
    size: 50,
    minSize: 50,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: EditCell,
    size: 300,
    minSize: 250,
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: EditCell,
    minSize: 250,
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
    cell: EditCell,
    size: 100,
    minSize: 100,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: StatusCell,
    minSize: 150,
  },
]
