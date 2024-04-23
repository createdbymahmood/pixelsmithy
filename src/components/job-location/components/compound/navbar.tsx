import Logo from '@job-location/assets/images/logo.svg'
import React from 'react'

import {Anchor, Stack} from '@/components/job-location/components/ui'
import {cn} from '@/components/job-location/utils/cn'

const links = [
  'Find Jobs',
  'Company Reviews',
  'Find Salaries',
  'Find Resumes',
  'Employers / Post Job',
]

function NavbarLinks() {
  return (
    <Stack
      className='hidden self-stretch lg:flex lg:w-[700px] xl:w-[788px]'
      direction='row'
      justify='between'
    >
      {links.map((link, index) => {
        const isActive = index === 0
        return (
          <Anchor
            key={link}
            className={cn(
              'relative cursor-pointer h-full font-serif text-md font-medium text-gray-400 line-clamp-1 whitespace-nowrap flex items-center',
              {
                'before:absolute before:top-0 before:h-1 before:w-full before:rounded-b-sm before:bg-primary before:content-[""] text-black':
                  isActive,
              },
            )}
            href='https://google.com'
          >
            {link}
          </Anchor>
        )
      })}
    </Stack>
  )
}

export function Navbar() {
  return (
    <Stack
      align='center'
      className='h-[100px] w-full bg-white px-10'
      direction='row'
      justify='between'
    >
      <Logo />
      <NavbarLinks />
    </Stack>
  )
}
