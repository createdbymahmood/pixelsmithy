import {Group, rem} from '@mantine/core'

import {Sidebar} from '@/components/SnowUI'
import {RightSidePanel} from '@/components/SnowUI/components/RightSidePanel/RightSidePanel'
import {SnowUIProviders} from '@/components/SnowUI/layout/SnowUIProviders'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Snow UI',
})

export default function SnowUI() {
  return (
    <SnowUIProviders>
      <Group
        align='flex-start'
        h={rem('100vh')}
        justify='space-between'
        w='100%'
      >
        <Sidebar />
        <RightSidePanel />
      </Group>
    </SnowUIProviders>
  )
}
