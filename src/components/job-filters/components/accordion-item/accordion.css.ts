import {style} from '@vanilla-extract/css'

import {sprinkles} from '@/lib/styles/sprinkles.css'

export const control = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingBottom: 'lg',
  }),
  {
    width: '100%',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    paddingLeft: 0,
  },
])

export const chevron = style({
  transition: '100ms all ease-in-out',
  selectors: {
    '&:not([data-rotate="true"])': {
      transform: 'rotate(-180deg)',
    },
  },
})

export const panel = sprinkles({
  paddingBottom: 'md',
})

export const item = sprinkles({
  marginBottom: 'lg',
})

export const checkboxArea = sprinkles({
  display: 'flex',
  flexDirection: 'row',
})

export const checkboxBadge = style({
  marginLeft: 'auto',
  transition: '300ms all ease-in-out',
})
