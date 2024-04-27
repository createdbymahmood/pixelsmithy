import NavbarLogo from '@job-location/assets/images/logo.svg'

import {Group, Separator} from '@/components/job-location/components/ui'

import {NavbarAnchor} from './navbar-anchor'
import {NavbarNotifications} from './navbar-notifications'
import {NavbarProfile} from './navbar-profile'

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
      noWrap
    >
      {elements}
    </Group>
  )
}

export function Navbar() {
  return (
    <Group
      className='h-[100px] w-full bg-white px-2 md:px-5 lg:px-6 xl:px-10'
      justify='between'
      noWrap
    >
      <NavbarLogo />
      <NavbarLinks />

      <Group gap='md' noWrap>
        <NavbarNotifications />
        <Separator className='h-12' orientation='vertical' />
        <NavbarProfile />
      </Group>
    </Group>
  )
}
