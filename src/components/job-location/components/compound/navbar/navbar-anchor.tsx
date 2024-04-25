import {cva} from 'class-variance-authority'
import * as React from 'react'

import type {AnchorProps} from '@/components/job-location/components/ui'
import {Anchor} from '@/components/job-location/components/ui'
import {cn} from '@/components/job-location/utils/cn'

interface NavbarAnchorProps extends AnchorProps {
  isActive?: boolean
}

const navbarAnchorVariants = cva(
  'relative line-clamp-1 flex h-full cursor-pointer items-center whitespace-nowrap font-serif text-md font-medium text-gray-400',
  {
    variants: {
      isActive: {
        true: 'text-black before:absolute before:top-0 before:h-1 before:w-full before:rounded-b-sm before:bg-primary before:content-[""]',
      },
    },
  },
)

const NavbarAnchor = React.forwardRef<
  React.ElementRef<typeof Anchor>,
  NavbarAnchorProps
>(({className, isActive, ...props}, ref) => {
  return (
    <Anchor
      ref={ref}
      className={cn(navbarAnchorVariants({isActive}))}
      {...props}
    />
  )
})

export {NavbarAnchor}

NavbarAnchor.displayName = 'NavbarAnchor'
