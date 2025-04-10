import { MAX_AGE, MIN_AGE } from '@/lib/constants'
import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CounterInput } from './CounterInput'

interface IRangeInputProps {
  onMinChange: (value: number) => void
  onMaxChange: (value: number) => void
}

const RangeInput: React.FC<IRangeInputProps> = ({
  onMinChange,
  onMaxChange,
}) => {
  const [minValue, setMinValue] = useState(18)
  const [maxValue, setMaxValue] = useState(65)

  const handleMinValueChange = (value: number) => {
    setMinValue(value)
    onMinChange(value)
  }
  const handleMaxValueChange = (value: number) => {
    setMaxValue(value)
    onMaxChange(value)
  }

  return (
    <Box display="flex" gap="1">
      <CounterInput
        min={MIN_AGE}
        max={maxValue}
        defaultValue={MIN_AGE}
        onChange={handleMinValueChange}
      />
      <CounterInput
        min={minValue}
        max={MAX_AGE}
        defaultValue={MAX_AGE}
        onChange={handleMaxValueChange}
      />
    </Box>
  )
}

export { RangeInput }
