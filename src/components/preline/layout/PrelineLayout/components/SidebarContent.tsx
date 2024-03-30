import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
  HStack,
  Text,
} from '@chakra-ui/react'
import {
  Basket,
  Briefcase,
  Files,
  House,
  Key,
  LockSimple,
  UserCircle,
  UserGear,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'
import {isArray, isEmpty, isEqual} from 'lodash-es'
import {useSelectedLayoutSegments} from 'next/navigation'
import type {ReactNode} from 'react'
import React, {Fragment} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import type {
  SidebarItemsProps,
  SidebarSection,
  SidebarSectionsProps,
} from '@/components/roscent'
import {urls} from '@/constants'

import {AccordionPanel, SectionTitle} from './styles'

interface CustomSidebarSection extends SidebarSection {
  badge?: ReactNode
}

const sidebarSections: CustomSidebarSection[] = [
  {
    title: '',
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: House,
        activeSegment: null,
        children: [
          {
            id: 'dashboard-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: null,
          },
          {
            id: 'dashboard-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: null,
          },
        ],
      },
    ],
  },
  {
    title: 'Pages',
    items: [
      {
        id: 'users',
        title: 'Users',
        icon: UsersThree,
        activeSegment: null,
        children: [
          {
            id: 'users-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: null,
          },
          {
            id: 'users-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: null,
          },
        ],
      },
      {
        id: 'user-profile',
        title: 'User Profile',
        icon: UserGear,
        activeSegment: null,
        children: [
          {
            id: 'user-profile-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: null,
          },
          {
            id: 'user-profile-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: null,
          },
        ],
      },
      {
        id: 'account',
        title: 'Account',
        icon: UserCircle,
        activeSegment: null,
        children: [
          {
            id: 'account-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: null,
          },
          {
            id: 'account-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: null,
          },
        ],
      },
      {
        id: 'ecommerce',
        title: 'E-Commerce',
        icon: Basket,
        activeSegment: null,
        children: [
          {
            id: 'ecommerce-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: null,
          },
          {
            id: 'ecommerce-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: null,
          },
        ],
      },
      {
        id: 'projects',
        title: 'Projects',
        icon: Files,
        activeSegment: null,
        children: [
          {
            id: 'projects-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: null,
          },
          {
            id: 'projects-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: null,
          },
        ],
      },
      {
        id: 'project',
        title: 'Project',
        icon: Briefcase,
        activeSegment: null,
        children: [
          {
            id: 'project-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: null,
          },
          {
            id: 'project-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: null,
          },
        ],
      },
      {
        id: 'authentication',
        title: 'Authentication',
        icon: LockSimple,
        activeSegment: null,
        children: [
          {
            id: 'auth-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: null,
          },
          {
            id: 'auth-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: null,
          },
        ],
      },
      {
        id: 'api-keys',
        title: 'API Keys',
        icon: Key,
        activeSegment: null,
        children: [
          {
            id: 'api-key-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: null,
          },
          {
            id: 'api-key-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: null,
          },
        ],
      },
    ],
  },
]

const SidebarItems = ({items}: SidebarItemsProps) => {
  const segments = useSelectedLayoutSegments()

  const content = items.map((item) => {
    const withChildren = isArray(item.children) && !isEmpty(item.children)

    const children = withChildren ? (
      <SidebarItems items={item.children!} />
    ) : null

    const opened = isEqual(segments, item.activeSegment)
    const withIcon = !isEmpty(item.icon)
    const Icon = (() => {
      if (!opened) return item.icon ?? Fragment
      return item.icon ?? Fragment
    })()

    return (
      <AccordionItem key={item.id} py={1}>
        <AccordionButton>
          <HStack w='100%'>
            {withIcon ? (
              <Icon className='icon-size-lg' weight='regular' />
            ) : null}

            <Text fontSize='sm' fontWeight='500'>
              {item.title}
            </Text>
            {withChildren ? <AccordionIcon ml='auto' /> : null}
          </HStack>
        </AccordionButton>

        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    )
  })

  return content
}

const SidebarSections = ({sections}: SidebarSectionsProps) => {
  const content = sections.map((section) => {
    return (
      <Box key={section.title} mb={1}>
        {!isEmpty(section.title) && (
          <SectionTitle>{section.title}</SectionTitle>
        )}

        <SidebarItems items={section.items} />
      </Box>
    )
  })

  return (
    <Accordion variant='sidebar' w='100%' allowMultiple>
      {content}
    </Accordion>
  )
}

export function SidebarContent() {
  return (
    <PerfectScrollbar>
      <Box h='100%' px={2} py={4}>
        <SidebarSections sections={sidebarSections} />
      </Box>
    </PerfectScrollbar>
  )
}
