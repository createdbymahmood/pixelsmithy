import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Text,
} from '@chakra-ui/react'
import {Files, House, UsersThree} from '@phosphor-icons/react/dist/ssr'
import {isArray, isEmpty, isEqual} from 'lodash-es'
import {useSelectedLayoutSegments} from 'next/navigation'
import React, {Fragment} from 'react'

import type {
  SidebarItemsProps,
  SidebarSection,
  SidebarSectionsProps,
} from '@/components/roscent'
import {urls} from '@/constants'

interface CustomSidebarSection extends SidebarSection {}

const sidebarSections: CustomSidebarSection[] = [
  {
    title: 'Pages',
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
            activeSegment: [''],
          },
          {
            id: 'dashboard-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: [''],
          },
        ],
      },
      {
        id: 'account',
        title: 'Account',
        icon: UsersThree,
        activeSegment: null,
        children: [
          {
            id: 'account-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: [''],
          },
          {
            id: 'account-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: [''],
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
            id: 'project-default',
            href: urls.Preline.index,
            title: 'Default',
            activeSegment: [''],
          },
          {
            id: 'project-alternative',
            href: urls.Preline.index,
            title: 'Alternative',
            activeSegment: [''],
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

    const children = (() => {
      return withChildren ? <SidebarItems items={item.children!} /> : null
    })()

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

        <AccordionPanel
          _before={{
            content: "''",
            display: 'block',
            width: 0.5,
            borderRadius: 'xl',
            bg: 'gray.200',
            position: 'absolute',
            left: -3,
            top: 1,
            bottom: 1,
          }}
          position='relative'
        >
          {children}
        </AccordionPanel>
      </AccordionItem>
    )
  })

  return content
}

const SidebarSections = ({sections}: SidebarSectionsProps) => {
  const content = sections.map((section) => {
    return (
      <Box key={section.title} mb={1}>
        <Text
          color='gray.500'
          fontSize='xs'
          fontWeight='600'
          mb={2}
          ml={4}
          textTransform='uppercase'
        >
          {section.title}
        </Text>

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
    <Box h='100%' py={4}>
      <SidebarSections sections={sidebarSections} />
    </Box>
  )
}
