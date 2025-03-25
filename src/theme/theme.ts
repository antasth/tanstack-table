import { createSystem, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    'html, body': {
      backgroundColor: '{colors.primary}',
    },
    '.table': {
      display: 'block',
      border: '1px solid {colors.borderLight}',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    '.table-row': {
      display: 'flex',
      width: '100%',
      border: '1px solid {colors.borderLight}',
    },
    '.table-header, .table-cell': {
      flex: '1 0 auto',
      minWidth: 0,
      padding: '0.5rem',
      borderRight: '1px solid {colors.borderLight}',
      '&:last-child': {
        borderRight: 'none',
      },
    },
    '.table-header': {
      position: 'relative',
      padding: '0.5rem',
      fontWeight: 'bold',
      fontSize: 'xs',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    '.table-cell': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'fit-content',
      textWrap: 'wrap',
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: { value: '#232D3F' },
        secondary: { value: '#005B41' },
        accent: { value: '#008170' },
        borderLight: { value: '#faf0e642' },
      },
    },
  },
})

const system = createSystem(config)

export { system }
