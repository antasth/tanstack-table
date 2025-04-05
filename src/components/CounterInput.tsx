import { NumberInput } from '@chakra-ui/react'
import React from 'react'

interface INumberInputProps {
  defaultValue: number
  max: number
  min: number
  onChange: (value: number) => void
}
const CounterInput: React.FC<INumberInputProps> = ({
  defaultValue,
  max,
  min,
  onChange,
}) => {
  return (
    <NumberInput.Root
      defaultValue={String(defaultValue)}
      min={min}
      max={max}
      size="sm"
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
      onValueChange={(e) => onChange(Number(e.value))}
    >
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}

export { CounterInput }
