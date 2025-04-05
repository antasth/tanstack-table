import { DebouncedInput, RangeInput, SelectInput } from '@components'
import { Column } from '@tanstack/react-table'

interface IFilterProps<TData extends object> {
  column: Column<TData, unknown>
}

function Filter<TData extends object>({ column }: IFilterProps<TData>) {
  const { filterVariant } = column.columnDef.meta ?? {}

  if (filterVariant === 'select') {
    return <SelectInput onChange={(value) => column.setFilterValue(value)} />
  }
  if (filterVariant === 'range') {
    return (
      <RangeInput
        onMinChange={(value: number) =>
          column.setFilterValue((old: [number, number]) => [value, old?.[1]])
        }
        onMaxChange={(value: number) =>
          column.setFilterValue((old: [number, number]) => [old?.[0], value])
        }
      />
    )
  }
  return <DebouncedInput onChange={column.setFilterValue} />
}

export { Filter }
