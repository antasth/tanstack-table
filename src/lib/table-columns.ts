import { Cell } from '@/components/Cell'
import { ColumnDef } from '@tanstack/react-table'
import { TUser } from '@utils/fakeData'

export const columns: ColumnDef<TUser>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: Cell,
    minSize: 150,
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: Cell,
    minSize: 150,
  },
  {
    accessorKey: 'username',
    header: 'Username',
    cell: Cell,
    size: 250,
    minSize: 150,
  },
  {
    accessorKey: 'age',
    header: 'Age',
    cell: Cell,
    minSize: 50,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: Cell,
    size: 300,
    minSize: 250,
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: Cell,
    minSize: 250,
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
    cell: Cell,
    minSize: 50,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => info.getValue<string>(),
    minSize: 100,
  },
]
