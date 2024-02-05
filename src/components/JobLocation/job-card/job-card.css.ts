import {style} from '@vanilla-extract/css'

import {sprinkles} from '@/lib/styles/sprinkles.css'

export const tag = style([
  sprinkles({
    fontSize: 'sm',
    color: 'gray.5',
    background: 'gray.0',
    borderRadius: 'sm',
  }),
  {
    padding: '5px 3px',
    cursor: 'pointer',
  },
])

export const more = style([
  sprinkles({
    color: 'gray.5',
  }),
  {
    cursor: 'pointer',
    height: 25,
    width: 25,
  },
])
