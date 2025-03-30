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
import { USERS_COUNT } from '@/lib/constants'

function Table() {
  const [users, setUsers] = useState<TUser[]>(getFakeData(USERS_COUNT))

  console.log(users)
  const table = useReactTable({
    data: users,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      updateUsers: (rowIndex, columnId, value) =>
        setUsers((prev) =>
          prev.map((row, index) =>
            index === rowIndex ? { ...prev[rowIndex], [columnId]: value } : row
          )
        ),
    },
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
                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${
                    header.column.getIsResizing() ? 'isResizing' : ''
                  }`}
                ></Box>
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
