import {alertAnatomy} from '@chakra-ui/anatomy'
import {createMultiStyleConfigHelpers} from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/unbound-method
const {definePartsStyle, defineMultiStyleConfig} =
  createMultiStyleConfigHelpers(alertAnatomy.keys)

const custom = definePartsStyle({
  container: {
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.50',

    // Let's also provide dark mode alternatives
    _dark: {
      borderColor: 'gray.600',
      background: 'gray.800',
    },
  },
  title: {
    color: 'blue.500',
    _dark: {
      color: 'cyan.400',
    },
  },
})

export const Alert = defineMultiStyleConfig({
  variants: {custom},
})
