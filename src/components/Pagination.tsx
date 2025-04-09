import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react'
import { PaginationState, Updater } from '@tanstack/react-table'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ITablePaginationProps {
  pageSize: number
  count: number
  next: () => void
  prev: () => void
  setPage: (updater: Updater<PaginationState>) => void
}

const TablePagination: React.FC<ITablePaginationProps> = ({
  pageSize,
  count,
  next,
  prev,
  setPage,
}) => {
  return (
    <Pagination.Root
      count={count}
      pageSize={pageSize}
      defaultPage={1}
      className="pagination"
    >
      <ButtonGroup variant="solid" size="xs" colorPalette="primary">
        <Pagination.PrevTrigger asChild onClick={prev}>
          <IconButton>
            <ChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton
              variant={{ base: 'solid', _selected: 'surface' }}
              onClick={() => setPage({ pageIndex: page.value - 1, pageSize })}
            >
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild onClick={next}>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  )
}

export { TablePagination }
