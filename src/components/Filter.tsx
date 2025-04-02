import { Column } from '@tanstack/react-table'
import { DebouncedInput } from './DebouncedInput'
import { SelectInput } from './SelectInput'

interface IFilterProps<TData extends object> {
  column: Column<TData, unknown>
}

function Filter<TData extends object>({ column }: IFilterProps<TData>) {
  const { filterVariant } = column.columnDef.meta ?? {}

  if (filterVariant === 'select') {
    return <SelectInput onChange={(value) => column.setFilterValue(value)} />
  }
  return <DebouncedInput onChange={column.setFilterValue} />
}

export { Filter }
