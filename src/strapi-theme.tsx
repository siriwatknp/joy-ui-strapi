import * as React from 'react';
import { createGetCssVar, extendTheme } from '@mui/joy/styles';
import { checkboxClasses } from '@mui/joy/Checkbox';
import { buttonClasses } from '@mui/joy/Button';
import { iconButtonClasses } from '@mui/joy/IconButton';
import { linkClasses } from '@mui/joy/Link';
import { switchClasses } from '@mui/joy/Switch';
import { radioClasses } from '@mui/joy/Radio';
import { inputClasses } from '@mui/joy/Input';
import { formControlClasses } from '@mui/joy/FormControl';
import { textareaClasses } from '@mui/joy/Textarea';
import { selectClasses } from '@mui/joy/Select';
import type {} from '@mui/joy/Chip';
import type {} from '@mui/joy/Tab';

declare module '@mui/joy/Tab' {
  interface TabPropsVariantOverrides {
    underline: true;
  }
}

declare module '@mui/joy/Chip' {
  interface ChipPropsVariantOverrides {
    badge: true;
  }
}

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

  interface TypographySystemOverrides {
    header1: true;
    header2: true;
    header3: true;
    subtitle: true;
    body: true;
    bodyHighlight: true;
    buttonText: true;
    smallText: true;
    smallButtonText: true;
    tableLabel: true;
    display1: false;
    display2: false;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    body3: false;
    body4: false;
    body5: false;
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
          900: undefined,
          800: undefined,
          700: '#271FE0',
          600: '#4945FF',
          500: '#7B79FF',
          400: undefined,
          300: undefined,
          200: '#D9D8FF',
          100: '#F0F0FF',
          mainChannel: '73 69 255',
          solidBg: getCssVar('palette-primary-600'),
          solidHoverBg: getCssVar('palette-primary-500'),
          solidActiveBg: getCssVar('palette-primary-700'),
          softColor: getCssVar('palette-primary-600'),
          softBorder: getCssVar('palette-primary-200'),
          softBg: getCssVar('palette-primary-100'),
          softHoverBorder: getCssVar('palette-primary-200'),
          softHoverBg: getCssVar('palette-neutral-0'),
          softActiveColor: getCssVar('palette-primary-700'),
          softActiveBg: getCssVar('palette-neutral-0'),
          softActiveBorder: getCssVar('palette-primary-700'),
          softDisabledColor: getCssVar('palette-neutral-600'),
        },
        success: {
          900: undefined,
          800: undefined,
          700: '#2F6846',
          600: '#328048',
          400: undefined,
          300: undefined,
          500: '#5CB176',
          200: '#C6F0C2',
          100: '#EAFBE7',
          solidBg: getCssVar('palette-success-600'),
          solidHoverBg: getCssVar('palette-success-500'),
          solidActiveBg: getCssVar('palette-success-700'),
          softColor: getCssVar('palette-success-600'),
          softBorder: getCssVar('palette-success-200'),
          softBg: getCssVar('palette-success-100'),
          softHoverBorder: getCssVar('palette-success-200'),
          softHoverBg: getCssVar('palette-neutral-0'),
          softActiveColor: getCssVar('palette-success-700'),
          softActiveBorder: getCssVar('palette-success-700'),
          softActiveBg: getCssVar('palette-neutral-0'),
        },
        danger: {
          900: undefined,
          800: undefined,
          700: '#B72B1A',
          600: '#D02B20',
          400: undefined,
          300: undefined,
          500: '#EE5E52',
          200: '#F5C0B8',
          100: '#FCECEA',
          outlinedBorder: getCssVar('palette-danger-600'),
          solidBg: getCssVar('palette-danger-600'),
          solidHoverBg: getCssVar('palette-danger-500'),
          solidActiveBg: getCssVar('palette-danger-700'),
          softColor: getCssVar('palette-danger-600'),
          softBorder: getCssVar('palette-danger-200'),
          softBg: getCssVar('palette-danger-100'),
          softHoverBorder: getCssVar('palette-danger-200'),
          softHoverBg: getCssVar('palette-neutral-0'),
          softActiveBg: getCssVar('palette-neutral-0'),
          softActiveBorder: getCssVar('palette-danger-700'),
          softActiveColor: getCssVar('palette-danger-700'),
        },
        warning: {
          900: undefined,
          800: undefined,
          700: '#BE5D01',
          600: '#D9822F',
          400: undefined,
          300: undefined,
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
  radius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
  },
  components: {
    JoyAlert: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontWeight: 'normal',
          boxShadow: '0px 2px 15px 0px #2121341A',
          fontSize: theme.vars.fontSize.md,
          ...(ownerState.variant === 'soft' && {
            color: theme.vars.palette.text.primary,
          }),
          ...(ownerState.size === 'md' && {
            '--Alert-gap': '14px',
            '--Alert-padding': '20px',
          }),
        }),
      },
    },
    JoyAspectRatio: {
      styleOverrides: {
        content: ({ ownerState, theme }) => ({
          ...ownerState.variant === 'soft' && ownerState.color === 'neutral' && { 
            backgroundColor: theme.vars.palette.neutral[200]
          }
        })
      }
    },  
    JoyCheckbox: {
      defaultProps: {
        indeterminateIcon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <rect
              y="3.95825"
              width="10"
              height="2.08333"
              rx="0.2"
              fill="currentColor"
            />
          </svg>
        ),
        checkedIcon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M8.55323 1.32349C8.63135 1.24287 8.76051 1.24232 8.83931 1.32228L9.86256 2.36059C9.93893 2.43808 9.93935 2.56241 9.86349 2.64041L4.06401 8.60375C3.9859 8.68407 3.85707 8.68457 3.77834 8.60486L0.13866 4.91984C0.0617798 4.842 0.0617102 4.71684 0.138504 4.63891L1.16213 3.60023C1.24038 3.52084 1.36843 3.52073 1.4468 3.59999L3.92174 6.10298L8.55323 1.32349Z"
              fill="currentColor"
            />
          </svg>
        ),
      },
      styleOverrides: {
        checkbox: ({ theme, ownerState }) => ({
          borderRadius: theme.vars.radius.sm,
          ...ownerState.variant === 'outlined' && {
            backgroundColor: theme.vars.palette.background.surface,
            borderColor: getCssVar('palette-neutral-300'),
            [`&.${checkboxClasses.checked}`]: {
              '&:hover': {
                backgroundColor: getCssVar('palette-primary-solidBg'),
              },
            },
          },
          [`&.${checkboxClasses.disabled}`]: {
            ...theme.variants.outlined.neutral,
            borderColor: getCssVar('palette-neutral-300'),
            backgroundColor: getCssVar('palette-neutral-200'),
          },
        }),
      },
    },
    JoyCard: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          '--Card-radius': theme.vars.radius.sm,
          boxShadow: `0px 1px 4px 0px #1A1A431A`,
        })
      }
    },
    JoyChip: {
      defaultProps: {
        variant: 'soft',
        color: 'primary',
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'badge'
            ? {
                '--Chip-radius': '2px',
                '--Chip-minHeight': '16px',
                '--Chip-paddingInline': '4px',
                ...theme.typography.tableLabel,
                color: theme.vars.palette[ownerState.color!]?.[600],
                backgroundColor: getCssVar(
                  `palette-${ownerState.color}-150`,
                  `palette-${ownerState.color}-200`
                ),
              }
            : {
                '--Chip-radius': '4px',
                '--Chip-gap': '8px',
                '--Icon-fontSize': '12px',
              }),
        }),
        endDecorator: ({ ownerState, theme }) => ({
          position: 'relative',
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: -1,
            top: '50%',
            transform: 'translateY(-50%)',
            height: '10px',
            width: 1,
            backgroundColor: theme.vars.palette[ownerState.color!]?.softBorder,
          },
        }),
      },
    },
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
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
    JoyFormControl: {
      styleOverrides: {
        root:  ({ theme }) => ({
          '--FormHelperText-margin': '4px 0 0 0',
          [`&.${formControlClasses.disabled}`]: {
            '--FormLabel-color': theme.vars.palette.text.primary,
            '--FormHelperText-color': theme.vars.palette.text.secondary,
          },
          [`&.${formControlClasses.error}`]: {
            '--FormHelperText-color': theme.vars.palette.danger[600],
          }
        })
      }
    },
    JoyFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.smallButtonText,
        }),
      }
    },
    JoyFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.smallText,
          color: undefined,
        }),
      }
    },
    JoyIconButton: {
      defaultProps: {
        variant: 'outlined',
        color: 'neutral',
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
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
    JoyInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === 'md' && {
            '--Input-paddingInline': '16px',
            '--Input-gutter': '1rem',
          }),
          '--Input-focusedHighlight':
            theme.vars.palette[
              ownerState.color === 'neutral'
                ? 'primary'
                : ownerState.color || 'primary'
            ]?.[600],
          color: theme.vars.palette.text.primary,
          backgroundColor: theme.vars.palette.background.body,
          ...(ownerState.color === 'danger' && {
            borderColor: theme.vars.palette.danger[600],
            ...(ownerState.variant === 'outlined' && {
              '&:hover': {
                borderColor: theme.vars.palette.danger[600],
              },
            }),
          }),
          [`&.${inputClasses.disabled}`]: {
            '--Input-placeholderOpacity': 1,
          },
        }),
      },
    },
    JoyLink: {
      defaultProps: {
        underline: 'none',
        level: 'tableLabel'
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          color: theme.vars.palette[ownerState.color!]?.[600],
          ...(!ownerState.variant &&
            ownerState.color === 'primary' && {
              '&:hover': {
                color: theme.vars.palette.primary[500],
              },
              '&:active': {
                color: theme.vars.palette.primary[700],
              },
              [`&.${linkClasses.disabled}`]: {
                color: theme.vars.palette.neutral[500],
              },
            }),
        }),
      },
    },
    JoySwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          '--Switch-thumb-size': '16px',
          '--Switch-track-width': '40px',
          '--Switch-track-height': '24px',
          '--Switch-track-background': theme.vars.palette.danger[500],
          color: theme.vars.palette.danger[600],
          '&:hover': {
            '--Switch-track-background': theme.vars.palette.danger[500],
          },
          [`&.${switchClasses.checked}`]: {
            '--Switch-track-background': theme.vars.palette.success[500],
            color: theme.vars.palette.success[600],
            '&:hover': {
              '--Switch-track-background': theme.vars.palette.success[500],
            },
          },
        }),
      },
    },
    JoyRadio: {
      styleOverrides: {
        radio: ({ theme, ownerState }) => ({
          borderColor: getCssVar('palette-neutral-300'),
          ...(ownerState.checked && {
            // TODO: fix this using class
            color: theme.vars.palette.primary[600],
            borderColor: theme.vars.palette.primary[600],
            '&:hover': {
              borderColor: theme.vars.palette.primary[600],
            },
          }),
          [`&.${radioClasses.disabled}`]: {
            ...theme.variants.outlined.neutral,
            borderColor: getCssVar('palette-neutral-300'),
            backgroundColor: getCssVar('palette-neutral-200'),
          },
        }),
        icon: {
          width: 12,
          height: 12,
        },
      },
    },
    JoyTabs: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    JoyTabList: {
      styleOverrides: {
        root: {
          '--List-item-minHeight': '53px',
          '--List-gap': '0px',
          '--List-padding': '0px',
          alignItems: 'flex-end',
          backgroundColor: 'transparent',
        },
      },
    },
    JoyTab: {
      defaultProps: {
        variant: 'soft',
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          ...theme.typography.buttonText,
          ...(ownerState.variant === 'plain' && {
            minHeight: '48px',
            paddingInline: '16px',
            flex: 'none',
            boxShadow: 'none',
            ...(ownerState.selected
              ? {
                  '--Tab-color':
                    theme.vars.palette[
                      (ownerState.color === 'neutral'
                        ? 'primary'
                        : ownerState.color)!
                    ]?.[600],
                  color: 'var(--Tab-color)',
                  borderBottom: '2px solid',
                  borderColor: 'currentColor',
                  '&:hover': {
                    color: 'var(--Tab-color)',
                  },
                }
              : {
                  color: theme.vars.palette[ownerState.color!]?.[600],
                }),
          }),
          ...(ownerState.variant === 'soft' && {
            ...(ownerState.selected
              ? {
                  minHeight: 'calc(var(--List-item-minHeight) + 4px)',
                  boxShadow: '0px 1px 4px rgba(26, 26, 67, 0.1)',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  backgroundColor: theme.vars.palette.background.surface,
                  color: theme.vars.palette.primary[600],
                  zIndex: 1,
                  '&:hover': {
                    backgroundColor: theme.vars.palette.background.surface,
                    color: theme.vars.palette.primary[600],
                  },
                }
              : {
                  borderRadius: 0,
                  color: theme.vars.palette.neutral[500],
                  border: '1px solid',
                  borderColor: theme.vars.palette.neutral[200],
                  borderLeft: 0,
                  borderTop: 0,
                  '&:first-child': {
                    borderTopLeftRadius: 4,
                  },
                  '&:last-child': {
                    borderTopRightRadius: 4,
                    borderRight: 0,
                  },
                }),
          }),
        }),
      },
    },
    JoyTabPanel: {
      styleOverrides: {
        root: ({ theme }) => ({
          zIndex: 1,
          backgroundColor: theme.vars.palette.background.surface,
        }),
      },
    },
    JoyTextarea: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === 'md' && {
            '--Textarea-paddingInline': '16px',
            '--Textarea-gutter': '1rem',
          }),
          '--Textarea-focusedHighlight':
            theme.vars.palette[
              ownerState.color === 'neutral'
                ? 'primary'
                : ownerState.color || 'primary'
            ]?.[600],
          color: theme.vars.palette.text.primary,
          backgroundColor: theme.vars.palette.background.body,
          ...(ownerState.color === 'danger' && {
            borderColor: theme.vars.palette.danger[600],
            ...(ownerState.variant === 'outlined' && {
              '&:hover': {
                borderColor: theme.vars.palette.danger[600],
              },
            }),
          }),
          [`&.${textareaClasses.disabled}`]: {
            '--Textarea-placeholderOpacity': 1,
          },
        }),
        textarea: {
          marginTop: '1px',
        }
      }
    },
    JoySelect: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '--Select-focusedHighlight': theme.vars.palette[ownerState.color === 'neutral' ? 'primary' : ownerState.color!]?.[600],
          '&::before': {
            boxShadow: ownerState.open ? `inset 0 0 0 2px var(--Select-focusedHighlight)` : undefined,
          },
          color: theme.vars.palette.text.primary,
          backgroundColor: theme.vars.palette.background.body,
          ...(ownerState.color === 'danger' && {
            borderColor: theme.vars.palette.danger[600],
            ...(ownerState.variant === 'outlined' && {
              '&:hover': {
                borderColor: theme.vars.palette.danger[600],
              },
            }),
          }),
          [`&.${selectClasses.disabled}`]: {
            '--Select-placeholderOpacity': 1,
          },
        }),
        listbox: {
          boxSizing: 'border-box',
          boxShadow: '0px 1px 4px 0px #2121341A',
          '--List-padding': '4px',
        }
      }
    },
    JoyOption: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': theme.variants.plainHover.primary,
        })
      }
    }
  },
});

export default strapiTheme;
