import type {MantineSize} from '@mantine/core'
import {defineProperties} from '@vanilla-extract/sprinkles'

import {vars} from '@/lib/ui/theme'

const space = vars.spacing

const fontWeight = {
  regular: '400',
  medium: '500',
  bold: '700',
}

type MantineSizeObject = Record<MantineSize, string>

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {'@media': `screen and (min-width: ${vars.breakpoints.sm})`},
    desktop: {'@media': `screen and (min-width: ${vars.breakpoints.lg})`},
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],

    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,

    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,

    fontWeight,
    fontSize: vars.fontSizes,
    borderRadius: vars.radius,
    boxShadow: vars.shadows as MantineSizeObject,
    lineHeight: vars.lineHeights as MantineSizeObject,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})
