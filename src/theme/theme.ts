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
    '.container': {
      display: 'flex',
      flexDirection: 'column',
      gapY: '1rem',
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      padding: '0.5rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      background: '{colors.accent}',
    },
    '.table-header-title': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },
    '.table-header-icon': {
      cursor: 'pointer',
    },
    '.table-cell': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'fit-content',
      padding: '2px',
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
    '.date-picker-wrapper': {
      width: '100%',
    },
    '.date-picker-ceil, .date-picker-input': {
      width: '100%',
      padding: '8px 12px',
      textAlign: 'center',
      background: '{colors.surface}',
    },
    '.date-picker-ceil': {
      borderRadius: '4px',
      border: 'none',
      '&:focus': {
        outline: '2px solid {colors.accent}',
      },
    },
    '.date-picker-input': {
      borderRadius: '6px',
      height: '100%',
      border: '2px solid {colors.borderLight}',

      '&:hover': {
        borderColor: '{accent}',
      },
      '&:focus': {
        cursor: 'pointer',
        outline: '1px solid {colors.surface}',
        borderColor: '{accent}',
        boxShadow: `0 0 0 1px var(--chakra-colors-accent)`,
      },
    },
    '.pagination': {
      alignSelf: 'start',
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

        // Статусы
        status: {
          online: { value: '#27AE60' },
          offline: { value: '#E74C3C' },
          away: { value: '#F39C12' },
        },
      },
    },
  },
})

const config = mergeConfigs(defaultConfig, customConfig)
const system = createSystem(config)

export { system }
