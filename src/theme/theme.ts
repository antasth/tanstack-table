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
      overflow: 'hidden',
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
    '.resizer': {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '2px',
      background: '{colors.accent}',
      cursor: 'col-resize',
      userSelect: 'none',
      touchAction: 'none',
      borderRadius: '6px',
      opacity: 0,
      zIndex: 1,
      transition: 'opacity 0.2s ease',
    },
    '.resizer.isResizing': {
      background: '{colors.accent}',
      opacity: 1,
    },
    '.table-header:hover .resizer': {
      opacity: 1,
    },
  },
  theme: {
    tokens: {},
  },
})

const system = createSystem(config)

export { system }
