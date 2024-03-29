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

// Defining a custom variant called outline
const sidebarAccordion = definePartsStyle((props) => {
  return {
    panel: {
      p: 0,
      ml: 10,
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
        color: 'blue.500',
        bg: 'gray.50',
      },
    },
  }
})

const variants = {
  sidebar: sidebarAccordion,
}

export const Accordion = defineMultiStyleConfig({
  baseStyle,
  variants,
})
