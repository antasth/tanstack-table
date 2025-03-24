import { getFakeData, TUser } from '@/lib/utils/fakeData'
import { Box } from '@chakra-ui/react'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import { columns } from '../lib/table-columns'

function Table() {
  const [users, setUsers] = useState<TUser[]>(getFakeData(5))

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <Box>
      <Box className="table">
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="table-row" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="table-cell" key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export { Table }
