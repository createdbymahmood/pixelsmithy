import {Center, Stack, Text} from '@mantine/core'
import {Barricade} from '@phosphor-icons/react'
import type {ReactNode} from 'react'

import {useMobileDevice} from '@/hooks/useMobileDevice'

export function MobileVersionNotice(props: {children: ReactNode}) {
  const isMobile = useMobileDevice()
  if (isMobile)
    return (
      <Center mih='100vh' miw='100vw'>
        <Stack align='center' gap='xs'>
          <Barricade size={50} weight='duotone' />
          <Text size='sm'>Mobile version is under construction</Text>
        </Stack>
      </Center>
    )
  return props.children
}
