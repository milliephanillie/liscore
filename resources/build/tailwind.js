module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      xxs: '380px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      bg: '960px',
      lg: '1030px',
      xl: '1140px',
      xxl: '1980px',
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',
      header: '#1c1c1c',
      'bump-color': '#fff2ab',
      viber: '#7d3daf',
      whatsapp: '#199473',
      skype: '#00aff0',

      grey: {
        100: '#f6f6f6',
        200: '#efefef',
        300: '#d7d7d7',
        400: '#bcbcbc',
        500: '#959595',
        600: '#7f7f7f',
        700: '#686868',
        800: '#5e5e5e',
        900: '#4c4c4c',
        1000: '#2d2d2d',
        1100: '#262626',
        'count-label': 'rgba(45, 45, 45, .4)',
      },
      blue: {
        100: '#f3f9fd',
        200: '#e6f6ff',
        300: '#bae3ff',
        400: '#7cc4fa',
        500: '#47a3f3',
        600: '#2186eb',
        700: '#0967d2',
        800: '#0552b5',
        900: '#03449e',
        1000: '#00337d',
        1100: '#00154f',
      },
      cyan: {
        100: '#eefcfa',
        200: '#e1fcf8',
        300: '#c1fef6',
        400: '#92fdf2',
        500: '#62f4eb',
        600: '#3ae7e1',
        700: '#1cf4d4',
        800: '#0fb5ba',
        900: '#07818f',
        1000: '#05606e',
      },
      green: {
        100: '#f0fffb',
        200: '#effcf6',
        300: '#c6f7e2',
        400: '#8eedc7',
        500: '#65d6ad',
        600: '#3ebd93',
        700: '#27ab83',
        800: '#199473',
        900: '#147d64',
        1000: '#0c6b58',
        1100: '#014d40',
      },
      orange: {
        100: '#fff2ed',
        200: '#ffe8d9',
        300: '#ffd0b5',
        400: '#ffb088',
        500: '#ff9466',
        600: '#f9703e',
        700: '#f35627',
        800: '#de3a11',
        900: '#c52707',
        1000: '#ad1d07',
        1100: '#841003',
      },
      red: {
        100: '#fff4f4',
        200: '#ffe3e3',
        300: '#ffbdbd',
        400: '#ff9b9b',
        500: '#f86a6a',
        600: '#ef4e4e',
        700: '#e12d39',
        800: '#cf1124',
        900: '#ab091e',
        1000: '#8a041a',
        1100: '#610215',
      },
      yellow: {
        100: '#fff8ee',
        200: '#fffbea',
        300: '#fff3c4',
        400: '#fce588',
        500: '#fadb5f',
        600: '#f7c948',
        700: '#f0b429',
        800: '#de911d',
        900: '#cb6e17',
        1000: '#b44d12',
        1100: '#8d2b0b',
      },
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      30: '30px',
      32: '32px',
      36: '36px',
      38: '38px',
      40: '40px',
      44: '44px',
      46: '46px',
      48: '48px',
      56: '56px',
      60: '60px',
      64: '64px',
      75: '75px',
      86: '86px',
      90: '90px',
      100: '100px',
      128: '128px',
      186: '186px',
      192: '192px',
      225: '225px',
      284: '284px',
      300: '300px',
      512: '512px',
      796: '796px',
      col: '16px',
      'category-type': '416px',
      'product-thumb': '445px',
      'product-2-thumb': '260px',
      'product-2-thumb-smaller': '216px',
      'product-popup-thumb': '190px',
      'product-label-sale': '80px',
      'taxonomy-thumb': '310px',
    },
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      sm: '1px',
      default: '3px',
      lg: '6px',
      xl: '10px',
      '2xl': '20px',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(239, 239, 239, 0.1), 0 1px 2px 0 rgba(239, 239, 239, 0.06)',
      theme: '0px 3px 8px 0px rgb(239, 239, 239, 1)',
      md: '0 2px 4px 1px rgba(239, 239, 239, 0.06)',
      lg: '0 4px 6px 2px rgba(239, 239, 239, 0.05)',
      xl: '10px 10px 5px rgba(239, 239, 239, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      cluster: '2px 2px 0px 1px rgba(0, 0, 0, .1)',
      'single-menu': '0 0 20px 0 rgba(0, 0, 0, .09)',
      partners: '0 3px 8px rgba(228, 231, 235, .8)',
      none: 'none',
    },
    container: {
      center: true,
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: theme => ({
      ...theme('colors'),
      current: 'currentColor',
      white: theme('colors.white'),
      black: theme('colors.black'),
      'icon-sale': theme('colors.red.1100'),
      'icon-reset': theme('colors.green.800'),
      'icon-gift': theme('colors.green.900'),
      'filter-icon': theme('colors.grey.400'),
      'field-icon': theme('colors.grey.500'),
      'icon-search': theme('colors.grey.900'),
      theme: theme('colors.yellow.600'),
      'product-star-icon': theme('colors.yellow.900'),
      'product-place-icon': theme('colors.cyan.1000'),
      'taxonomy-icon': theme('colors.grey.800'),
      'icon-home': theme('colors.red.600'),
      'icon-tips': theme('colors.blue.400'),
      'icon-call': theme('colors.blue.700'),
      'icon-contact': theme('colors.blue.700'),
      'icon-blue-700': theme('colors.blue.700'),
    }),
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      0: '0',
      default: '1',
    },
    flexShrink: {
      0: '0',
      default: '1',
    },
    fontFamily: {
      sans: [
        'Route159',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: '10px',
      sm: '12px',
      '13': '13px',
      base: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '22px',
      '4xl': '24px',
      '5xl': '28px',
      '6xl': '32px',
      '7xl': '38px',
      'xs-shadow': '48px',
      'sm-shadow': '64px',
      shadow: '72px',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '400',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: theme => ({
      ...theme('spacing'),
      0: '0',
      auto: 'auto',
    }),
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: theme => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    maxWidth: theme => ({
      ...theme('width'),
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
    }),
    minHeight: theme => ({
      ...theme('spacing'),
      0: '0',
      full: '100%',
      screen: '100vh',
    }),
    minWidth: theme => ({
      ...theme('spacing'),
      ...theme('width'),
      0: '0',
      md: '28rem',
      full: '100%',
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    padding: theme => theme('spacing'),
    stroke: {
      current: 'currentColor',
    },
    textColor: theme => theme('colors'),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      '1/16': '6.25%',
      '2/16': '12.5%',
      '3/16': '18.75%',
      '4/16': '25%',
      '5/16': '31.25%',
      '6/16': '37.25%',
      '7/16': '43.75%',
      '8/16': '50%',
      '9/16': '56.25%',
      '10/16': '62.5%',
      '11/16': '68.75%',
      '12/16': '75%',
      '13/16': '81.25%',
      '14/16': '87.5%',
      '15/16': '93.72%',
      '30%': '30%',
      '47%': '47%',
      '48%': '48%',
      '90%': '90%',
      '25%': '25%',
      '50%': '50%',
      '75%': '75%',
      '100%': '100%',
      full: '100%',
      screen: '100vw',
      '14%': '14%',
      '86%': '86%',
      '98%': '96%',
      '225': '225px'
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      1: '1',
      2: '2',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
  },
  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
};
