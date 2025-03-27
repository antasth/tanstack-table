import { Input } from '@chakra-ui/react'
import { useState } from 'react'

const Cell = ({ getValue }: { getValue: () => unknown }) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  return (
    <Input
      value={String(value)}
      onChange={handleInputChange}
      width="100%"
      border="none"
      textAlign="center"
      padding="5px"
      fontSize="{fontSizes.lg}"
      backgroundColor="{colors.primary}"
      textOverflow="ellipsis"
    ></Input>
  )
}

export { Cell }
