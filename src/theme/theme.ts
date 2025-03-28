import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from '@chakra-ui/react'

const customConfig = defineConfig({
  globalCss: {
    'html, body': {
      backgroundColor: '{colors.primary}',
    },
    '.table': {
      display: 'block',
      border: '1px solid {colors.borderLight}',
      borderRadius: '10px',
      fontSize: '{fontSizes.md}',
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
      background: '{colors.accent}',
    },
    '.table-cell': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'fit-content',
      padding: 0,
      height: 'full',
      textWrap: 'wrap',
    },
    '.resizer': {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '5px',
      background: '{colors.warning}',
      cursor: 'col-resize',
      userSelect: 'none',
      touchAction: 'none',
      borderRadius: '6px',
      opacity: 0,
      zIndex: 1,
      transition: 'opacity 0.2s ease',
    },
    '.resizer.isResizing': {
      background: '{colors.warning}',
      opacity: 1,
    },
    '.table-header:hover .resizer': {
      opacity: 1,
    },
  },
  theme: {
    tokens: {
      fontSizes: {
        xs: { value: '0.75rem' }, // 12px
        sm: { value: '0.875rem' }, // 14px
        md: { value: '1rem' }, // 16px (базовый)
        lg: { value: '1.125rem' }, // 18px
        xl: { value: '1.25rem' }, // 20px
        '2xl': { value: '1.5rem' }, // 24px
        '3xl': { value: '1.875rem' }, // 30px
        '4xl': { value: '2.25rem' }, // 36px
        '5xl': { value: '3rem' }, // 48px
        '6xl': { value: '3.75rem' }, // 60px
      },
      colors: {
        // Основные цвета
        primary: { value: '#232D3F' },
        secondary: { value: '#2C3E50' },
        accent: { value: '#3498DB' },

        // Дополнительные цвета
        success: { value: '#27AE60' },
        warning: { value: '#F39C12' },
        danger: { value: '#E74C3C' },
        info: { value: '#2980B9' },

        // Текст и фон
        text: { value: '#ECF0F1' },
        textSecondary: { value: '#BDC3C7' },
        background: { value: '#1A202C' },
        surface: { value: '#2D3748' },

        // Границы
        borderLight: { value: '#4A5568' },
        borderDark: { value: '#2D3748' },

        // Специальные
        highlight: { value: '#9B59B6' },
      },
    },
  },
})

const config = mergeConfigs(defaultConfig, customConfig)
const system = createSystem(config)

export { system }
