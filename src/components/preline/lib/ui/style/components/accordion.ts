import {accordionAnatomy as parts} from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system'

// eslint-disable-next-line @typescript-eslint/unbound-method
const {definePartsStyle, defineMultiStyleConfig} =
  createMultiStyleConfigHelpers(parts.keys)

// default base style from the Input theme
const baseStyle = definePartsStyle({
  container: defineStyle({
    boxShadow: 'sm',
    _focus: {
      boxShadow: 'outline',
    },
  }),
})

const base = definePartsStyle(() => {
  return {
    panel: {
      borderRadius: 'lg',
    },
    container: {
      border: 'none',
      boxShadow: 'none',
    },

    button: {
      borderRadius: 'lg',

      _hover: {
        color: 'blue.600',
        bg: 'gray.50',
      },

      _focus: {
        color: 'blue.600',
        bg: 'gray.50',
      },
    },
  }
})

const variants = {base}

export const Accordion = defineMultiStyleConfig({
  baseStyle,
  variants,
})
