import { createSystem, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    'html, body': {
      backgroundColor: '#3e626b',
    },
    '.table': {
      border: '1px solid #4242424d',
      borderRadius: '10px',
    },
    '.table-row': {
      display: 'flex',
      gap: '10px',
    },
    '.table-cell': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.5rem',
      fontWeight: 'bold',
      fontSize: 'xs',
      textWrap: 'nowrap',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const system = createSystem(config)

export { system }
