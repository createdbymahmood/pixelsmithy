import NavbarLogo from '@job-location/assets/images/logo.svg'
import React from 'react'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Group,
} from '@/components/job-location/components/ui'

import {NavbarAnchor} from './navbar-anchor'

const nav = [
  'Find Jobs',
  'Company Reviews',
  'Find Salaries',
  'Find Resumes',
  'Employers / Post Job',
]

function getIsActive(index: number) {
  return index === 0
}

function NavbarLinks() {
  const elements = nav.map((link, index) => {
    const isActive = getIsActive(index)

    return (
      <NavbarAnchor key={link} href='https://google.com' isActive={isActive}>
        {link}
      </NavbarAnchor>
    )
  })

  return (
    <Group
      className='hidden self-stretch lg:flex lg:w-[700px] xl:w-[788px]'
      justify='between'
    >
      {elements}
    </Group>
  )
}

function NavbarProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='outline'>
          S
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side='bottom'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Navbar() {
  return (
    <Group className='h-[100px] w-full bg-white px-10' justify='between'>
      <NavbarLogo />
      <NavbarLinks />
      <NavbarProfile />
    </Group>
  )
}
