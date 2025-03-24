import { ColumnDef } from '@tanstack/react-table'
import { TUser } from '@utils/fakeData'

export const columns: ColumnDef<TUser>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'username',
    header: 'Username',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'age',
    header: 'Age',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'job',
    header: 'Job',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => info.getValue<string>(),
  },
]
