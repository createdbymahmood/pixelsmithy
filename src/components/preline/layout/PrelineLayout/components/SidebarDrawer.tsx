import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import {List} from '@phosphor-icons/react/dist/ssr'
import type {ReactNode} from 'react'
import React, {Fragment} from 'react'

interface SidebarDrawerProps {
  children: ReactNode
}

export function SidebarDrawer({children}: SidebarDrawerProps) {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null!)

  return (
    <Fragment>
      <IconButton
        aria-label='Send email'
        colorScheme='white'
        icon={<List className='icon-size-md' />}
        m={4}
        variant='outline'
        onClick={onOpen}
      />

      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement='left'
        size='full'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box mt={8}>{children}</Box>
        </DrawerContent>
      </Drawer>
    </Fragment>
  )
}
