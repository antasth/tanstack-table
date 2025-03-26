import { ColumnDef } from '@tanstack/react-table'
import { TUser } from '@utils/fakeData'

export const columns: ColumnDef<TUser>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: (info) => info.getValue<string>(),
    size: 100,
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: (info) => info.getValue<string>(),
    size: 100,
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
    size: 40,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: (info) => info.getValue<string>(),
    size: 250,
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: (info) => info.getValue<string>(),
  },
  {
    accessorKey: 'address',
    header: 'Address',
    cell: (info) => {
      const address = info.getValue<{ city: string; street: string }>()
      return `${address.city}, ${address.street}`
    },
  },
  {
    accessorKey: 'job',
    header: 'Job',
    cell: (info) => {
      const job = info.getValue<{ position: string; company: string }>()
      return `${job.company}, ${job.position}`
    },
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
    cell: (info) => info.getValue<string>(),
    size: 50,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => info.getValue<string>(),
  },
]
