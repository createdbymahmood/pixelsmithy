import {defineStyle, defineStyleConfig} from '@chakra-ui/react'

const baseStyle = defineStyle({
  borderRadius: 0, // disable the border radius
  fontWeight: 'normal', // change the font weight to normal
  fontFamily: 'mono', // change the font family to monospaced
})

const sizes = {
  md: defineStyle({
    fontSize: 'sm', // Change font size to sm (14px)
  }),
}

// Defining a custom variant
const customVariant = defineStyle((props) => {
  const {colorScheme: c} = props
  return {
    fontFamily: 'sans-serif',
    bg: `${c}.500`,
    fontWeight: 'semibold',
    color: 'white',
    borderRadius: '3xl',
    transition: 'transform 0.15s ease-out, background 0.15s ease-out',
    _dark: {
      bg: `${c}.200`,
      color: 'gray.800',
    },

    _hover: {
      transform: 'scale(1.05, 1.05)',
      bg: `${c}.600`,

      _dark: {
        bg: `${c}.300`,
      },
    },

    _active: {
      bg: `${c}.700`,
      transform: 'scale(1, 1)',

      _dark: {
        bg: `${c}.400`,
      },
    },
  }
})

export const Button = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {custom: customVariant},
  defaultProps: {
    colorScheme: 'purple', // set the default color scheme to purple
  },
})
