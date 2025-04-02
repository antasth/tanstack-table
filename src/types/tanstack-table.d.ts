import '@tanstack/react-table'

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateUsers: <TKey extends keyof TData>(
      rowIndex: number,
      columnId: TKey,
      value: TData[TKey]
    ) => void
  }
  interface ColumnMeta {
    filterVariant?: 'text' | 'range' | 'select'
  }
}
