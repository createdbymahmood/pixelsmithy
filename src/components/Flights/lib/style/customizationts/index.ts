import type {
  ButtonCssVariables,
  ButtonProps,
  ButtonStylesNames,
  InputCssVariables,
  InputStylesNames,
  MantineThemeComponents,
  TextCssVariables,
  TextProps,
} from '@mantine/core'
import {Button, Input, rem, Text} from '@mantine/core'
import {DatePickerInput} from '@mantine/dates'

type DisplayTextResolverReturn = Record<
  'root',
  Partial<Record<TextCssVariables['root'], string>>
>

const displayTextResolver = (
  size: TextProps['size'],
): DisplayTextResolverReturn => {
  switch (size) {
    case 'xxl':
      return {
        root: {
          '--text-fz': rem(72),
          '--text-lh': rem(90),
        },
      }

    case 'xl':
      return {
        root: {
          '--text-fz': rem(60),
          '--text-lh': rem(72),
        },
      }
    case 'lg':
      return {
        root: {
          '--text-fz': rem(48),
          '--text-lh': rem(60),
        },
      }

    case 'md':
      return {
        root: {
          '--text-fz': rem(36),
          '--text-lh': rem(44),
        },
      }

    case 'sm':
      return {
        root: {
          '--text-fz': rem(30),
          '--text-lh': rem(38),
        },
      }

    case 'xs':
      return {
        root: {
          '--text-fz': rem(24),
          '--text-lh': rem(32),
        },
      }

    default:
      return {root: {}}
  }
}

type ButtonSizeResolverReturn = Record<
  ButtonStylesNames,
  Partial<Record<ButtonCssVariables['root'], string>>
>

const buttonSizeResolver = (
  size: ButtonProps['size'],
): Partial<ButtonSizeResolverReturn> => {
  switch (size) {
    case 'sm':
      return {
        root: {
          '--button-height': rem(40),
          '--button-fz': rem(16),
        },
      }

    case 'md':
      return {
        root: {
          '--button-height': rem(44),
          '--button-fz': rem(16),
        },
      }

    case 'lg':
      return {
        root: {
          '--button-height': rem(50),
          '--button-fz': rem(16),
        },
      }

    default:
      return {root: {}}
  }
}

type InputSizeResolverReturn = Record<
  InputStylesNames,
  Partial<Record<InputCssVariables['wrapper'], string>>
>

const inputSizeResolver = (): Partial<InputSizeResolverReturn> => {
  return {
    input: {
      '--input-height': rem(50),
      '--input-fz': rem(16),
    },
  }
}

export const components: MantineThemeComponents = {
  Text: Text.extend({
    vars: (theme, props) => {
      if (props.variant === 'display') {
        return displayTextResolver(props.size)
      }

      return {root: {}}
    },
  }),
  Button: Button.extend({
    vars: (theme, props) => {
      return buttonSizeResolver(props.size) as ButtonSizeResolverReturn
    },
  }),
  Input: Input.extend({
    defaultProps: {
      size: 'lg',
    },
    vars: (theme, props) => {
      return inputSizeResolver() as InputSizeResolverReturn
    },
  }),
  DatePickerInput: DatePickerInput.extend({
    defaultProps: {
      size: 'lg',
    },
  }),
}
