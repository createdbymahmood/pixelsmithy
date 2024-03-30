import {
  Card,
  Divider,
  Group,
  Pill,
  rem,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core'
import clsx from 'clsx'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScreenHeader} from '@/components/flights/components/common'
import {BottomNavigation} from '@/components/flights/components/screens/general/components'

import styles from './Ticket.module.scss'

function TicketView() {
  return (
    <Card className={styles.ticket} mx='sm' radius='lg' shadow='xxxl'>
      <Stack gap='lg'>
        <Pill
          bg='primary'
          c='white'
          fw='500'
          mt='calc(var(--mantine-spacing-xxl) * -1)'
          mx='auto'
          size='xl'
        >
          4000 ₽
        </Pill>

        <Skeleton h={130} mx='auto' radius='lg' />
        <Text fw='500' size='sm'>
          Cessna 172 familiarization flight from Kronstadt
        </Text>
        <Divider bg='blue' c='blue' mx='calc(var(--mantine-spacing-md) * -1)' />

        <Stack gap='lg'>
          <Group wrap='nowrap'>
            <Stack gap='xxs' w='100%'>
              <Text c='gray.6' size='xs'>
                Date of flight
              </Text>
              <Text fw='500' size='xs'>
                30.07.2022
              </Text>
            </Stack>

            <Stack gap='xxs' w='100%'>
              <Text c='gray.6' size='xs'>
                Airfield
              </Text>
              <Text fw='500' size='xs'>
                Bychye Polye
              </Text>
            </Stack>
          </Group>

          <Group wrap='nowrap'>
            <Stack gap='xxs' w='100%'>
              <Text c='gray.6' size='xs'>
                Departure time
              </Text>
              <Text fw='500' size='xs'>
                13:30
              </Text>
            </Stack>

            <Stack gap='xxs' w='100%'>
              <Text c='gray.6' size='xs'>
                Flight duration
              </Text>
              <Text fw='500' size='xs'>
                50 min
              </Text>
            </Stack>
          </Group>
        </Stack>

        <div className={styles.divider}>
          <div className={styles.notch} />
          <div className={clsx(styles.notch, styles.right)} />
        </div>

        <Stack align='center' gap='xs'>
          <Skeleton h={rem(60)} radius='lg' w={rem(272)} />
          <Text size='xs' ta='center'>
            673-843
          </Text>
        </Stack>
      </Stack>
    </Card>
  )
}

export function Ticket() {
  return (
    <IOSScreen variant='dark'>
      <Stack gap='md' h='100%' mt={rem(63)} pb={0} px='md'>
        <ScreenHeader title='673-843' />
        <TicketView />
      </Stack>
      <BottomNavigation />
    </IOSScreen>
  )
}
