import { INPUT_DEBOUNCE } from '@/lib/constants'
import { Box, Input, InputGroup } from '@chakra-ui/react'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface IDebouncedInputProps {
  debounce?: number
  onChange: (value: string | number) => void
}

const DebouncedInput: React.FC<IDebouncedInputProps> = ({
  onChange,
  debounce = INPUT_DEBOUNCE,
  ...props
}: IDebouncedInputProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => {
      clearTimeout(timeout)
    }
  }, [value, debounce, onChange])

  return (
    <Box>
      <InputGroup startElement={<Search />}>
        <Input
          {...props}
          type="text"
          borderRadius="6px"
          width={'100%'}
          bg="surface"
          color="text"
          border="2px solid {colors.borderLight}"
          _hover={{
            borderColor: 'accent',
          }}
          _focus={{
            borderColor: 'accent',
            boxShadow: `0 0 0 1px var(--chakra-colors-accent)`,
          }}
          _placeholder={{
            color: 'textSecondary',
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputGroup>
    </Box>
  )
}

export { DebouncedInput }
