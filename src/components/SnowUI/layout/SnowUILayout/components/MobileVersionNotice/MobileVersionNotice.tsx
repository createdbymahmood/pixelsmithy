import {Center, Text} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import {useMobileDevice} from '@/hooks/useMobileDevice'

export function MobileVersionNotice(props: {children: ReactNode}) {
  const isMobile = useMobileDevice()
  if (isMobile)
    return (
      <Center mih='100vh' miw='100vw'>
        <Text size='sm'>Mobile version is under construction...</Text>
      </Center>
    )
  return props.children
}
