import { USERS_COUNT } from '@/lib/constants'
import { columns } from '@/lib/table-columns'
import { Box } from '@chakra-ui/react'
import {
  ColumnFilter,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { getFakeData, TUser } from '@utils/fakeData'
import { useState } from 'react'
import { Filter } from './Filter'

function Table() {
  const [users, setUsers] = useState<TUser[]>(getFakeData(USERS_COUNT))
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([])

  console.log(users)
  const table = useReactTable({
    data: users,
    columns,
    state: {
      columnFilters,
    },
    columnResizeMode: 'onChange',
    onColumnFiltersChange: setColumnFilters,
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
  console.log('columnFilters', columnFilters)
  return (
    <Box className="container">
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
                <Filter column={header.column} />
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
