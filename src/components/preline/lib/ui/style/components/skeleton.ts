import {cssVar, defineStyle, defineStyleConfig} from '@chakra-ui/react'

const $startColor = cssVar('skeleton-start-color')
const $endColor = cssVar('skeleton-end-color')

const red = defineStyle({
  _light: {
    [$startColor.variable]: 'colors.red.100', // changing startColor to red.100
    [$endColor.variable]: 'colors.red.400', // changing endColor to red.400
  },
  _dark: {
    [$startColor.variable]: 'colors.red.800', // changing startColor to red.800
    [$endColor.variable]: 'colors.red.600', // changing endColor to red.600
  },
})

export const Skeleton = defineStyleConfig({
  variants: {red},
})
