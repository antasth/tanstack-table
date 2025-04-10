import { createListCollection, Portal, Select } from '@chakra-ui/react'
import React from 'react'

interface ISelectInputProps {
  onChange: (value: string) => void
}

const statuses = createListCollection({
  items: [
    { label: 'Online', value: 'online' },
    { label: 'Offline', value: 'offline' },
    { label: 'Away', value: 'away' },
    { label: 'All', value: '' },
  ],
})

const SelectInput: React.FC<ISelectInputProps> = ({ onChange }) => {
  const handleChange = (item: { value: string[] }) => {
    const [value] = item.value
    onChange(value)
  }
  return (
    <Select.Root
      collection={statuses}
      size="sm"
      onValueChange={handleChange}
      defaultValue={['']}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger
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
        >
          <Select.ValueText placeholder="All" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {statuses.items.map((status) => (
              <Select.Item item={status} key={status.value} color="surface">
                {status.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

export { SelectInput }
