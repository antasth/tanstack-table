import { CellContext } from '@tanstack/react-table'

export interface ICellProps<TData, TValue> {
  getValue: CellContext<TData, string>['getValue']
  row: CellContext<TData, TValue>['row']
  column: CellContext<TData, TValue>['column']
  table: CellContext<TData, TValue>['table']
}
