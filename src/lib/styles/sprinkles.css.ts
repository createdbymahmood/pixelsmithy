import {createSprinkles} from '@vanilla-extract/sprinkles'

import {colorProperties} from '@/lib/styles/color.css'
import {responsiveProperties} from '@/lib/styles/responsiveProperties.css'

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)
