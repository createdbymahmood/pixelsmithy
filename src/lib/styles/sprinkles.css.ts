import {createSprinkles} from '@vanilla-extract/sprinkles'

import {colorProperties} from '@/lib/styles/color'
import {responsiveProperties} from '@/lib/styles/responsiveProperties'

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)
