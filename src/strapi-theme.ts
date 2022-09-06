import * as React from 'react';
import { createGetCssVar, extendTheme } from '@mui/joy/styles';
import { checkboxClasses } from '@mui/joy/Checkbox';
import { buttonClasses } from '@mui/joy/Button';
import { iconButtonClasses } from '@mui/joy/IconButton';

declare module '@mui/joy/styles' {
  interface PaletteRange {
    150: string;
    0: string;
  }

  interface Palette {
    outlinedFocusBorder: string;
    secondary: {
      700: string;
      600: string;
      500: string;
      200: string;
      100: string;
      softBg: string;
      softColor: string;
      solidBg: string;
      solidColor: string;
    };
    alternate: {
      700: string;
      600: string;
      500: string;
      200: string;
      100: string;
      softBg: string;
      softColor: string;
      solidBg: string;
      solidColor: string;
    };
  }

  interface TypographySystem {
    header1: React.CSSProperties;
    header2: React.CSSProperties;
    header3: React.CSSProperties;
    subtitle: React.CSSProperties;
    body: React.CSSProperties;
    bodyHighlight: React.CSSProperties;
    buttonText: React.CSSProperties;
    smallText: React.CSSProperties;
    smallButtonText: React.CSSProperties;
    tableLabel: React.CSSProperties;
  }

  interface VariantSoft {
    secondary: React.CSSProperties;
    alternate: React.CSSProperties;
  }

  interface VariantSolid {
    secondary: React.CSSProperties;
    alternate: React.CSSProperties;
  }
}

const getCssVar = createGetCssVar('strapi');

const strapiTheme = extendTheme({
  cssVarPrefix: 'strapi',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          700: '#271FE0',
          600: '#4945FF',
          500: '#7B79FF',
          200: '#D9D8FF',
          100: '#F0F0FF',
          softColor: getCssVar('palette-primary-600'),
          softActiveBg: getCssVar('palette-primary-200'),
          solidBg: getCssVar('palette-primary-600'),
          solidHoverBg: getCssVar('palette-primary-500'),
          solidActiveBg: getCssVar('palette-primary-700'),
          outlinedColor: getCssVar('palette-primary-600'),
          outlinedBorder: getCssVar('palette-primary-200'),
          outlinedBg: getCssVar('palette-primary-100'),
          outlinedHoverBorder: getCssVar('palette-primary-200'),
          outlinedHoverBg: getCssVar('palette-neutral-0'),
          outlinedActiveColor: getCssVar('palette-primary-700'),
          outlinedActiveBg: getCssVar('palette-neutral-0'),
          outlinedDisabledColor: getCssVar('palette-neutral-600'),
        },
        success: {
          700: '#2F6846',
          600: '#328048',
          500: '#5CB176',
          200: '#C6F0C2',
          100: '#EAFBE7',
          solidBg: getCssVar('palette-success-600'),
          solidHoverBg: getCssVar('palette-success-500'),
          solidActiveBg: getCssVar('palette-success-700'),
          outlinedColor: getCssVar('palette-success-600'),
          outlinedBorder: getCssVar('palette-success-200'),
          outlinedBg: getCssVar('palette-success-100'),
          outlinedHoverBorder: getCssVar('palette-success-200'),
          outlinedHoverBg: getCssVar('palette-neutral-0'),
          outlinedActiveColor: getCssVar('palette-success-700'),
          outlinedActiveBg: getCssVar('palette-neutral-0'),
        },
        danger: {
          700: '#B72B1A',
          600: '#D02B20',
          500: '#EE5E52',
          200: '#F5C0B8',
          100: '#FCECEA',
          solidBg: getCssVar('palette-danger-600'),
          solidHoverBg: getCssVar('palette-danger-500'),
          solidActiveBg: getCssVar('palette-danger-700'),
          outlinedColor: getCssVar('palette-danger-600'),
          outlinedBorder: getCssVar('palette-danger-200'),
          outlinedBg: getCssVar('palette-danger-100'),
          outlinedHoverBorder: getCssVar('palette-danger-200'),
          outlinedHoverBg: getCssVar('palette-neutral-0'),
          outlinedActiveBg: getCssVar('palette-neutral-0'),
          outlinedActiveColor: getCssVar('palette-danger-700'),
        },
        warning: {
          700: '#BE5D01',
          600: '#D9822F',
          500: '#F29D41',
          200: '#FAE7B9',
          100: '#FDF4DC',
        },
        // 💡 custom palette, it is not required to add all tokens
        secondary: {
          700: '#006096',
          600: '#0C75AF',
          500: '#66B7F1',
          200: '#B8E1FF',
          100: '#EAF5FF',
          softBg: 'var(--joy-palette-secondary-100)',
          softColor: 'var(--joy-palette-secondary-700)',
          solidBg: 'var(--joy-palette-secondary-500)',
          solidColor: '#fff',
        },
        // 💡 custom palette, it is not required to add all tokens
        alternate: {
          700: '#8312D1',
          600: '#9736E8',
          500: '#AC73E6',
          200: '#E0C1F4',
          100: '#F6ECFC',
          softBg: 'var(--joy-palette-alternate-100)',
          softColor: 'var(--joy-palette-alternate-700)',
          solidBg: 'var(--joy-palette-alternate-500)',
          solidColor: '#fff',
        },
        neutral: {
          900: '#212134',
          800: '#32324D',
          700: '#4A4A6A',
          600: '#666687',
          500: '#8E8EA9',
          400: '#A5A5BA',
          300: '#C0C0CF',
          200: '#DCDCE4',
          150: '#EAEAEF',
          100: '#F6F6F9',
          0: '#FFFFFF',
          outlinedColor: getCssVar('palette-neutral-800'),
          outlinedBorder: getCssVar('palette-neutral-200'),
          outlinedHoverBorder: undefined,
          outlinedHoverBg: getCssVar('palette-neutral-100'),
          outlinedActiveBg: getCssVar('palette-neutral-150'),
          outlinedDisabledColor: getCssVar('palette-neutral-600'),
          outlinedDisabledBorder: getCssVar('palette-neutral-200'),
          outlinedDisabledBg: getCssVar('palette-neutral-150'),
        },
        background: {
          level1: getCssVar('palette-neutral-100'),
          level2: getCssVar('palette-neutral-150'),
        },
        text: {
          primary: getCssVar('palette-neutral-800'),
        },
        divider: getCssVar('palette-neutral-100'),
        outlinedFocusBorder: getCssVar('palette-neutral-0'),
      },
    },
    dark: {
      palette: {
        neutral: {
          outlinedDisabledColor: getCssVar('palette-neutral-500'),
          outlinedDisabledBorder: getCssVar('palette-neutral-700'),
          outlinedDisabledBg: getCssVar('palette-neutral-800'),
        },
      },
    },
  },
  focus: {
    // 💡 global focus customization
    default: {
      outline: '2px solid',
      outlineOffset: '2px',
      outlineColor: getCssVar('palette-primary-700'),
    },
  },
  variants: {
    // 💡 Allow custom properties to variant
    // use case: Button
    outlinedActive: {
      primary: {
        '&:active': {
          borderColor: 'currentColor',
        },
      },
      success: {
        '&:active': {
          borderColor: 'currentColor',
        },
      },
      danger: {
        '&:active': {
          borderColor: 'currentColor',
        },
      },
    },
    // 💡 Able to use variant with custom color
    // use case: IconFrame
    soft: {
      secondary: {
        color: 'var(--joy-palette-secondary-softColor)',
        backgroundColor: 'var(--joy-palette-secondary-softBg)',
      },
      alternate: {
        color: 'var(--joy-palette-alternate-softColor)',
        backgroundColor: 'var(--joy-palette-alternate-softBg)',
      },
    },
    solid: {
      secondary: {
        color: 'var(--joy-palette-secondary-solidColor)',
        backgroundColor: 'var(--joy-palette-secondary-solidBg)',
      },
      alternate: {
        color: 'var(--joy-palette-alternate-solidColor)',
        backgroundColor: 'var(--joy-palette-alternate-solidBg)',
      },
    },
  },
  fontSize: {
    xs: '0.7rem',
    sm: '0.75rem',
    md: '0.875rem',
    lg: '1rem',
  },
  // 💡 custom typography
  typography: {
    header1: {
      fontFamily: getCssVar('fontFamily-body'),
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: '2.5rem',
      color: getCssVar('palette-text-primary'),
    },
    header2: {
      fontFamily: getCssVar('fontFamily-body'),
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: '1.375rem',
      color: getCssVar('palette-text-primary'),
    },
    header3: {
      fontFamily: getCssVar('fontFamily-body'),
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.25rem',
      color: getCssVar('palette-text-primary'),
    },
    subtitle: {
      fontFamily: getCssVar('fontFamily-body'),
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      color: getCssVar('palette-text-secondary'),
    },
    body: {
      fontFamily: getCssVar('fontFamily-body'),
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1rem',
      color: getCssVar('palette-text-primary'),
    },
    bodyHighlight: {
      fontFamily: getCssVar('fontFamily-body'),
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1rem',
      color: getCssVar('palette-text-primary'),
    },
    buttonText: {
      fontFamily: getCssVar('fontFamily-body'),
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: '1rem',
    },
    smallText: {
      fontFamily: getCssVar('fontFamily-body'),
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem',
      color: getCssVar('palette-text-secondary'),
    },
    smallButtonText: {
      fontFamily: getCssVar('fontFamily-body'),
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    tableLabel: {
      fontFamily: getCssVar('fontFamily-body'),
      fontWeight: 600,
      fontSize: '0.7rem',
      lineHeight: '1rem',
      color: getCssVar('palette-text-primary'),
      textTransform: 'uppercase',
    },
  },
  components: {
    JoyCheckbox: {
      styleOverrides: {
        checkbox: ({ theme }) => ({
          borderColor: getCssVar('palette-neutral-300'),
          [`&.${checkboxClasses.checked}`]: {
            '&:hover': {
              backgroundColor: getCssVar('palette-primary-solidBg'),
            },
          },
          [`&.${checkboxClasses.disabled}`]: {
            ...theme.variants.outlined.neutral,
            borderColor: getCssVar('palette-neutral-300'),
            backgroundColor: getCssVar('palette-neutral-200'),
          },
          // [theme.getColorSchemeSelector('dark')]: {
          //   borderColor: getCssVar('palette-neutral-500'),
          //   [`&.${checkboxClasses.disabled}`]: {
          //     borderColor: getCssVar('palette-neutral-500'),
          //     backgroundColor: getCssVar('palette-neutral-700'),
          //   },
          // },
        }),
      },
    },
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: '4px',
          ...theme.typography.buttonText,
          ...(ownerState.size === 'sm' && {
            minHeight: 32,
            ...theme.typography.smallButtonText,
          }),
          ...(ownerState.size === 'md' && {
            '--Icon-fontSize': '1.25rem',
            minHeight: 36,
          }),
          ...(ownerState.size === 'lg' && {
            minHeight: 40,
          }),
          [`&.${buttonClasses.focusVisible}`]: {
            ...(ownerState.variant === 'outlined' && {
              borderColor: theme.vars.palette.outlinedFocusBorder,
              ...(ownerState.color === 'neutral' && {
                boxShadow: `0 0 0 2px ${getCssVar(
                  'palette-neutral-outlinedBorder'
                )}`,
              }),
            }),
          },
          [`&.${buttonClasses.disabled}`]: {
            ...theme.variants.outlined.neutral,
            ...theme.variants.outlinedDisabled.neutral,
          },
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'neutral' && {
              backgroundColor: getCssVar('palette-background-body'),
            }),
        }),
      },
    },
    JoyIconButton: {
      defaultProps: {
        variant: 'outlined',
        color: 'neutral',
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: `var(--IconButton-radius, ${theme.vars.radius.xs})`,
          ...(ownerState.size === 'md' && {
            '--Icon-fontSize': '1rem',
            minWidth: 'var(--IconButton-size, 2rem)',
            minHeight: 'var(--IconButton-size, 2rem)',
          }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'neutral' && {
              backgroundColor: getCssVar('palette-background-body'),
            }),
          [`&.${iconButtonClasses.focusVisible}`]: {
            ...(ownerState.variant === 'outlined' && {
              borderColor: theme.vars.palette.outlinedFocusBorder,
              ...(ownerState.color === 'neutral' && {
                boxShadow: `0 0 0 2px ${getCssVar(
                  'palette-neutral-outlinedBorder'
                )}`,
              }),
            }),
          },
          [`&.${iconButtonClasses.disabled}`]: {
            color: theme.vars.palette.text.primary,
          },
        }),
      },
    },
  },
});

export default strapiTheme;
