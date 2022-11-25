import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material'

const round = (value: number): number => Math.round(value * 1e5) / 1e5
const pxToRem = (size: number): string => `${size / 16}rem`
const buildVariant = (
  fontWeight: number,
  size: number,
  lineHeight: number,
  letterSpacing?: number
) => ({
  fontWeight,
  fontSize: pxToRem(size),
  lineHeight: `${round(lineHeight / size)}`,
  ...(letterSpacing !== undefined
    ? { letterSpacing: `${round(letterSpacing / size)}em` }
    : {}),
})

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xsm: true
    xxl: true
  }

  // interface TypographyVariants {
  //   small: React.CSSProperties;
  // }

  // // allow configuration using `createTheme`
  // interface TypographyVariantsOptions {
  //   small?: React.CSSProperties;
  // }
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    default: string
    paper: string
    primary: string
    secondary: string
    third: string
    dialog: string
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
    h2: true
    h3: true
    h4: false
    h5: false
    h6: false
    subtitle1: true
    subtitle2: false
    caption: false
    body1: true
    body2: true
    button: true
  }
}

export function getThemeConfig(): ThemeOptions {
  const theme = createTheme()

  return {
    breakpoints: {
      keys: ['xs', 'xsm', 'sm', 'md', 'lg', 'xl', 'xxl'],
      values: {
        xs: 0,
        xsm: 520,
        sm: 760,
        md: 960,
        lg: 1280,
        xl: 1440,
        xxl: 1800,
      },
    },
    palette: {
      mode: 'light',
      background: {
        default: '#FFFFFF',
        paper: '#FFFFFF',
        primary: '#FFFFFF',
        secondary: '#F5FCFF',
        third: '#00060D',
        dialog: '#131b22',
      },
      primary: {
        light: '#89CDFF',
        main: '#1C8CF3',
        dark: '#0059AC',
      },
      secondary: {
        main: '#9EBDD7',
        light: '#FFFFFF',
      },
      info: {
        main: '#7994C1',
        light: '#D2E0F7',
      },
      text: {
        primary: '#151C22',
        secondary: '#034C91',
      },
      action: {
        hoverOpacity: 0.14,
        hover: 'rgba(255, 255, 255, 0.05)',
      },
      divider: '#002a52',
    },
    typography: {
      h1: buildVariant(700, 56, 76, 0),
      h2: buildVariant(300, 50, 64, 0),
      h3: buildVariant(500, 33, 39),
      subtitle1: buildVariant(500, 20, 24, 0),
      body1: buildVariant(400, 16, 19, 0),
      body2: buildVariant(400, 14, 20, 0),
      button: {
        ...buildVariant(500, 14, 19, 0),
        textTransform: 'none',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '.babapro': {
            fontFamily: 'babapro, san-serif !important',
          },
          '.roboto-mono': {
            // eslint-disable-next-line quotes
            fontFamily: "'Roboto Mono', monospace !important",
          },
          // disable arrow from input number
          // Chrome, Safari, Edge, Opera
          'input::-webkit-outer-spin-button,input::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          // Firefox
          'input[type=number]': {
            MozAppearance: 'textfield',
          },
          '.hide-scrollbar::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '.hide-scrollbar': {
            msOverflowStyle: 'none' /* IE and Edge */,
            scrollbarWidth: 'none' /* Firefox */,
          },
          '.custom-scrollbar': {
            // firefox
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.4) transparent',

            // chrome, safari
            '&::-webkit-scrollbar': {
              width: 4,
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: 10,
              backgroundColor: 'rgba(255,255,255,0.4)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.65)',
              },
            },
            '&::-webkit-scrollbar-corner': {
              display: 'none',
            },
          },
          body: {
            overflowX: 'hidden',
          },
        },
      },

      // typography
      MuiTypography: {
        defaultProps: {
          variant: 'body1',
          variantMapping: {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            body1: 'p',
            body2: 'p',
            subtitle1: 'p',
            button: 'p',
          },
        },
      },

      // button
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'capitalize',
            borderRadius: 6,
          },
          // sizeMedium: {
          //   textTransform: 'none',
          //   lineHeight: 1,
          //   padding: '12px 24px',
          // },
          // sizeLarge: {
          //   padding: '12px 28px',
          //   fontSize: pxToRem(16),
          // },
          // sizeSmall: {
          //   padding: '8px 16px',
          // },
          // containedPrimary: {
          //   backgroundColor: '#0059AC',
          //   '&:hover': {
          //     backgroundColor: '#1C8CF3',
          //   },
          // },
          // outlinedPrimary: {
          //   borderColor: '#0059AC',
          //   '&:hover': {
          //     borderColor: '#1C8CF3',
          //   },
          // },
        },
      },

      // dialog
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 10,
            border: '1px solid',
            borderColor: '#0093FF',
            backgroundImage: 'none',
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            padding: theme.spacing(2, 2.5),
            backgroundColor: '#001D39',
            '&.MuiDialogTitle-root+.MuiDialogContent-root': {
              paddingTop: theme.spacing(2.5),
            },
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: theme.spacing(2, 3),
            '>:not(:first-of-type)': {
              marginLeft: theme.spacing(2),
            },
          },
        },
      },

      // svg
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: pxToRem(24),
          },
          fontSizeSmall: {
            fontSize: pxToRem(20),
          },
          fontSizeLarge: {
            fontSize: pxToRem(28),
          },
        },
      },

      // backdrop
      // MuiBackdrop: {
      //   styleOverrides: {
      //     root: {
      //       backgroundColor: 'rgba(0, 0, 0, 0.3)',
      //     },
      //   },
      // },

      // paper
      MuiPaper: {
        defaultProps: {
          elevation: 1,
        },
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },

      // table
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: 'none',
            whiteSpace: 'nowrap',
          },
          head: {
            padding: '8px 16px 24px',
          },
          body: {
            padding: '10px 16px',
          },
        },
      },

      // accordion
      MuiAccordion: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          expandIconWrapper: {
            color: '#002A52',
            marginLeft: 8,
            '&.Mui-expanded': {
              color: '#7994C1',
            },
          },
        },
      },

      // input
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: '#F5F7F8',
          },
          notchedOutline: {
            borderRadius: 8,
            borderColor: '#00569599',
          },
        },
      },
    },
  }
}

export const theme = responsiveFontSizes(createTheme(getThemeConfig()), {
  breakpoints: ['xs', 'xsm', 'sm', 'md', 'lg', 'xl'],
  factor: 2,
})
