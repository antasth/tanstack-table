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
        {/* HEADERS */}
        <Box className="table-row">
          {table.getHeaderGroups().flatMap((headerGroup) =>
            headerGroup.headers.map((header) => (
              <Box
                className="table-header"
                key={header.id}
                width={`${header.getSize()}px`}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </Box>
            ))
          )}
        </Box>

        {/* DATA */}
        {table.getRowModel().rows.map((row) => (
          <Box className="table-row" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box
                className="table-cell"
                key={cell.id}
                width={`${cell.column.getSize()}px`}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export { Table }
